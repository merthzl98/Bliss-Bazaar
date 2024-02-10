import { Product } from "../../models/product-list";
import "./ProductItem.scss";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="product">
      <div className="product-header">
        <img src={product.img} alt={product.description} />
      </div>
      <div className="product-details">
        <p>{product.description}</p>
        <p className="product-price">{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductItem;
