import './globals.css';

export const metadata = {
  title: 'Ecommerce. Get It Done.',
  description: 'Ecommerce full application to showcase (used for sales)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
