module.exports = app => {
  const contents = require("../controllers/content.controller.js");

  var router = require("express").Router();

  // Create a new Content
  //router.post("/", contents.create);
  /**
   * @swagger
   * /v1/contents:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Contents
   *     summary: Retrieve a list of contents
   *     description: Retrieve a list of content
   *     responses:
   *       200:
   *         description: Get contents successful
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
   *                     $ref: '#/components/schemas/Content'
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
  //router.get("/", contents.findAll);

  /**
   * @swagger
   * /v1/contents/{id}:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Contents
   *     summary: Retrieve a single content with id
   *     description: Retrieve a single content. 
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the content to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Get content successful
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Content'  
   *       401:
   *         description: Token is invalid
   *         content:
   *            application/json:
   *              schema:
   *                 $ref: '#/components/schemas/ErrorResponse'
   *       429:
   *         description: Too many requests. You exceed the authorized rate, please try again after an hour
   */
  router.get("/:id", contents.findOne);

  // Update a Content with id
  //router.put("/:id", contents.update);

  // Delete a Content with id
  //router.delete("/:id", contents.delete);

  // Create a new Content
  //router.delete("/", contents.deleteAll);

  /**
  * @swagger
  * tags:
  *   - name: Contents
  *     description: contents endpoint
  */
  app.use('/v1/contents', router);
};
