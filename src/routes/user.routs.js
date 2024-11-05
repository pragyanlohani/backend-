import {Router} from "express";
import { regesterUser } from "../controllers/user.controller.js";
import {upload} from "..multer/middleware/multer.middleware.js";


const router = Router();


router.route("/regester").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    regesterUser)

export default  router;