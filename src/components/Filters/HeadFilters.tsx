import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import { Box } from "@mui/material";

import "./HeadFilters.scss";
import { CATEGORY_LIST } from "../../api/mock-data";
import SelectInput from "../UI/SelectInput/SelectInput";
import { sortConfig } from "../../static/config";
import TextInput from "../UI/TextInput/TextInput";
import SearchIcon from "@mui/icons-material/Search";

type FiltersProps = {
  onClickCategory: (categoryTitle: string) => void;
  selectedCategory: string | null;
  searchValue: string;
  setSearchValue: (value: string) => void;
  orderValue: string;
  setOrderValue: (value: string) => void;
};

const HeadFilters = ({
  onClickCategory,
  selectedCategory,
  searchValue,
  setSearchValue,
  orderValue,
  setOrderValue,
}: FiltersProps) => {
  const categoryList = CATEGORY_LIST.map((category) => (
    <li
      className={
        selectedCategory === category.title.toLowerCase() ? "selected" : ""
      }
      onClick={() => {
        onClickCategory(category.title.toLowerCase());
      }}
      key={category.id}
    >
      {category.title}
    </li>
  ));

  return (
    <section className="head-filter-container">
      <div className="first-row">
        <div className="category-title">
          <Link to="/">
            <MdChevronLeft /> Home
          </Link>
          <h3>{selectedCategory?.toUpperCase()}</h3>
        </div>
        <ul className="category-list">{categoryList}</ul>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <TextInput
          type="text"
          width="30rem"
          value={searchValue}
          setValue={setSearchValue}
          label="Search"
          maxRows={null}
          startIcon={
            <SearchIcon
              sx={{ color: "#2d2e32", width: "2rem", height: "2rem" }}
            />
          }
        />
        <SelectInput
          data={sortConfig}
          width="20rem"
          label="Sort by"
          value={orderValue}
          setValue={setOrderValue}
        />
      </Box>
    </section>
  );
};

export default HeadFilters;
