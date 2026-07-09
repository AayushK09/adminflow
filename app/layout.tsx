import './globals.css';

export const metadata = {
  title: 'AdminFlow',
  description: 'AdminFlow — modern admin dashboard built with Next.js and Tailwind CSS.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">{children}</body>
    </html>
  );
}
