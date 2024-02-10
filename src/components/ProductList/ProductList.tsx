import { Product } from "../../models/product-list";
import ProductItem from "./ProductItem";
import "./ProductList.scss";

const ProductList = ({ productList }: { productList: Product[] }) => {
  const productItems = productList.map((item) => (
    <ProductItem product={item} key={item.id} />
  ));

  return (
    <section className="products-container">
      <ul className="product-list">{productItems}</ul>
    </section>
  );
};

export default ProductList;
