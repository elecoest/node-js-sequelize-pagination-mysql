const db = require("../models");
const Place = db.places;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, mapage, limit) => {
  const { count: totalItems, rows: places } = data;
  const total_pages = Math.ceil(totalItems / limit);
  const results = places;
  const total_results = totalItems ? +totalItems : 0;
  const page = mapage ? +mapage : +1;

  return { page, results, total_pages, total_results };
};

// Create and Save a new Place
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Place
  const place = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Place in the database
  Place.create(place)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Place."
      });
    });
};

// Retrieve all Places from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` }, state: true } : { state: true };

  if (page == 0) {
    res.status(400).send({
      message: "Page can not be empty!"
    });
    return;
  }

  const { limit, offset } = getPagination(page - 1, size);

  Place.findAndCountAll({ where: condition, limit, offset, include: ["editions"] })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving places."
      });
    });
};

// Find a single Place with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Place.findByPk(id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Place with id=" + id
      });
    });
};

// Update a Place by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Place.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Place was updated successfully."
        });
      } else {
        res.status(200).send({
          message: `Cannot update Place with id=${id}. Maybe Place was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Place with id=" + id
      });
    });
};

// Delete a Place with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Place.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Place was deleted successfully!"
        });
      } else {
        res.status(200).send({
          message: `Cannot delete Place with id=${id}. Maybe Place was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Place with id=" + id
      });
    });
};

// Delete all Places from the database.
exports.deleteAll = (req, res) => {
  Place.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(200).send({ message: `${nums} Places were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all places."
      });
    });
};
