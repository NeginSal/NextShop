import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex flex-col items-center sm:flex sm:flex-row sm:justify-between bg-sky-100 text-sky-700  text-xl p-3 sticky top-0">
      <div className="text-3xl font-bold">
        <Link href='/'>Chess Shop</Link>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row ">
        <Link href='/about' className="m-2">About Us</Link>
        <Link href='/about/team' className="m-2">Our Team</Link>
        <Link href='/shop/products' className="m-2">Products</Link>
      </div>
    </div>
  );
}

export default Navbar;

