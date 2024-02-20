import { useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { Product } from "../../models/product";
import ProductItem from "./ProductItem";
import "./ProductList.scss";

type ListProps = {
  productList: Product[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  fromPureList?: boolean;
};

const ProductList = ({
  fromPureList = false,
  productList,
  isLoading,
  setIsLoading,
}: ListProps) => {
  // Loading Side Effect  was added to make it look like a response is awaited from the service.
  useEffect(() => {
    setTimeout(() => {
      isLoading && setIsLoading(false);
    }, 500);
  }, [isLoading]);

  const renderNoItem = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typography fontSize={"2rem"} color={"gray"}>
        There are no products matching the criteria you are looking for.
      </Typography>
      <SentimentVeryDissatisfiedIcon sx={{ width: "5rem", height: "5rem" }} />
    </Box>
  );

  const productItems = productList.map((item) => (
    <ProductItem product={item} key={item.id} />
  ));

  const skeletonArray = fromPureList
    ? [1, 2, 3, 4, 5, 6, 7, 8]
    : [1, 2, 3, 4, 5, 6];

  const renderSkeletonGrid = skeletonArray.map((item) => {
    return (
      <div key={item} className="product">
        <div className="product-header">
          <Skeleton variant="rectangular" width={"100%"} height={250} />
        </div>
        <div className="product-details">
          <p>
            <Skeleton
              animation="wave"
              height={30}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          </p>
          <p className="product-price">
            <Skeleton animation="wave" height={40} width="100%" />
          </p>
        </div>
      </div>
    );
  });

  const listClass = fromPureList ? "pure-list" : "product-list";

  return (
    <section className="products-container">
      {isLoading ? (
        <ul className={listClass}>{renderSkeletonGrid}</ul>
      ) : (
        <ul className={listClass}>{productItems}</ul>
      )}
      {!isLoading && productList.length === 0 && renderNoItem}
    </section>
  );
};

export default ProductList;
