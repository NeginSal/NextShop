async function fetchProductDescription(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 60
    }
  });
  const data = await response.json();
  return data;
}
const ProductDescription = async ({ id }) => {
  const product = await fetchProductDescription(id);

  return (
    <div className="bg-blue-300">
      <h1>product description</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDescription;