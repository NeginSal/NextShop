import Link from "next/link";
import Games from "./components/Games";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to homepage</h1>
      {/* <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul> */}
      <Games />
    </div>
  );
}

export default HomePage;