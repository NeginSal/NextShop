import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex flex-col items-center sm:flex sm:flex-row sm:justify-between bg-sky-100 text-sky-700  text-xl p-3 sticky top-0">
      <div className="flex items-center text-3xl font-bold hover:text-sky-500">
        <Link href='/'>Chess Shop</Link>
        <span class="material-symbols-outlined pl-1">
          chess
        </span>
      </div>
      <div className="flex-col items-center sm:flex sm:flex-row  ">
        <p class=" flex items-center mx-2 hover:text-sky-500">
          <Link href='/about'>About Us</Link>
          <i class="material-icons"> info</i>
        </p>
        <p class=" flex items-center mx-2 hover:text-sky-500">
          <Link href='/about/team'>Our Team</Link>
          <i class="material-icons">group</i>
        </p>
        <p class=" flex items-center mx-2 hover:text-sky-500">
          <Link href='/shop/products'>Products</Link>
          <i class="material-icons">shopping_cart</i>
        </p>
      </div>
    </div>
  );
}

export default Navbar;

