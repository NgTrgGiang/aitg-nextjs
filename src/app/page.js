'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteData from '../data';

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.03,
      rootMargin: '100px 0px 100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    // Stagger animation
    document.querySelectorAll('.section').forEach(section => {
      section.querySelectorAll('.scroll-reveal').forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.05}s`;
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero section" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>{siteData.company.tagline}</h1>
            <p>{siteData.company.description}</p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Khám phá sản phẩm</a>
              <a href="#services" className="btn btn-secondary">Dịch vụ của chúng tôi</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <p className="section-subtitle">
              Các sản phẩm công nghệ cao cấp với hiệu năng vượt trội
            </p>
          </div>

          <div className="grid grid-3">
            {siteData.products.map(product => (
              <div key={product.id} className="card scroll-reveal">
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="card-image"
                />
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">{product.description}</p>
                <div className="card-price">{product.price}</div>
                <ul className="card-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Xem chi tiết
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section" id="video">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Giới thiệu về AITG</h2>
            <p className="section-subtitle">
              Xem video để hiểu rõ hơn về sản phẩm và dịch vụ của chúng tôi
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card scroll-reveal" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 'var(--radius-xl)' }}
                  src="https://www.youtube.com/embed/86752vuHH6k?si=0DM_dIExKcxt1lHn"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dịch vụ của chúng tôi</h2>
            <p className="section-subtitle">
              Giải pháp công nghệ toàn diện cho doanh nghiệp
            </p>
          </div>

          <div className="grid grid-3">
            {siteData.services.map(service => (
              <div key={service.id} className="card scroll-reveal">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 className="card-title">{service.name}</h3>
                <p className="card-description">{service.description}</p>
                <ul className="card-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  Tìm hiểu thêm
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Liên hệ với chúng tôi</h2>
            <p className="section-subtitle">Sẵn sàng hợp tác cùng bạn</p>
          </div>

          <div className="grid grid-2">
            <div className="card scroll-reveal">
              <h3 className="card-title">Thông tin liên hệ</h3>
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                  <span>{siteData.company.email}</span>
                </p>
                <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  <span>{siteData.company.phone}</span>
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Theo dõi chúng tôi</h4>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '2rem' }}>
                  <a href={siteData.social.facebook} id="socialFacebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={siteData.social.twitter} id="socialTwitter">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href={siteData.social.linkedin} id="socialLinkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={siteData.social.instagram} id="socialInstagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="card scroll-reveal">
              <h3 className="card-title">Gửi tin nhắn</h3>
              <form style={{ marginTop: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <input type="text" placeholder="Họ và tên" required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-family-primary)' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input type="email" placeholder="Email" required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-family-primary)' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <textarea placeholder="Tin nhắn của bạn" rows="4" required
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-family-primary)', resize: 'vertical' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}