// app/layout.js
import Navbar from '../components/navbar/Navbar';
import './globals.css'; // Import global styles if needed
import 'react-18-image-lightbox/style.css'; // This only needs to be imported once in your app

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
