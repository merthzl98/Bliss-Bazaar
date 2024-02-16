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
import { setIsShownCartModal } from "../../store/ui-slice";
import Button from "../UI/Button/Button";
import { addToCart, removeFromCart } from "../../store/cart-slice";
import { CartItem } from "../../models/cart";

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
  const cart = useSelector((state: RootState) => state.cart);
  const isShownModal = useSelector(
    (state: RootState) => state.ui.isShownCartModal
  );
  const dispatch = useDispatch();

  const { products, totalQuantity } = cart;

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

  return (
    <Modal
      onOpen={isShownModal}
      title="My Cart"
      onClose={handleCloseCart}
      onRequest={() => console.log("clicked cart button ")}
      confirmText="Buy Now"
    >
      {!!products.length ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Demo>
              <List dense={true}>{cartList}</List>
              <Typography py={2} fontSize={20}>
                {totalQuantity}
              </Typography>
            </Demo>
          </Grid>
        </Grid>
      ) : (
        <Typography py={2} width={500} fontSize={20}>
          Your Cart is empty.
        </Typography>
      )}
    </Modal>
  );
};

export default Cart;
