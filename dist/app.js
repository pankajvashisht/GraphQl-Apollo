/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/GraphQL/priorities.js":
/*!***********************************!*\
  !*** ./app/GraphQL/priorities.js ***!
  \***********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        priorities: [Priority]\n        priority(id: ID!): Priority\n    }\n\n    type Priority {\n        id: ID!\n        slug: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    priorities: function () {
      var _priorities = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findAll());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function priorities() {
        return _priorities.apply(this, arguments);
      }

      return priorities;
    }(),
    priority: function () {
      var _priority = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findByPk(args.id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function priority(_x, _x2, _x3, _x4) {
        return _priority.apply(this, arguments);
      }

      return priority;
    }()
  }
};

/***/ }),

/***/ "./app/GraphQL/status.js":
/*!*******************************!*\
  !*** ./app/GraphQL/status.js ***!
  \*******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allStatus: [Status]\n        status(id: ID!): Status\n    }\n\n    type Status {\n        id: ID!\n        slug: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    allStatus: function () {
      var _allStatus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findAll());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function allStatus() {
        return _allStatus.apply(this, arguments);
      }

      return allStatus;
    }(),
    status: function () {
      var _status = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findByPk(args.id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function status(_x, _x2, _x3, _x4) {
        return _status.apply(this, arguments);
      }

      return status;
    }()
  }
};

/***/ }),

/***/ "./app/GraphQL/tickets.js":
/*!********************************!*\
  !*** ./app/GraphQL/tickets.js ***!
  \********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        tickets: [Ticket]\n        ticket(id: ID!): Ticket\n    }\n\n    type Ticket {\n        id: ID!\n        subject: String\n        priority_id: Int\n        priority: Priority\n        status_id: Int\n        status: Status\n        user_id: Int\n        user: User\n        assigned_to_user_id: Int\n        assigned_to_user: User\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    tickets: function () {
      var _tickets = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["tickets"].findAll());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function tickets() {
        return _tickets.apply(this, arguments);
      }

      return tickets;
    }(),
    ticket: function () {
      var _ticket = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["tickets"].findByPk(args.id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function ticket(_x, _x2, _x3, _x4) {
        return _ticket.apply(this, arguments);
      }

      return ticket;
    }()
  },
  Ticket: {
    user: function () {
      var _user = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(obj.user_id));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function user(_x5, _x6, _x7, _x8) {
        return _user.apply(this, arguments);
      }

      return user;
    }(),
    priority: function () {
      var _priority = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["priorities"].findByPk(obj.priority_id));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function priority(_x9, _x10, _x11, _x12) {
        return _priority.apply(this, arguments);
      }

      return priority;
    }(),
    status: function () {
      var _status = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["status"].findByPk(obj.status_id));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function status(_x13, _x14, _x15, _x16) {
        return _status.apply(this, arguments);
      }

      return status;
    }(),
    assigned_to_user: function () {
      var _assigned_to_user = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(obj.assigned_to_user_id));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function assigned_to_user(_x17, _x18, _x19, _x20) {
        return _assigned_to_user.apply(this, arguments);
      }

      return assigned_to_user;
    }()
  }
};

/***/ }),

/***/ "./app/GraphQL/users.js":
/*!******************************!*\
  !*** ./app/GraphQL/users.js ***!
  \******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        users: [User]\n        user(id: ID!): User\n    }\n\n    type User {\n        id: ID!\n        email: String\n        name: String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var resolvers = {
  Query: {
    users: function () {
      var _users = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findAll());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function users() {
        return _users.apply(this, arguments);
      }

      return users;
    }(),
    user: function () {
      var _user = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _database__WEBPACK_IMPORTED_MODULE_1__["users"].findByPk(args.id));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function user(_x, _x2, _x3, _x4) {
        return _user.apply(this, arguments);
      }

      return user;
    }()
  }
};

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);



var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _require = __webpack_require__(/*! apollo-server-express */ "apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var cors = __webpack_require__(/*! cors */ "cors");

var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var server = new ApolloServer({
  modules: [__webpack_require__(/*! ./GraphQL/tickets */ "./app/GraphQL/tickets.js"), __webpack_require__(/*! ./GraphQL/status */ "./app/GraphQL/status.js"), __webpack_require__(/*! ./GraphQL/users */ "./app/GraphQL/users.js"), __webpack_require__(/*! ./GraphQL/priorities */ "./app/GraphQL/priorities.js")]
});
server.applyMiddleware({
  app: app
});
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen({
  port: 5000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:5000");
});

/***/ }),

/***/ "./app/database.js":
/*!*************************!*\
  !*** ./app/database.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

var db = {};
var sequelize = new Sequelize('graphql-mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
var models = [__webpack_require__(/*! ./models/priorities.js */ "./app/models/priorities.js"), __webpack_require__(/*! ./models/status.js */ "./app/models/status.js"), __webpack_require__(/*! ./models/tickets.js */ "./app/models/tickets.js"), __webpack_require__(/*! ./models/users.js */ "./app/models/users.js")]; // Initialize models

models.forEach(function (model) {
  var seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
}); // Apply associations

Object.keys(db).forEach(function (key) {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/***/ }),

/***/ "./app/models/priorities.js":
/*!**********************************!*\
  !*** ./app/models/priorities.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('priorities', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    slug: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'priorities',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/status.js":
/*!******************************!*\
  !*** ./app/models/status.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    slug: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'status',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/tickets.js":
/*!*******************************!*\
  !*** ./app/models/tickets.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tickets', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subject: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    priority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    assigned_to_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tickets',
    timestamps: false
  });
};

/***/ }),

/***/ "./app/models/users.js":
/*!*****************************!*\
  !*** ./app/models/users.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyYXBoUUwvcHJpb3JpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvR3JhcGhRTC9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0dyYXBoUUwvdGlja2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvR3JhcGhRTC91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL2FwcC9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL3ByaW9yaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy90aWNrZXRzLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbInR5cGVEZWZzIiwiZ3FsIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJwcmlvcml0aWVzIiwiZGIiLCJmaW5kQWxsIiwicHJpb3JpdHkiLCJvYmoiLCJhcmdzIiwiY29udGV4dCIsImluZm8iLCJmaW5kQnlQayIsImlkIiwiYWxsU3RhdHVzIiwic3RhdHVzIiwidGlja2V0cyIsInRpY2tldCIsIlRpY2tldCIsInVzZXIiLCJ1c2VyX2lkIiwicHJpb3JpdHlfaWQiLCJzdGF0dXNfaWQiLCJhc3NpZ25lZF90b191c2VyIiwiYXNzaWduZWRfdG9fdXNlcl9pZCIsInVzZXJzIiwiYm9keVBhcnNlciIsInJlcXVpcmUiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXJ2ZXIiLCJtb2R1bGVzIiwiYXBwbHlNaWRkbGV3YXJlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwiU2VxdWVsaXplIiwic2VxdWVsaXplIiwiaG9zdCIsImRpYWxlY3QiLCJwb29sIiwibWF4IiwibWluIiwiYWNxdWlyZSIsImlkbGUiLCJvcGVyYXRvcnNBbGlhc2VzIiwibW9kZWxzIiwiZm9yRWFjaCIsIm1vZGVsIiwic2VxTW9kZWwiLCJuYW1lIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFzc29jaWF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJEYXRhVHlwZXMiLCJkZWZpbmUiLCJ0eXBlIiwiSU5URUdFUiIsIlVOU0lHTkVEIiwiYWxsb3dOdWxsIiwicHJpbWFyeUtleSIsImF1dG9JbmNyZW1lbnQiLCJzbHVnIiwiU1RSSU5HIiwidGFibGVOYW1lIiwidGltZXN0YW1wcyIsInN1YmplY3QiLCJlbWFpbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1C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LFVBQUksRUFBRUYsU0FBUyxDQUFDUyxNQUFWLENBQWlCLEdBQWpCLENBREQ7QUFFTEosZUFBUyxFQUFFO0FBRk4sS0FQMEI7QUFXaENRLFNBQUssRUFBRTtBQUNOWCxVQUFJLEVBQUVGLFNBQVMsQ0FBQ1MsTUFBVixDQUFpQixHQUFqQixDQURBO0FBRU5KLGVBQVMsRUFBRTtBQUZMO0FBWHlCLEdBQTFCLEVBZUo7QUFDRkssYUFBUyxFQUFFLE9BRFQ7QUFFRkMsY0FBVSxFQUFFO0FBRlYsR0FmSSxDQUFQO0FBbUJBLENBcEJELEM7Ozs7Ozs7Ozs7O0FDRkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgICAgIHByaW9yaXRpZXM6IFtQcmlvcml0eV1cbiAgICAgICAgcHJpb3JpdHkoaWQ6IElEISk6IFByaW9yaXR5XG4gICAgfVxuXG4gICAgdHlwZSBQcmlvcml0eSB7XG4gICAgICAgIGlkOiBJRCFcbiAgICAgICAgc2x1ZzogU3RyaW5nXG4gICAgICAgIG5hbWU6IFN0cmluZ1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICBwcmlvcml0aWVzOiBhc3luYyAoKSA9PiBkYi5wcmlvcml0aWVzLmZpbmRBbGwoKSxcbiAgICAgICAgcHJpb3JpdHk6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XG4gICAgICAgICAgICBkYi5wcmlvcml0aWVzLmZpbmRCeVBrKGFyZ3MuaWQpLFxuICAgIH0sXG59XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9kYXRhYmFzZSdcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICAgIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcbiAgICAgICAgYWxsU3RhdHVzOiBbU3RhdHVzXVxuICAgICAgICBzdGF0dXMoaWQ6IElEISk6IFN0YXR1c1xuICAgIH1cblxuICAgIHR5cGUgU3RhdHVzIHtcbiAgICAgICAgaWQ6IElEIVxuICAgICAgICBzbHVnOiBTdHJpbmdcbiAgICAgICAgbmFtZTogU3RyaW5nXG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgcmVzb2x2ZXJzID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIGFsbFN0YXR1czogYXN5bmMgKCkgPT4gZGIuc3RhdHVzLmZpbmRBbGwoKSxcbiAgICAgICAgc3RhdHVzOiBhc3luYyAob2JqLCBhcmdzLCBjb250ZXh0LCBpbmZvKSA9PiBkYi5zdGF0dXMuZmluZEJ5UGsoYXJncy5pZCksXG4gICAgfSxcbn1cbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItZXhwcmVzcydcbmltcG9ydCAqIGFzIGRiIGZyb20gJy4uL2RhdGFiYXNlJ1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xuICAgICAgICB0aWNrZXRzOiBbVGlja2V0XVxuICAgICAgICB0aWNrZXQoaWQ6IElEISk6IFRpY2tldFxuICAgIH1cblxuICAgIHR5cGUgVGlja2V0IHtcbiAgICAgICAgaWQ6IElEIVxuICAgICAgICBzdWJqZWN0OiBTdHJpbmdcbiAgICAgICAgcHJpb3JpdHlfaWQ6IEludFxuICAgICAgICBwcmlvcml0eTogUHJpb3JpdHlcbiAgICAgICAgc3RhdHVzX2lkOiBJbnRcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNcbiAgICAgICAgdXNlcl9pZDogSW50XG4gICAgICAgIHVzZXI6IFVzZXJcbiAgICAgICAgYXNzaWduZWRfdG9fdXNlcl9pZDogSW50XG4gICAgICAgIGFzc2lnbmVkX3RvX3VzZXI6IFVzZXJcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgdGlja2V0czogYXN5bmMgKCkgPT4gZGIudGlja2V0cy5maW5kQWxsKCksXG4gICAgICAgIHRpY2tldDogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cbiAgICAgICAgICAgIGRiLnRpY2tldHMuZmluZEJ5UGsoYXJncy5pZCksXG4gICAgfSxcbiAgICBUaWNrZXQ6IHtcbiAgICAgICAgdXNlcjogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cbiAgICAgICAgICAgIGRiLnVzZXJzLmZpbmRCeVBrKG9iai51c2VyX2lkKSxcbiAgICAgICAgcHJpb3JpdHk6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+XG4gICAgICAgICAgICBkYi5wcmlvcml0aWVzLmZpbmRCeVBrKG9iai5wcmlvcml0eV9pZCksXG4gICAgICAgIHN0YXR1czogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cbiAgICAgICAgICAgIGRiLnN0YXR1cy5maW5kQnlQayhvYmouc3RhdHVzX2lkKSxcbiAgICAgICAgYXNzaWduZWRfdG9fdXNlcjogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT5cbiAgICAgICAgICAgIGRiLnVzZXJzLmZpbmRCeVBrKG9iai5hc3NpZ25lZF90b191c2VyX2lkKSxcbiAgICB9LFxufVxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vZGF0YWJhc2UnXG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgICBleHRlbmQgdHlwZSBRdWVyeSB7XG4gICAgICAgIHVzZXJzOiBbVXNlcl1cbiAgICAgICAgdXNlcihpZDogSUQhKTogVXNlclxuICAgIH1cblxuICAgIHR5cGUgVXNlciB7XG4gICAgICAgIGlkOiBJRCFcbiAgICAgICAgZW1haWw6IFN0cmluZ1xuICAgICAgICBuYW1lOiBTdHJpbmdcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgdXNlcnM6IGFzeW5jICgpID0+IGRiLnVzZXJzLmZpbmRBbGwoKSxcbiAgICAgICAgdXNlcjogYXN5bmMgKG9iaiwgYXJncywgY29udGV4dCwgaW5mbykgPT4gZGIudXNlcnMuZmluZEJ5UGsoYXJncy5pZCksXG4gICAgfSxcbn1cbiIsImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG5jb25zdCB7IEFwb2xsb1NlcnZlciB9ID0gcmVxdWlyZSgnYXBvbGxvLXNlcnZlci1leHByZXNzJylcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXG5hcHAudXNlKGNvcnMoKSlcblxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgbW9kdWxlczogW1xuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvdGlja2V0cycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvc3RhdHVzJyksXG4gICAgICAgIHJlcXVpcmUoJy4vR3JhcGhRTC91c2VycycpLFxuICAgICAgICByZXF1aXJlKCcuL0dyYXBoUUwvcHJpb3JpdGllcycpLFxuICAgIF0sXG59KVxuXG5zZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pXG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdIZWxsbyBXb3JsZCEnKSlcblxuYXBwLmxpc3Rlbih7IHBvcnQ6IDUwMDAgfSwgKCkgPT5cbiAgICBjb25zb2xlLmxvZyhg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDo1MDAwYCksXG4pXG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKVxuXG52YXIgZGIgPSB7fVxuXG5jb25zdCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKCdncmFwaHFsLW15c3FsJywgJ3Jvb3QnLCAnJywge1xuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIGRpYWxlY3Q6J215c3FsJyxcbiAgICBwb29sOiB7XG4gICAgICAgIG1heDogNSxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBhY3F1aXJlOiAzMDAwMCxcbiAgICAgICAgaWRsZTogMTAwMDAsXG4gICAgfSxcbiAgICAvLyBodHRwOi8vZG9jcy5zZXF1ZWxpemVqcy5jb20vbWFudWFsL3R1dG9yaWFsL3F1ZXJ5aW5nLmh0bWwjb3BlcmF0b3JzXG4gICAgb3BlcmF0b3JzQWxpYXNlczogZmFsc2UsXG59KVxuXG5sZXQgbW9kZWxzID0gW1xuICAgIHJlcXVpcmUoJy4vbW9kZWxzL3ByaW9yaXRpZXMuanMnKSxcbiAgICByZXF1aXJlKCcuL21vZGVscy9zdGF0dXMuanMnKSxcbiAgICByZXF1aXJlKCcuL21vZGVscy90aWNrZXRzLmpzJyksXG4gICAgcmVxdWlyZSgnLi9tb2RlbHMvdXNlcnMuanMnKSxcbl1cblxuLy8gSW5pdGlhbGl6ZSBtb2RlbHNcbm1vZGVscy5mb3JFYWNoKG1vZGVsID0+IHtcbiAgICBjb25zdCBzZXFNb2RlbCA9IG1vZGVsKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuICAgIGRiW3NlcU1vZGVsLm5hbWVdID0gc2VxTW9kZWxcbn0pXG5cbi8vIEFwcGx5IGFzc29jaWF0aW9uc1xuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoJ2Fzc29jaWF0ZScgaW4gZGJba2V5XSkge1xuICAgICAgICBkYltrZXldLmFzc29jaWF0ZShkYilcbiAgICB9XG59KVxuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemVcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRiXG4iLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3ByaW9yaXRpZXMnLCB7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDEwKS5VTlNJR05FRCxcblx0XHRcdGFsbG93TnVsbDogZmFsc2UsXG5cdFx0XHRwcmltYXJ5S2V5OiB0cnVlLFxuXHRcdFx0YXV0b0luY3JlbWVudDogdHJ1ZVxuXHRcdH0sXG5cdFx0c2x1Zzoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORyg2NCksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NiksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fVxuXHR9LCB7XG5cdFx0dGFibGVOYW1lOiAncHJpb3JpdGllcycsXG5cdFx0dGltZXN0YW1wczogZmFsc2Vcblx0fSk7XG59O1xuIiwiLyoganNoaW50IGluZGVudDogMSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG5cdHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCdzdGF0dXMnLCB7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDEwKS5VTlNJR05FRCxcblx0XHRcdGFsbG93TnVsbDogZmFsc2UsXG5cdFx0XHRwcmltYXJ5S2V5OiB0cnVlLFxuXHRcdFx0YXV0b0luY3JlbWVudDogdHJ1ZVxuXHRcdH0sXG5cdFx0c2x1Zzoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORyg2NCksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NiksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fVxuXHR9LCB7XG5cdFx0dGFibGVOYW1lOiAnc3RhdHVzJyxcblx0XHR0aW1lc3RhbXBzOiBmYWxzZVxuXHR9KTtcbn07XG4iLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3RpY2tldHMnLCB7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKS5VTlNJR05FRCxcblx0XHRcdGFsbG93TnVsbDogZmFsc2UsXG5cdFx0XHRwcmltYXJ5S2V5OiB0cnVlLFxuXHRcdFx0YXV0b0luY3JlbWVudDogdHJ1ZVxuXHRcdH0sXG5cdFx0c3ViamVjdDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLlNUUklORygyNTYpLFxuXHRcdFx0YWxsb3dOdWxsOiBmYWxzZVxuXHRcdH0sXG5cdFx0cHJpb3JpdHlfaWQ6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSKDExKSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdHN0YXR1c19pZDoge1xuXHRcdFx0dHlwZTogRGF0YVR5cGVzLklOVEVHRVIoNCksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHR1c2VyX2lkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fSxcblx0XHRhc3NpZ25lZF90b191c2VyX2lkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMSksXG5cdFx0XHRhbGxvd051bGw6IHRydWVcblx0XHR9XG5cdH0sIHtcblx0XHR0YWJsZU5hbWU6ICd0aWNrZXRzJyxcblx0XHR0aW1lc3RhbXBzOiBmYWxzZVxuXHR9KTtcbn07XG4iLCIvKiBqc2hpbnQgaW5kZW50OiAxICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcblx0cmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXJzJywge1xuXHRcdGlkOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuSU5URUdFUigxMCkuVU5TSUdORUQsXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlLFxuXHRcdFx0cHJpbWFyeUtleTogdHJ1ZSxcblx0XHRcdGF1dG9JbmNyZW1lbnQ6IHRydWVcblx0XHR9LFxuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoMjU2KSxcblx0XHRcdGFsbG93TnVsbDogZmFsc2Vcblx0XHR9LFxuXHRcdGVtYWlsOiB7XG5cdFx0XHR0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NiksXG5cdFx0XHRhbGxvd051bGw6IGZhbHNlXG5cdFx0fVxuXHR9LCB7XG5cdFx0dGFibGVOYW1lOiAndXNlcnMnLFxuXHRcdHRpbWVzdGFtcHM6IGZhbHNlXG5cdH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9