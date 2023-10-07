import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Movie flix',
  description: 'Find latest movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header/>
        {children}
        </body>
      <Footer/>
    </html>
  )
}
