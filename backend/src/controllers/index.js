//D:\DaiHocHutechKhoa2021\41.NgoNguPhatTrienMoi\website_bandienthoai_nodejs_javascript_mongodb\backend\src\controllers\index.js

// Import thư viện Express để tạo và quản lý router
var express = require("express");

// Tạo một đối tượng router mới từ Express
// Router giúp tổ chức và quản lý các tuyến đường (routes) của ứng dụng
var router = express.Router();

// Đăng ký route cho API xác thực (authentication)
// Tất cả các requests tới '/api/auth/...' sẽ được xử lý bởi authenticatecontroller
router.use("/api/auth", require(__dirname + "/api/authenticatecontroller"));

// Đăng ký route cho API quản lý danh mục (category)
// Tất cả các requests tới '/api/category/...' sẽ được xử lý bởi categorycontroller
router.use("/api/category", require(__dirname + "/api/categorycontroller")); 

// Đăng ký route cho API quản lý sản phẩm (product)
// Tất cả các requests tới '/api/product/...' sẽ được xử lý bởi productcontroller
router.use("/api/product", require(__dirname + "/api/productcontroller"));

// Đăng ký route cho API quản lý blog
// Tất cả các requests tới '/api/blog/...' sẽ được xử lý bởi blogcontroller
router.use("/api/blog", require(__dirname + "/api/blogcontroller"));

// Đăng ký route cho API quản lý đơn hàng (order)
// Tất cả các requests tới '/api/order/...' sẽ được xử lý bởi ordercontroller
router.use("/api/order", require(__dirname + "/api/ordercontroller"));

// Định nghĩa route cho trang chủ ('/')
// Khi có request GET tới trang chủ, hàm callback này sẽ được thực thi
router.get("/", function(req, res) {
    // Render file view 'index.ejs' và gửi về client
    res.render("index.ejs");
});

// Export router để có thể sử dụng ở file khác (thường là file app.js hoặc server.js)
module.exports = router;
