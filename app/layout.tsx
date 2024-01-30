import '@/app/ui/global.css';
import { montserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
          <h1>RepMan</h1>
          {children}
          <footer className='py-2 flex justify-start items-start bg-blue-400'>
            Versión 8.0
          </footer>
      </body>
    </html>
  );
}
