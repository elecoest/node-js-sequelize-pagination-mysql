module.exports = app => {
  const fftris = require("../controllers/fftri.controller.js");

  var router = require("express").Router();

  // Create a new Fftri
  //router.post("/", fftris.create);
  /**
   * @swagger
   * /v1/fftris:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - FFTri
   *     summary: Retrieve a list of fftris
   *     description: Retrieve a list of fftri
   *     parameters:
   *       - in: path
   *         name: name
   *         required: false
   *         schema:
   *           type: string
   *       - in: path
   *         name: page
   *         required: false
   *         schema:
   *           type: integer
   *       - in: path
   *         name: sortby
   *         required: false
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Get fftris successful
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
   *                     $ref: '#/components/schemas/Fftri'
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
  router.get("/", fftris.findAll);

  /**
   * @swagger
   * /v1/fftris/{id}:
   *   get:
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - FFTri
   *     summary: Retrieve a single fftri with id
   *     description: Retrieve a single fftri. 
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the fftri to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Get fftri successful
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Fftri'  
   *       401:
   *         description: Token is invalid
   *         content:
   *            application/json:
   *              schema:
   *                 $ref: '#/components/schemas/ErrorResponse'
   *       429:
   *         description: Too many requests. You exceed the authorized rate, please try again after an hour
   */
  router.get("/:id", fftris.findOne);

  // Update a Fftri with id
  //router.put("/:id", fftris.update);

  // Delete a Fftri with id
  //router.delete("/:id", fftris.delete);

  // Create a new Fftri
  //router.delete("/", fftris.deleteAll);

  /**
  * @swagger
  * tags:
  *   - name: FFTri
  *     description: FFTri endpoint
  */
  app.use('/v1/fftri', router);
};
