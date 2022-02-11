const db = require("../models");
const Content = db.contents;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, mapage, limit) => {
  const { count: totalItems, rows: contents } = data;
  const total_pages = Math.ceil(totalItems / limit);
  const results = contents;
  const total_results = totalItems ? +totalItems : 0;
  const page = mapage ? +mapage : +1;

  return { page, results, total_pages, total_results };
};

// Create and Save a new Content
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Content
  const content = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Content in the database
  Content.create(content)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Content."
      });
    });
};

// Retrieve all Contents from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  // 187 is the FFTRI catid
  var condition = name ? { title: { [Op.like]: `%${name}%` }, state: true, catid: 187 } : { state: true, catid: 187 };

  if (page == 0) {
    res.status(400).send({
      message: "Page can not be empty!"
    });
    return;
  }

  const { limit, offset } = getPagination(page - 1, size);

  Content.findAndCountAll({ where: condition, limit, offset, include: [{ all: true, nested: true }] })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contents."
      });
    });
};

// Find a single Content with an id
exports.findOne = (req, res) => {
  // 187 is the FFTRI catid
  // we can't use findPk like others controllers
  Content.findOne({ where: { id: req.params.id, state: true, catid: 187 }, include: [{ all: true, nested: true }] })
    .then(data => {
      if (data === null) {
        res.status(404).send(data);
      } else {
        images = JSON.parse(data.image_intro);
        data.image_intro = 'https://www.t2area.com/' + images.image_intro;
        res.status(200).send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Content with id=" + id
      });
    });
};

// Update a Content by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Content.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Content was updated successfully."
        });
      } else {
        res.status(200).send({
          message: `Cannot update Content with id=${id}. Maybe Content was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Content with id=" + id
      });
    });
};

// Delete a Content with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Content.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "Content was deleted successfully!"
        });
      } else {
        res.status(200).send({
          message: `Cannot delete Content with id=${id}. Maybe Content was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Content with id=" + id
      });
    });
};

// Delete all Contents from the database.
exports.deleteAll = (req, res) => {
  Content.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.status(200).send({ message: `${nums} Contents were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all contents."
      });
    });
};
