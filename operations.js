const assert = require('assert');

// CREATE
exports.insertDocument = (db, document, collectionName, callback) => {

    const collection = db.collection(collectionName);
    return collection.insertOne(document);
}

// READ
exports.findDocuments = function (db, collectionName, callback) {
    const collection = db.collection(collectionName);
    return collection.find({}).toArray();
}

// UPDATE
exports.updateDocument = function (db, data, update, collectionName, callback) {
    const collection = db.collection(collectionName);
    return collection.updateOne(data, { $set: update }, null);
}

// DELETE
exports.deleteDocument = function (db, data, collectionName, callback) {
    const collection = db.collection(collectionName);
    return collection.deleteOne(data);
}
