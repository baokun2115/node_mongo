const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://127.0.0.1:27017';
const dbName = "conFusion"
const dbOper = require('./operations');

MongoClient.connect(url).then((client) => {
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    dbOper.insertDocument(db, { name: "Barbecue", description: "Grill beef" }, "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);
            return dbOper.findDocuments(db, "dishes")
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);
            return dbOper.updateDocument(db, { name: "King crap" }, { description: "Updated Test" }, "dishes")
        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);
            return dbOper.findDocuments(db, "dishes")
        }).then((docs) => {
            console.log("Found Documents after update:\n", docs);
            return client.close();
        })
        .catch((err) => console.log(err));
}
).catch((err) => console.log(err));