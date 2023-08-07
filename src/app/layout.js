import './globals.css'
import { Pangolin } from 'next/font/google'
import Navbar from './components/Navbar'

const pangolin = Pangolin({
  weight: ['400'],
  subsets: ['latin']
})

export const metadata = {
  title: 'chess shop',
  description: 'Online shop for chess !',
  keywords: 'chess,shop,sport'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pangolin.className}>
      <Navbar/> 

        {children}
        </body>
    </html>
  )
}
