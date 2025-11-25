import { Geist, Geist_Mono } from "next/font/google";
import "../styles/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AITG - Giải pháp công nghệ hàng đầu",
  description: "Cung cấp sản phẩm và dịch vụ công nghệ cao cấp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={geistSans.className}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        {children}
      </body>
    </html>
  );
}