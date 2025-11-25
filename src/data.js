// ===================================
// CONTENT CONFIGURATION FILE
// ===================================
// Chỉnh sửa file này để thêm/sửa/xóa sản phẩm và dịch vụ
// Không cần chỉnh sửa HTML!

const siteData = {
    // Thông tin công ty
    company: {
        name: "AITG",
        tagline: "Giải pháp công nghệ hàng đầu",
        description: "Chúng tôi cung cấp các sản phẩm và dịch vụ công nghệ cao cấp, giúp doanh nghiệp và cá nhân phát triển trong kỷ nguyên số",
        email: "ntg0356868808@gmail.com",
        phone: "+84 356 868 808",
    },

    // Danh sách sản phẩm
    // Để thêm sản phẩm mới, copy một object và chỉnh sửa thông tin
    products: [
        {
            id: 1,
            name: "Laptop Gaming Pro X1",
            price: "35,000,000đ",
            description: "Laptop gaming cao cấp với hiệu năng vượt trội, màn hình 144Hz, card đồ họa RTX 4070",
            image: "laptop-gaming.jpg", // Tên file ảnh (đặt trong thư mục images/)
            category: "Laptop",
            features: [
                "CPU Intel Core i9 Gen 13",
                "RAM 32GB DDR5",
                "SSD 1TB NVMe",
                "RTX 4070 8GB",
                "Màn hình 15.6\" 144Hz"
            ]
        },
        {
            id: 2,
            name: "Smartphone Ultra 5G",
            description: "Điện thoại flagship với camera 200MP, sạc nhanh 120W, màn hình AMOLED 120Hz",
            price: "25,000,000đ",
            image: "smartphone.jpg",
            category: "Smartphone",
            features: [
                "Camera 200MP AI",
                "Chip Snapdragon 8 Gen 3",
                "RAM 12GB + ROM 512GB",
                "Pin 5000mAh, sạc 120W",
                "Màn hình 6.8\" AMOLED 120Hz"
            ]
        },
        {
            id: 3,
            name: "Tai nghe Wireless Pro",
            price: "5,500,000đ",
            description: "Tai nghe không dây cao cấp với chống ồn chủ động ANC, âm thanh Hi-Res",
            image: "headphones.jpg",
            category: "Audio",
            features: [
                "Chống ồn ANC thế hệ mới",
                "Âm thanh Hi-Res Audio",
                "Pin 40 giờ",
                "Kết nối Bluetooth 5.3",
                "Sạc nhanh USB-C"
            ]
        },
        {
            id: 4,
            name: "Smartwatch Elite",
            price: "8,900,000đ",
            description: "Đồng hồ thông minh cao cấp với theo dõi sức khỏe toàn diện, GPS, chống nước",
            image: "smartwatch.jpg",
            category: "Wearable",
            features: [
                "Màn hình AMOLED 1.9\"",
                "Theo dõi sức khỏe 24/7",
                "GPS tích hợp",
                "Chống nước 5ATM",
                "Pin 7 ngày"
            ]
        }
    ],

    // Danh sách dịch vụ
    // Để thêm dịch vụ mới, copy một object và chỉnh sửa thông tin
    services: [
        {
            id: 1,
            name: "Tư vấn Chuyển đổi số",
            description: "Tư vấn chiến lược và triển khai chuyển đổi số toàn diện cho doanh nghiệp",
            icon: "💼", // Emoji hoặc icon class
            features: [
                "Phân tích hiện trạng doanh nghiệp",
                "Xây dựng lộ trình chuyển đổi số",
                "Tư vấn công nghệ phù hợp",
                "Đào tạo nhân sự",
                "Hỗ trợ triển khai"
            ]
        },
        {
            id: 2,
            name: "Phát triển Phần mềm",
            description: "Thiết kế và phát triển phần mềm theo yêu cầu, web app, mobile app",
            icon: "💻",
            features: [
                "Phân tích yêu cầu chi tiết",
                "Thiết kế UI/UX chuyên nghiệp",
                "Lập trình web & mobile",
                "Testing & QA",
                "Bảo trì và nâng cấp"
            ]
        },
        {
            id: 3,
            name: "Giải pháp Cloud",
            description: "Triển khai và quản lý hạ tầng cloud, migration, tối ưu chi phí",
            icon: "☁️",
            features: [
                "Tư vấn kiến trúc cloud",
                "Migration lên cloud",
                "Quản lý & giám sát 24/7",
                "Tối ưu hiệu năng & chi phí",
                "Backup & disaster recovery"
            ]
        },
        {
            id: 4,
            name: "Bảo mật & An ninh mạng",
            description: "Đánh giá, tư vấn và triển khai giải pháp bảo mật toàn diện",
            icon: "🔒",
            features: [
                "Đánh giá bảo mật hệ thống",
                "Penetration testing",
                "Triển khai firewall & IDS/IPS",
                "Đào tạo nhận thức bảo mật",
                "Giám sát & ứng cứu sự cố"
            ]
        },
        {
            id: 5,
            name: "AI & Machine Learning",
            description: "Phát triển và triển khai các giải pháp AI, ML cho doanh nghiệp",
            icon: "🤖",
            features: [
                "Tư vấn ứng dụng AI/ML",
                "Xây dựng mô hình AI",
                "Computer Vision",
                "Natural Language Processing",
                "Tích hợp vào hệ thống"
            ]
        },
        {
            id: 6,
            name: "Hỗ trợ Kỹ thuật 24/7",
            description: "Dịch vụ hỗ trợ kỹ thuật chuyên nghiệp, sẵn sàng 24/7",
            icon: "🛠️",
            features: [
                "Hỗ trợ qua điện thoại & email",
                "Remote support",
                "Onsite support khi cần",
                "SLA cam kết",
                "Báo cáo định kỳ"
            ]
        }
    ],

    // Thông tin mạng xã hội
    social: {
        facebook: "https://facebook.com/giang.6064",
        twitter: "https://twitter.com/AITG",
        linkedin: "https://linkedin.com/company/AITG",
        instagram: "https://instagram.com/AITG"
    },

    // Menu navigation
    navigation: [
        { name: "Trang chủ", href: "#home" },
        { name: "Sản phẩm", href: "#products" },
        { name: "Dịch vụ", href: "#services" },
        { name: "Liên hệ", href: "#contact" }
    ]
};

// Export để sử dụng trong script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}
