import Link from "next/link";
import { Suspense } from "react";
import Product from '../../../components/Product'
import ProductDescription from "@/app/components/ProductDescription";


const ProductPage = ({ params: { id } }) => {
  return (
    <div>
      <Link href='/shop/products' className="px-2 bg-green-800">Back to see all products</Link>
      <Suspense fallback={<div>Loading Product ...</div>}>
        <Product id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading Description ...</div>}>
        <ProductDescription id={id} />
      </Suspense>

    </div>
  );
}

export default ProductPage;