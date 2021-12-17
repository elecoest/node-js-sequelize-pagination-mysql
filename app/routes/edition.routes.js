
module.exports = app => {
   const editions = require("../controllers/edition.controller.js");

   var router = require("express").Router();

   // Create a new edition
   //router.post("/", editions.create);

   /**
   * @swagger
   * /v1/editions:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Editions
   *     summary: Retrieve a list of editions
   *     description: Retrieve a list of edition
   *     responses:
   *       200:
   *         description: Get editions successful
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
   *                     $ref: '#/components/schemas/Edition'
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
   */
   router.get("/", editions.findAll);

  /**
   * @swagger
   * /v1/editions/{id}:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Editions
   *     summary: Retrieve a single edition with id
   *     description: Retrieve a single edition. 
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the edition to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Get edition successful
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Edition'  
   *       401:
   *         description: Token is invalid
   *         content:
   *            application/json:
   *              schema:
   *                 $ref: '#/components/schemas/ErrorResponse'
   */
   router.get("/:id", editions.findOne);

   // Update a edition with id
   //router.put("/:id", editions.update);

   // Delete a edition with id
   //router.delete("/:id", editions.delete);

   // Create a new edition
   //router.delete("/", editions.deleteAll);

   /**
   * @swagger
   * tags:
   *   - name: Editions
   *     description: editions endpoint
   */
   app.use('/v1/editions', router);
};
