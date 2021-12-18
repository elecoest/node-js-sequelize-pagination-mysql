module.exports = app => {
  const events = require("../controllers/event.controller.js");

  var router = require("express").Router();

  // Create a new event
  //router.post("/", events.create);

  /**
   * @swagger
   * /v1/events:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Events
   *     summary: Retrieve a list of events
   *     description: Retrieve a list of event
   *     responses:
   *       200:
   *         description: Get events successful
   *         content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                   page:
   *                     type: integer
   *                   results:
   *                     type: array
   *                   items:
   *                     $ref: '#/components/schemas/Event'
   *                   total_pages:
   *                     type: integer
   *                   total_results:
   *                     type: integer
   *       401:
   *         description: Token is invalid
   *         content:
   *            application/json:
   *              schema:
   *                 $ref: '#/components/schemas/ErrorResponse'
   *       429:
   *         description: Too many requests. You exceed the authorized rate, please try again after an hour
   */
  router.get("/", events.findAll);
  
  /**
   * @swagger
   * /v1/events/{id}:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Events
   *     summary: Retrieve a single event with id
   *     description: Retrieve a single event. 
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the event to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Get event successful
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Event'  
   *       401:
   *         description: Token is invalid
   *         content:
   *            application/json:
   *              schema:
   *                 $ref: '#/components/schemas/ErrorResponse'
   *       429:
   *         description: Too many requests. You exceed the authorized rate, please try again after an hour
   */
  router.get("/:id", events.findOne);

  // Update a event with id
  //router.put("/:id", events.update);

  // Delete a event with id
  //router.delete("/:id", events.delete);

  // Create a new event
  //router.delete("/", events.deleteAll);

  /**
   * @swagger
   * tags:
   *   - name: Events
   *     description: events endpoint
   */
  app.use('/v1/events', router);
};
