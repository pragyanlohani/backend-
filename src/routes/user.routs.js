import {Router} from "express";
import { regesterUser } from "../controllers/user.controller.js";


const router = Router();


router.route("/regester").post(regesterUser)

export default  router;