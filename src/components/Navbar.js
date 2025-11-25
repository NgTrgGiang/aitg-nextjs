'use client';

import { useState, useEffect } from 'react';
import siteData from '../data';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <a href="#home" className="logo">{siteData.company.name}</a>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {siteData.navigation.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}