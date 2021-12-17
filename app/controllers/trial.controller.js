const db = require("../models");
const Trial = db.trials;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, mapage, limit) => {
  const { count: totalItems, rows: trials } = data;
  const total_pages = Math.ceil(totalItems / limit);
  const results = trials;
  const total_results = totalItems ? +totalItems : 0;
  const page = mapage ? +mapage : +1;

  return { page, results, total_pages, total_results };
};

// Create and Save a new Trial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Trial
  const trial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Trial in the database
  Trial.create(trial)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trial."
      });
    });
};

// Retrieve all Trials from the database.
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

  Trial.findAndCountAll({ where: condition, limit, offset, include: [{ all: true, nested: true }] })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving trials."
      });
    });
};

// Find a single Trial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Trial.findByPk(id, { include: [{ all: true, nested: true }] })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Trial with id=" + id
      });
    });
};

// Update a Trial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Trial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Trial was updated successfully."
        });
      } else {
        res.status(200).send({
          message: `Cannot update Trial with id=${id}. Maybe Trial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Trial with id=" + id
      });
    });
};

// Delete a Trial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Trial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Trial was deleted successfully!"
        });
      } else {
        res.status(200).send({
          message: `Cannot delete Trial with id=${id}. Maybe Trial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Trial with id=" + id
      });
    });
};

// Delete all Trials from the database.
exports.deleteAll = (req, res) => {
  Trial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(200).send({ message: `${nums} Trials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all trials."
      });
    });
};
