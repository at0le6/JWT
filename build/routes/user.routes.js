"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../controllers/auth.controller");

var _middleware = require("../middleware");

var router = (0, _express.Router)();
router.route('/').post([_middleware.authoritations.verifyToken, _middleware.authoritations.isAdmin, _middleware.verify.checkRolesExisted, _middleware.verify.checkDuplicateUsernameOrEmail], _auth.signUp);
var _default = router;
exports["default"] = _default;