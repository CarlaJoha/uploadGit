import './globals.css'
import { Inter } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple Upload Images',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  )
}

{/* <link rel="stylesheet preload" href="path/to/stylesheet" as="style" /> */}