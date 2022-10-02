'use strict'
const express = require ('express');
let peopleController = require ('../controllers/peopleController.js');
let router = express.Router ();
router.get ('/', peopleController.list);
router.post ('/add', peopleController.save);
router.get ('/edit/:id', peopleController.edit);
router.post ('/edit/:id', peopleController.update);
router.get ('/delete/:id', peopleController.delete);
module.exports = router;