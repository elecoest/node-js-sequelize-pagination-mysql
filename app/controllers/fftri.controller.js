const db = require("../models");
const Fftri = db.fftris;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, mapage, limit) => {
  const { count: totalItems, rows: fftris } = data;
  const total_pages = Math.ceil(totalItems / limit);
  const results = fftris;
  const total_results = totalItems ? +totalItems : 0;
  const page = mapage ? +mapage : +1;

  return { page, results, total_pages, total_results };
};

// Create and Save a new Fftri
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Fftri
  const fftri = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Fftri in the database
  Fftri.create(fftri)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fftri."
      });
    });
};

// Retrieve all Fftris from the database.
exports.findAll = (req, res) => {
  const { page, size, name, sortby } = req.query;
  let querySort = sortby
  let sort = [];

  if (querySort) {
    
    if (typeof querySort === 'string') {
      querySort = querySort.split(',');
    }

    if (Array.isArray(querySort)) {
      sort = querySort.map(query => {
        return [
          query.replace(/^-/, ''),
          query[0] !== '-' ? 'ASC' : 'DESC'
        ];
      });
    }
    else {
      for (let key in querySort) {
        if (querySort.hasOwnProperty(key)) {
          sort.push([
            key,
            parseInt(querySort[key], 10) > 0 ? 'ASC' : 'DESC'
          ]);
        }
      }
    }
  }

  var condition = name ? { name: { [Op.like]: `%${name}%` } } : {};

  if (page == 0) {
    res.status(400).send({
      message: "Page can not be empty!"
    });
    return;
  }

  const { limit, offset } = getPagination(page - 1, size);

  Fftri.findAndCountAll({ where: condition, order: sort, limit, offset, include: [{ all: true, nested: true }] })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving fftris."
      });
    });
};

// Find a single Fftri with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Fftri.findByPk(id, { include: [{ all: true, nested: true }] })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Fftri with id=" + id
      });
    });
};

// Update a Fftri by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Fftri.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Fftri was updated successfully."
        });
      } else {
        res.status(200).send({
          message: `Cannot update Fftri with id=${id}. Maybe Fftri was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fftri with id=" + id
      });
    });
};

// Delete a Fftri with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Fftri.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Fftri was deleted successfully!"
        });
      } else {
        res.status(200).send({
          message: `Cannot delete Fftri with id=${id}. Maybe Fftri was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Fftri with id=" + id
      });
    });
};

// Delete all Fftris from the database.
exports.deleteAll = (req, res) => {
  Fftri.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(200).send({ message: `${nums} Fftris were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all fftris."
      });
    });
};
