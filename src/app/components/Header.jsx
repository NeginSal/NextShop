import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link href='/'>Chess Shop</Link>
        </div>
        <div>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>

    </header>
  );
}

export default Header;
