
import { Suspense } from "react";
import Product from '../../../components/Product'
import ProductDescription from "@/app/components/ProductDescription";


const ProductPage = ({ params: { id } }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-5 my-10">
        <Suspense fallback={<div className="text-center text-pink-800 text-lg">Loading Product ...</div>}>
          <Product id={id} />
        </Suspense>
        <Suspense fallback={<div className="text-center text-cyan-800 text-lg">Loading Description ...</div>}>
          <ProductDescription id={id} />
        </Suspense>
      </div>

    </>
  );
}

export default ProductPage;