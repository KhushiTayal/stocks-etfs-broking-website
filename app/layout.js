import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header/page'
import Footer from './footer/Footer';
import Providers from "./providers";
import ThemeSwitcher from "../app/header/ThemeSwitcher";
import { CompanyProvider } from './CompanyContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CompanyProvider>
      <Providers>
          {/* <ThemeSwitcher /> */}
        <Header />
        {children}
        <Footer />
        </Providers>
        </CompanyProvider>
        </body>
    </html>
  )
}
