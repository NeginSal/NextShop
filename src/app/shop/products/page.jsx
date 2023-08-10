import Link from "next/link";

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const products = await response.json();
  return products;
}

const ReposPage = async () => {
  const products = await fetchProducts();

  console.log(products)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/shop/products/${product.id}`}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </Link>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default ReposPage;