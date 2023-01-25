import express from "express";
import {
    getAllServices,
    createService,
    updateService,
    deleteService,
} from "../controllers/serviceController.js";
import multer from "multer"

const serviceRouter = express.Router();

serviceRouter.get("/services", getAllServices);
serviceRouter.post("/services",multer({dest: 'public/storage'}).array('images'), createService);
serviceRouter.put("/services/:id", updateService);
serviceRouter.delete("/services/:id", deleteService);

export default serviceRouter;