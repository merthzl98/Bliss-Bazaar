import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

import { RootState } from "../store";
import { scrollToTop } from "../utils";
import ProductList from "../components/ProductList/ProductList";
import { Product } from "../models/product";

const Deleted = () => {
  const [deletedList, setDeletedList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const allProducts = useSelector(
    (state: RootState) => state.interactions.allProducts
  );

  //Loading Side Effect was added to make it look like a response is awaited from the service.
  useEffect(() => {
    !isLoading && setIsLoading(true);
    scrollToTop();
  }, []);

  useEffect(() => {
    const deletedItems = allProducts.filter((product) => product.isDeleted);
    setDeletedList(deletedItems);
  }, [allProducts]);

  return (
    <main>
      <Typography
        textAlign={"center"}
        fontWeight={700}
        fontSize={27}
        component={"h2"}
        pb={8}
      >
        DELETED LIST
      </Typography>
      <ProductList
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        productList={deletedList}
        fromPureList
      />
    </main>
  );
};

export default Deleted;
