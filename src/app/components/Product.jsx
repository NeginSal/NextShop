async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = response.json();
  return data;
}

const Product = async ({ id }) => {
  const product = await fetchProduct(id);
  console.log(product);

  return (
    <div>
      <h1>Product {id}</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default Product;