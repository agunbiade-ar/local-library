const express = require('express');
const router = express.Router();

const {
  indexController,
  formControllerGet,
  formControllerPost,
} = require('../controllers/index.controller');

router.get('/', indexController);

router.get('/new', formControllerGet);

router.post('/new', formControllerPost);

module.exports.indexRouter = router;
