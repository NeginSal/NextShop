
import { Suspense } from "react";
import Product from '../../../components/Product'
import ProductDescription from "@/app/components/ProductDescription";


const ProductPage = ({ params: { id } }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-5 my-10">
        <Suspense fallback={<div>Loading Product ...</div>}>
          <Product id={id} />
        </Suspense>
        <Suspense fallback={<div>Loading Description ...</div>}>
          <ProductDescription id={id} />
        </Suspense>
      </div>

    </>
  );
}

export default ProductPage;