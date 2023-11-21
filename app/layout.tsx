import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const inter = Jost({ weight: ['400', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Product Feedback',
  description: 'Product feedback is an app where you can track feedbacks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
