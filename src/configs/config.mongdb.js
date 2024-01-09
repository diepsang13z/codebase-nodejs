'use strick';

const dev = {
    app: {
        port: process.env.DEV_APP_PORT,
    },
    db: {
        username: process.env.DEV_DB_USERNAME || 'diepsang13z',
        password: process.env.DEV_DB_PASSWORD || '123',
        cluster:
            process.env.DEV_DB_CLUSTER || 'learnnodejs.lcot7lm.mongodb.net',
    },
};

const prod = {
    app: {
        port: process.env.PROD_APP_PORT,
    },
    db: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        cluster: process.env.DEV_PROD_CLUSTER,
    },
};

const config = { dev, prod };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
