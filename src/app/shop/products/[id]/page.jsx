import Link from "next/link";
import Product from '../../../components/Product'

const ProductPage = ({ params: { id } }) => {
  return (
    <div>
      <Link href='/shop/products' className="px-2 bg-green-800">Back to see all products</Link>
      <Product id={id} />
    </div>
  );
}

export default ProductPage;