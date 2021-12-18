module.exports = app => {
  const trials = require("../controllers/trial.controller.js");

  var router = require("express").Router();

  // Create a new Trial
  //router.post("/", trials.create);
  /**
   * @swagger
   * /v1/trials:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Trials
   *     summary: Retrieve a list of trials
   *     description: Retrieve a list of trial
   *     responses:
   *       200:
   *         description: Get trials successful
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
   *                     $ref: '#/components/schemas/Trial'
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
  router.get("/", trials.findAll);

  /**
   * @swagger
   * /v1/trials/{id}:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Trials
   *     summary: Retrieve a single trial with id
   *     description: Retrieve a single trial. 
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the trial to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Get trial successful
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Trial'  
   *       401:
   *         description: Token is invalid
   *         content:
   *            application/json:
   *              schema:
   *                 $ref: '#/components/schemas/ErrorResponse'
   *       429:
   *         description: Too many requests. You exceed the authorized rate, please try again after an hour
   */
  router.get("/:id", trials.findOne);

  // Update a Trial with id
  //router.put("/:id", trials.update);

  // Delete a Trial with id
  //router.delete("/:id", trials.delete);

  // Create a new Trial
  //router.delete("/", trials.deleteAll);

  /**
  * @swagger
  * tags:
  *   - name: Trials
  *     description: trials endpoint
  */
  app.use('/v1/trials', router);
};
