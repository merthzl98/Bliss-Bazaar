import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Filters from "../components/Filters/Filters";
import ProductList from "../components/ProductList/ProductList";
import { PRODUCT_LIST } from "../api/mock-data";
import { Product } from "../models/product-list";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    queryParams.get("category")
  );
  const [productList, setProductList] = useState<Product[]>(PRODUCT_LIST);

  useEffect(() => {
    const queryParamValue = queryParams.get("category");
    if (queryParamValue !== selectedCategory) {
      setSelectedCategory(queryParamValue);
    }
  }, [queryParams]);

  useEffect(() => {
    const filteredList = PRODUCT_LIST.filter(
      (product) =>
        (product.category === selectedCategory || selectedCategory === "all") &&
        product
    );

    console.log({ filteredList });

    setProductList(filteredList);
  }, [selectedCategory]);

  const handleClickCategory = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    queryParams.set("category", categoryTitle);
    navigate({ search: queryParams.toString() });
  };

  return (
    <main>
      <Filters
        onClickCategory={handleClickCategory}
        selectedCategory={selectedCategory}
      />
      <ProductList productList={productList} />
    </main>
  );
};

export default Products;
