"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.createSong = exports.getSong = exports.getSongs = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _config = require("../../config");

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbo;
var ObjectID = _mongodb["default"].ObjectID;
console.log(ObjectID); //connect to database

var normalizeID = function normalizeID(idString) {
  return ObjectID(idString);
}; //CRUD operations


var getSongs = function getSongs(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    db.collection('songs').find(query).toArray(done);
  });
};

exports.getSongs = getSongs;

var getSong = function getSong(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('songs').findOne(query, done);
  });
};

exports.getSong = getSong;

var createSong = function createSong(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('songs').insertOne(query, done);
  });
};

exports.createSong = createSong;

var updateSong = function updateSong(query, object, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    } //prevent whole document replacing


    object = {
      $set: object
    };
    console.log(object);
    return db.collection('songs').updateOne(query, object, done);
  });
};

exports.updateSong = updateSong;

var deleteSong = function deleteSong(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('songs').deleteOne(query, done);
  });
};

exports.deleteSong = deleteSong;