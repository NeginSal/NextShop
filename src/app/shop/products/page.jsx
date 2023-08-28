import Link from "next/link";

export const metadata = {
  title: 'products'
}

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products', {
    next: {
      revalidate: 60
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const products = await response.json();
  return products;
}

const ReposPage = async () => {

  const products = await fetchProducts();

  return (
    <>
      <h1 className="text-center text-violet-800 text-5xl my-5">* PRODUCTS *</h1>
      <div class="grid grid-cols-1 gap-1 mx-5 md:grid md:grid-cols-2 md:gap-3 md:m-8 lg:grid lg:grid-cols-4 lg:gap-5 lg:m-8">
        {
          products.map((product) => (
            <div key={product.id} class="p-3 shadow-md h-full border text-center border-purple-300 rounded-xl bg-lime-50">
              <img src={product.image} className="w-52 h-52 mx-auto my-5 rounded-sm"/>
              <p className="truncate my-3 text-purple-900 bg-purple-200 p-2 rounded-lg ">
                {product.title}
              </p>
              <Link href={`/shop/products/${product.id}`} className="text-violet-950 hover:bg-violet-200 hover:p-2 hover:rounded-lg ">
                view details
              </Link>
            </div>
          ))
        }
      </div>
    </>

  );
}

export default ReposPage;