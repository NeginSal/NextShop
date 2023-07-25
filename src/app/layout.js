import './globals.css'
import { Pangolin } from 'next/font/google'
import Header from './components/Header'

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
      <Header/>
      <body className={pangolin.className}>{children}</body>
    </html>
  )
}
