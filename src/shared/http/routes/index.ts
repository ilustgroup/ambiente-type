import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
return res.json({ massage: "Hellow World" })
});

export default routes;
