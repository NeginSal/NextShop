import Link from "next/link";

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

  console.log(products)
  return (
    <div class="grid grid-cols-1 gap-1 mx-5 lg:grid lg:grid-cols-4 lg:gap-4 lg:m-8">
      {
        products.map((product) => (
          <div key={product.id} class="flex flex-col items-center border border-purple-300 rounded-xl bg-lime-50">
            <img src={product.image} className="w-52 h-52 m-5 rounded-sm " />
            <p className="truncate my-3 text-purple-900 bg-purple-200 p-2 rounded-lg ">
                {product.title}
            </p>
            <Link href={`/shop/products/${product.id}`} className="">
              view details
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default ReposPage;