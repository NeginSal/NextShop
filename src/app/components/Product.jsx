async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 60
    }
  });
  const data = response.json();
  return data;
}

const Product = async ({ id }) => {
  const product = await fetchProduct(id);
  console.log(product);

  return (
    <>
      <div className=" rounded overflow-hidden shadow-lg mx-10">
        <div class="p-3 shadow-md h-full border text-center border-pink-600 rounded-xl bg-lime-50">
          <img src={product.image} className="w-52 h-52 mx-auto my-5 rounded-sm" />
          <p className="truncate my-3 mx-10 text-orange-800 bg-orange-400 p-2 rounded-lg ">
            {product.title}
          </p>
          <p className="truncate my-3 mx-10 text-lime-950 bg-lime-400 p-2 rounded-lg ">
            price : {product.price}
          </p>
          <p className="truncate my-3 mx-10 text-blue-800 bg-sky-300 p-2 rounded-lg ">
            count: {product.rating.count}
          </p>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-rose-700 mr-2 mb-2"># {product.category}</span>
            <span class="inline-block bg-rose-200 rounded-full px-3 py-1 text-sm font-semibold text-rose-700 mr-2 mb-2"># {product.rating.rate}</span>
          </div>
        </div>
      </div>
    </>

  );
}

export default Product;