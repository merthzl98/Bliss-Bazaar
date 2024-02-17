import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Fab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Product } from "../../models/product";
import "./ProductItem.scss";
import { RootState } from "../../store";
import { setIsShownLoginModal } from "../../store/ui-slice";
import Button from "../UI/Button/Button";
import { addToCart } from "../../store/cart-slice";
import { CartItem } from "../../models/cart";
import { toggleFav } from "../../store/interactions-slice";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const [isFaved, setIsFaved] = useState(product.isFaved);
  const hasLoggedIn = useSelector((state: RootState) => state.user.hasLoggedIn);

  const dispatch = useDispatch();

  const handleClickFav = () => {
    if (hasLoggedIn) {
      dispatch(toggleFav(product.id));
      setIsFaved((prevState) => !prevState);
    } else {
      dispatch(setIsShownLoginModal(true));
    }
  };

  const handleClickAdd = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.description,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
      img: product.img,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <div className="product">
      <div className="product-header">
        <img src={product.img} alt={product.description} />
      </div>
      <div className="product-details">
        <p>{product.description}</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
          }}
        >
          <p className="product-price">{product.price}$</p>

          <Button
            onClick={handleClickAdd}
            text="Add"
            fontSize="1.25rem"
            fontWeight="600"
            padding="1rem 0.25rem"
            width="7rem"
          />
        </Box>
      </div>

      <Fab onClick={handleClickFav} size="small" className="fav-icon">
        {isFaved ? (
          <FavoriteIcon className="filled-icon" />
        ) : (
          <FavoriteBorderIcon className="outlined-icon" />
        )}
      </Fab>
    </div>
  );
};

export default ProductItem;
