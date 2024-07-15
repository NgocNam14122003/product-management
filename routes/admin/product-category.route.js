const express = require("express");
const multer = require("multer");
const router = express.Router();
const controller = require("../../controllers/admin/product-category.controller");
const validate = require("../../validates/admin/product-category.validate");
const upload = multer();
const uploadCloud = require("../../middlewares/admin/uploadCloud.middlewares");
router.get("/", controller.index);

router.get("/create", controller.create);
router.post("/create",
    upload.single("thumbnail"),
    uploadCloud.upload,
    validate.createPost,
    controller.createPost
);;

module.exports = router;