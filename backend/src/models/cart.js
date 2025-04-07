//D:\DaiHocHutechKhoa2021\41.NgoNguPhatTrienMoi\website_bandienthoai_nodejs_javascript_mongodb\backend\src\models\cart.js
// Import thư viện Mongoose để tương tác với MongoDB
const mongoose = require("mongoose");

// Tạo Schema mới cho collection Cart
// Schema này định nghĩa cấu trúc của giỏ hàng trong hệ thống
const CartSchema = new mongoose.Schema({
    // Trường userId: Lưu ID của người dùng sở hữu giỏ hàng
    // Kiểu dữ liệu là ObjectId (ID đặc biệt của MongoDB)
    // ref: "User" tạo mối quan hệ với model User (cho phép populate)
    // required: true nghĩa là bắt buộc phải có userId khi tạo cart item
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    
    // Trường productId: Lưu ID của sản phẩm trong giỏ hàng
    // Kiểu dữ liệu là ObjectId (ID đặc biệt của MongoDB)
    // ref: "Product" tạo mối quan hệ với model Product (cho phép populate)
    // required: true nghĩa là bắt buộc phải có productId khi tạo cart item
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    
    // Trường quantity: Lưu số lượng sản phẩm trong giỏ hàng
    // Kiểu dữ liệu là Number (số)
    // default: 1 nghĩa là nếu không cung cấp giá trị, mặc định số lượng là 1
    quantity: { type: Number, default: 1 }
});

// Export model Cart để sử dụng ở các file khác
// mongoose.model() nhận tham số đầu tiên là tên model ("Cart")
// MongoDB sẽ tạo collection tên "carts" (chữ thường, số nhiều)
// Tham số thứ hai là Schema đã định nghĩa ở trênn
module.exports = mongoose.model("Cart", CartSchema);