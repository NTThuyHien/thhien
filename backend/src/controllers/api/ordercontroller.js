//D:\DaiHocHutechKhoa2021\41.NgoNguPhatTrienMoi\website_bandienthoai_nodejs_javascript_mongodb\backend\src\controllers\api\ordercontroller.js
const express = require("express");
const router = express.Router();
const verifyToken = require("../../util/VerifyToken");
const checkRole = require("../../util/checkRole");
const { checkMultiRole } = require("../../util/checkRole"); // Sửa dòng này
const OrderService = require("../../services/orderService");
const orderService = new OrderService();

// ✅ Thêm vào giỏ hàng
router.post("/add-to-cart", verifyToken, checkRole("user"), async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userId = req.userData.user._id;
        await orderService.addToCart(userId, productId, quantity);
        res.json({ message: "✅ Đã thêm vào giỏ hàng" });
    } catch (err) {
        console.error("❌", err);
        res.status(500).json({ message: "Lỗi server" });
    }
});

// ✅ Lấy giỏ hàng
router.get("/cart", verifyToken, checkMultiRole(["admin", "user"]), async (req, res) => {
    try {
        const userId = req.userData.user._id;
        const cart = await orderService.getCart(userId);
        res.json({ cart });
    } catch (err) {
        res.status(500).json({ message: "Lỗi server" });
    }
});

// ✅ Xoá khỏi giỏ
router.delete("/remove-from-cart", verifyToken, checkMultiRole(["admin", "user"]), async (req, res) => {
    try {
        const userId = req.userData.user._id;
        const { productId } = req.query;
        await orderService.removeFromCart(userId, productId);
        res.json({ message: "✅ Đã xóa khỏi giỏ hàng" });
    } catch (err) {
        res.status(500).json({ message: "Lỗi server" });
    }
});

// ✅ Thanh toán
router.post("/checkout", verifyToken, checkMultiRole(["admin", "user"]), async (req, res) => {
    try {
        const userId = req.userData.user._id;
        const order = await orderService.checkout(userId);
        res.json({ message: "✅ Thanh toán thành công", order });
    } catch (err) {
        res.status(400).json({ message: "❌ " + err.message });
    }
});

// ✅ Lịch sử đơn hàng
router.get("/history", verifyToken, checkMultiRole(["admin", "user"]), async (req, res) => {
    try {
        const userId = req.userData.user._id;
        const orders = await orderService.getOrderHistory(userId);
        res.json({ status: true, orders });
    } catch (err) {
        console.error("❌", err);
        res.status(500).json({ status: false, message: "Lỗi server" });
    }
});

module.exports = router;
