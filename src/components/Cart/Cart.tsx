import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import Modal from "../UI/Modal/Modal";
import {
  setIsShownCartModal,
  setIsShownLoginModal,
} from "../../store/ui-slice";
import Button from "../UI/Button/Button";
import { addToCart, removeFromCart, resetCart } from "../../store/cart-slice";
import { CartItem } from "../../models/cart";
import { setIsNotified } from "../../store/notify-slice";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: 500,
  "& .MuiTypography-root": {
    fontSize: "1.5rem",
  },

  "& .MuiListItem-root": {
    padding: "2rem 0",
  },
}));

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const products = useSelector((state: RootState) => state.cart.products);
  const isShownModal = useSelector(
    (state: RootState) => state.ui.isShownCartModal
  );
  const hasLoggedIn = useSelector((state: RootState) => state.user.hasLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!products.length) {
      let sumPrice = 0;
      products.forEach((product) => (sumPrice += product.totalPrice));
      setTotalAmount(sumPrice);
    } else {
      dispatch(setIsShownCartModal(false));
    }
  }, [products]);

  const handleCloseCart = () => {
    dispatch(setIsShownCartModal(false));
  };

  const handleClickAdd = (product: CartItem) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
      img: product.img,
    };

    dispatch(addToCart(cartItem));
  };

  const handleClickRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const cartList = products.map((item) => {
    return (
      <ListItem key={item.id}>
        <ListItemAvatar>
          <Avatar src={item.img}>I</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.name}
          secondary={`$${item.totalPrice}`}
          sx={{ fontSize: "2rem" }}
        />
        <Typography fontWeight="bold">x{item.quantity}</Typography>
        <Box sx={{ display: "flex", gap: "1rem", pl: 4 }}>
          <Button
            onClick={() => handleClickRemove(item.id)}
            text="-"
            fontSize="1.75rem"
            fontWeight="500"
            padding="0.25rem"
            width="4rem"
          />
          <Button
            onClick={() => handleClickAdd(item)}
            text="+"
            fontSize="1.75rem"
            fontWeight="500"
            padding="0.25rem"
            width="4rem"
          />
        </Box>
      </ListItem>
    );
  });

  const handleClickBuy = () => {
    if (hasLoggedIn) {
      dispatch(resetCart());
      handleCloseCart();
      dispatch(
        setIsNotified({
          isNotified: true,
          message: "Your order has been received",
          severity: "success",
        })
      );
    } else {
      dispatch(setIsShownLoginModal(true));
    }
  };

  return (
    <Modal
      onOpen={isShownModal}
      title="My Cart"
      onClose={handleCloseCart}
      onRequest={handleClickBuy}
      confirmText="Buy Now"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            <List dense={true}>{cartList}</List>
          </Demo>
          <Box sx={{ display: "flex", gap: "1rem", justifyContent: "right" }}>
            <Typography
              textAlign={"right"}
              fontWeight={500}
              py={1}
              fontSize={20}
            >
              Total Price :
            </Typography>
            <Typography
              textAlign={"right"}
              fontWeight={600}
              py={1}
              fontSize={20}
            >
              ${totalAmount}{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default Cart;
