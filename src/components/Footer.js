import siteData from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{siteData.company.name}</h3>
            <p>{siteData.company.tagline}</p>
          </div>

          <div className="footer-section">
            <h3>Liên kết nhanh</h3>
            <ul className="footer-links">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#products">Sản phẩm</a></li>
              <li><a href="#services">Dịch vụ</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sản phẩm</h3>
            <ul className="footer-links">
              <li><a href="#products">Laptop</a></li>
              <li><a href="#products">Smartphone</a></li>
              <li><a href="#products">Audio</a></li>
              <li><a href="#products">Wearable</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Dịch vụ</h3>
            <ul className="footer-links">
              <li><a href="#services">Tư vấn chuyển đổi số</a></li>
              <li><a href="#services">Phát triển phần mềm</a></li>
              <li><a href="#services">Giải pháp Cloud</a></li>
              <li><a href="#services">Bảo mật</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 {siteData.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}