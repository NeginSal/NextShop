import Link from "next/link";

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
    <>
      <div className="p-10 text-center">
        <p className="text-cyan-800 text-4xl my-5 ">product description</p>
        <p className="text-blue-600 text-lg text-left border-b-2 border-b-cyan-200 border-dashed my-3">{product.title}</p>
        <p className="text-teal-800 text-2xl text-justify">{product.description}</p>
        <div className="flex justify-center items-center my-10">
          <p className="flex my-3 p-2 rounded-xl bg-purple-300 text-fuchsia-950">
            <span class="material-symbols-outlined">
              arrow_back
            </span>
            <Link href='/shop/products'>Back to see all products</Link>
          </p>
        </div>
      </div>

    </>

  );
}

export default ProductDescription;