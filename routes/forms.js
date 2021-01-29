var express = require('express');
var router = express.Router();
var formController = require('../controllers/forms');

/* GET one form data. */
router.get('/:email', formController.getForm);

/* GET all form data. */
router.get('/', formController.getAllForms);

/* POST form data. */
router.post('/', formController.createForm);

/* UPDATE form data. */
router.patch('/:id', formController.updateForm);

/* DELETE form data. */
router.delete('/:id', formController.deleteForm);

module.exports = router;
