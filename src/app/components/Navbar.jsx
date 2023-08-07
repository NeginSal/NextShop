import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-300 text-xl p-5">
      <div>
        <Link href='/'>Chess Shop</Link>
      </div>
      <div>
        <Link href='/about'>About</Link>
        <Link href='/about/team'>Our Team</Link>
        <Link href='/shop/products'>Products</Link>
      </div>
    </div>
  );
}

export default Navbar;
