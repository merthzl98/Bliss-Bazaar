import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ProductList from "../components/ProductList/ProductList";
import { RootState } from "../store";
import { Product } from "../models/product";
import { scrollToTop } from "../utils";

const Favs = () => {
  const [favList, setFavList] = useState<Product[]>([]);
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
    const favedList = allProducts.filter(
      (product) => product.isFaved && !product.isDeleted
    );
    setFavList(favedList);
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
        FAVORITES
      </Typography>
      <ProductList
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        productList={favList}
        fromPureList
      />
    </main>
  );
};

export default Favs;
