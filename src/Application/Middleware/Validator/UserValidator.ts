import { body } from "express-validator";

const validateCreateUser = [
    body('username').isString().withMessage('Userame must be a string'),
    body('name').isString().withMessage('Name must be a string'),
    body('lastName').isString().withMessage('Last name must be a string'),
    body('email').isEmail().withMessage('Must be a valid email'),    
    body('password').isStrongPassword(
        {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
            pointsPerUnique: 1,
            pointsPerRepeat: 0.5,
            pointsForContainingLower: 10,
            pointsForContainingUpper: 10,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10
        }
    ).withMessage('Password must be at least 8 characters long, contain a uppercase letter, contain a lowercase letter, contain a number and contain a symbol'),
]

const validateLogin = [
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password').isString().withMessage('Password must be a string')
]

const validateUpdatePassword = [
    body('id').isString().withMessage('Id must be a string'),
    body('currentPassword').isString().withMessage('Current Password must be a string'),
    body('newPassword').isStrongPassword(
        {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
            pointsPerUnique: 1,
            pointsPerRepeat: 0.5,
            pointsForContainingLower: 10,
            pointsForContainingUpper: 10,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10
        }
    ).withMessage('Password must be at least 8 characters long, contain a uppercase letter, contain a lowercase letter, contain a number and contain a symbol'),
]

export 
{
    validateCreateUser,
    validateLogin,
    validateUpdatePassword
}