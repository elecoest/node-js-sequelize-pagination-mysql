
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    /**
     * @swagger
     * /v1/auth/signup:
     *   post:
     *     tags:
     *     - User
     *     summary: Create user 👻
     *     description: Give me the f**king your information to create
     *     consumes:
     *     - application/json
     *     produces:
     *     - application/json
     *     parameters:
     *     - in: body
     *       name: body
     *       description: Created user object
     *       required: true
     *       schema:
     *         $ref: '#/components/schemas/CreateUser'
     *     responses:
     *       201:
     *         description: Registered successful
     *         content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/UserResponse'
     *       403:
     *         description: Username or email is existed
     *         content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/ErrorResponse"
     *       429:
     *         description: Too many requests. You exceed the authorized rate, please try again after an hour
     *       500:
     *         description: Error
     *         content:
     *            application/json:
     *              schema:
     *                $ref: "#/components/schemas/ErrorResponse"
     */
    app.post(
        "/v1/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );


    /**
     * @swagger
     * /v1/auth/signin:
     *   post:
     *     tags:
     *     - User
     *     summary: Retrieve token 👻
     *     description: If you wanna get an access token, Give me the f**king your information
     *     consumes:
     *     - application/json
     *     produces:
     *     - application/json
     *     parameters:
     *     - in: body
     *       name: body
     *       description: Created user object
     *       required: true
     *       schema:
     *         $ref: '#/components/schemas/LoginUser'
     * 
     *     responses:
     *       200:
     *         description: Login successful
     *         content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/LoginResponse'
     *       403:
     *         description: Username and password don't match
     *         content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/ErrorResponse'
     *       405:
     *         description: Invalid input
     *         content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/ErrorResponse'
     *       429:
     *         description: Too many requests. You exceed the authorized rate, please try again after an hour
     *       500:
     *         description: Error
     *         content:
     *            application/json:
     *              schema:
     *                $ref: '#/components/schemas/ErrorResponse'
     */

    app.post("/v1/auth/signin", controller.signin);

    /**
    * @swagger
    * /v1/auth/refreshtoken:
    *   post:
    *     tags:
    *        - User
    *     summary: refresh Token
    *     description: 
   */
    app.post("/v1/auth/refreshtoken", controller.refreshToken);

    /**
    * @swagger
    * tags:
    *   - name: User
    *     description: Users endpoint
    */
};