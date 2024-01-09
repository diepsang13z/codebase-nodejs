'use strick';

const mongoose = require('mongoose');
const {
    db: { username, password, cluster },
} = require('../configs/config.mongdb');
const connectString = `mongodb+srv://${username}:${password}@${cluster}/`;

const { countConnect } = require('../helpers/check.connect');

class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose
            .connect(connectString, {
                maxPoolSize: 50,
            })
            .then((_) =>
                console.log(`Connected MongoDB success`, countConnect())
            )
            .catch((err) => console.log(`Error Connect!`));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
