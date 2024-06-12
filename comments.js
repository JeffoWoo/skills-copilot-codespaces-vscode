// Create web server
// Load all the required modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Create a comment
// api/comments
router.post('/',
    auth,
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('message', 'The message is required').not().isEmpty()
    ],
    commentController.createComment
);

// Get comments by id
router.get('/',
    auth,
    commentController.getComments
);

// Update comment by id
router.put('/:id',
    auth,
    commentController.updateComment
);

// Delete comment by id
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;