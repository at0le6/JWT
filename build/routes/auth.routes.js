"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var router = (0, _express.Router)();
router.post('/signup', _auth.signUp);
router.post('/signin', _auth.signIn);
var _default = router;
exports["default"] = _default;