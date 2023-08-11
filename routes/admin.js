import  express  from "express";
import getallusers from "../controllers/admin.js"

const router = express.Router();

router.get("/all/:name",getallusers);
export default router;