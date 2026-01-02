import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';

export const metadata: Metadata = {
  title: 'ziad test',
  description: 'Dashboard application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div className="min-h-screen bg-gray-50">
          <Sidebar />
          <div className="lg:ml-16">
            <Header />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}