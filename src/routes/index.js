import express from "express";

const router = express.Router();

const initializeRoutes = () => {
    router.get('/users', (req, res) => {
         res.json({"aa":"aa"});
    });
}

export {
    initializeRoutes
}
