const express = require("express");
const router = express.Router();
const axios = require("axios");
const ProductModel = require("../models/ProductModel");

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:56804/api/product/product-list");
        const products = response.data?.data?.map(item => new ProductModel(item)) || [];
        res.render("home", { products });
    } catch (err) {
        console.error("❌ Lỗi lấy dữ liệu sản phẩm:", err.message);
        res.render("home", { products: [] });
    }
});

module.exports = router;
