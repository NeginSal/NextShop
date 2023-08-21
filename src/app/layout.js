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
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={pangolin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
