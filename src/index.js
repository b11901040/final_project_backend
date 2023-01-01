import server from './server'
import mongo from './mongo';
import express from 'express'

mongo.connect();

const port = process.env.PORT || 4000;


server.listen({port}, () => {
    console.log(`Listening on http://localhost:${port}`);
});
