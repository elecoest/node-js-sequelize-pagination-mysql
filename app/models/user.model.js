/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUser:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *           format: password
 *         roles:
 *           type: array
 *           items:
 *              type: string
 * 	       required:
 *           - username
 *           - email
 *           - password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    UserResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    LoginUser:
 *     type: object
 *     properties:
 *      username:
 *        type: string
 *        example: "admin"
 *      password:
 *        type: string
 *        example: "password"
 * 		required:
 *      - username
 *      - password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *    LoginResponse:
 *     type: object
 *     properties:
 *      username:
 *        type: string
 *      email:
 *        type: string
 *      roles:
 *        type: array
 *        items:
 *           type: string
 *      accessToken:
 *        type: string
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   ErrorResponse:
 *    type: object
 *    properties:
 *      message:
 *        type: string
 */

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        paranoid: true,
        underscored: false,
        freezeTableName: true,
        tableName: 'zfv71_fftri_users',
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "username" },
                ]
            }
        ]
    });

    return User;
};