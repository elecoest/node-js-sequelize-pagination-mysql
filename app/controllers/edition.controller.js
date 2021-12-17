const db = require("../models");
const Edition = db.editions;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, mapage, limit) => {
  const { count: totalItems, rows: editions } = data;
  const total_pages = Math.ceil(totalItems / limit);
  const results = editions;
  const total_results = totalItems ? +totalItems : 0;
  const page = mapage ? +mapage : +1;

  return { page, results, total_pages, total_results };
};

// Create and Save a new Edition
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Edition
  const edition = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Edition in the database
  Edition.create(edition)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Edition."
      });
    });
};

// Retrieve all Editions from the database.
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

  Edition.findAndCountAll({ where: condition, limit, offset, include: ["trial"] })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving editions."
      });
    });
};

// Find a single Edition with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Edition.findByPk(id, { include: ["edition"] })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Edition with id=" + id
      });
    });
};

// Update a Edition by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Edition.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Edition was updated successfully."
        });
      } else {
        res.status(200).send({
          message: `Cannot update Edition with id=${id}. Maybe Edition was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Edition with id=" + id
      });
    });
};

// Delete a Edition with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Edition.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Edition was deleted successfully!"
        });
      } else {
        res.status(200).send({
          message: `Cannot delete Edition with id=${id}. Maybe Edition was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Edition with id=" + id
      });
    });
};

// Delete all Editions from the database.
exports.deleteAll = (req, res) => {
  Edition.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(200).send({ message: `${nums} Editions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all editions."
      });
    });
};

// find all published Edition
exports.findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Edition.findAndCountAll({ where: { published: true }, limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving editions."
      });
    });
};
