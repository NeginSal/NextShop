import { Permanent_Marker } from 'next/font/google'

const permanent = Permanent_Marker({
  weight: ['400'],
  subsets: ['latin'],
})

const AboutLayout = ({ children }) => {
  return (
    <div className={permanent.className}>
      {children}
    </div>
  );
}

export default AboutLayout;