import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import ProductList from "../components/ProductList/ProductList";
import { COLOR_LIST, PRODUCT_LIST } from "../api/mock-data";
import { Product } from "../models/product";
import HeadFilters from "../components/Filters/HeadFilters";
import SideFilters from "../components/Filters/SideFilters";
import { sortConfig } from "../static/config";
import { RootState } from "../store";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    queryParams.get("category")
  );
  const [productList, setProductList] = useState<Product[]>([]);
  const [orderValue, setOrderValue] = useState<string>(sortConfig[0].value);
  const [searchValue, setSearchValue] = useState<string>("");
  const [colorList, setColorList] = useState(COLOR_LIST);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCalledSearch, setIsCalledSearch] = useState<boolean>(false);
  const filterValues = useSelector((state: RootState) => state.filter);

  const { priceValues, textureList } = filterValues;

  useEffect(() => {
    const queryParamValue = queryParams.get("category");
    if (queryParamValue !== selectedCategory) {
      setSelectedCategory(queryParamValue);
    }
  }, [queryParams]);

  useEffect(() => {
    !isLoading && setIsLoading(true);
    let result = PRODUCT_LIST.filter(
      (product) =>
        (product.category === selectedCategory || selectedCategory === "all") &&
        product
    );

    result = filterBySearch(result);
    result = filterByOrder(result);
    result = filterByPriceRange(result);
    result = filterByTexture(result);
    result = filterByColor(result);
    console.log({ result });

    setProductList(result);
  }, [
    selectedCategory,
    isCalledSearch,
    orderValue,
    priceValues,
    textureList,
    colorList,
  ]);

  useEffect(() => {
    const searchDelay = setTimeout(() => {
      setIsCalledSearch((prevState: boolean) => !prevState);
    }, 500);

    return () => {
      clearTimeout(searchDelay);
    };
  }, [searchValue]);

  const filterBySearch = (result: Product[]) => {
    let searchedResult: Product[] = [];

    if (searchValue.length > 0) {
      searchedResult = result.filter(
        (product) =>
          product.description
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase()) && product
      );
    } else {
      searchedResult = result;
    }

    return searchedResult;
  };

  const filterByOrder = (result: Product[]) => {
    let sortedResult: Product[] = [];

    if (orderValue === "best") {
      sortedResult = result.filter((product) => !!product.isBest && product);
    } else if (orderValue === "featured") {
      sortedResult = result;
    } else if (orderValue === "increasing") {
      sortedResult = result.slice().sort((a, b) => a.price - b.price);
    } else if (orderValue === "decreasing") {
      sortedResult = result.slice().sort((a, b) => b.price - a.price);
    }

    return sortedResult;
  };

  const filterByPriceRange = (result: Product[]) => {
    return result.filter((product) => {
      if (product.price > priceValues[0] && priceValues[1] > product.price) {
        return product;
      }
    });
  };

  const filterByTexture = (result: Product[]) => {
    return result.filter((product) => {
      let texture = textureList.find(
        (item) => item.title.toLowerCase() === product.texture.toLowerCase()
      );
      if (texture?.status) {
        return product;
      }
    });
  };

  const filterByColor = (result: Product[]) => {
    return result.filter((product) => {
      let color = colorList.find(
        (item) => item.title.toLowerCase() === product.color.toLowerCase()
      );
      if (color?.status) {
        return product;
      }
    });
  };

  const handleClickCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    queryParams.set("category", categoryTitle);
    navigate({ search: queryParams.toString() });
  };

  return (
    <main>
      <HeadFilters
        onClickCategory={handleClickCategory}
        selectedCategory={selectedCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        orderValue={orderValue}
        setOrderValue={setOrderValue}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "3rem",
          pt: 5,
        }}
      >
        <SideFilters
          colorList={colorList}
          setColorList={setColorList}
          isLoading={isLoading}
        />
        <ProductList
          productList={productList}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Box>
    </main>
  );
};

export default Products;
