import { useState } from "react";
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

import "./HeadFilters.scss";
import { CATEGORY_LIST, TEXTURE_LIST } from "../../api/mock-data";
import SelectInput from "../UI/SelectInput/SelectInput";
import { sortConfig } from "../../static/config";
import TextInput from "../UI/TextInput/TextInput";
import SearchIcon from "@mui/icons-material/Search";

type FiltersProps = {
  onClickCategory: (categoryTitle: string) => void;
  selectedCategory: string | null;
};

const HeadFilters = ({ onClickCategory, selectedCategory }: FiltersProps) => {
  const [orderValue, setrderValue] = useState<string>(sortConfig[0].value);
  const [searchValue, setSearchValue] = useState<string>("");
  const [textureList, setTextureList] = useState(TEXTURE_LIST);

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
      <div className="second-row">
        <TextInput
          value={searchValue}
          setValue={setSearchValue}
          label="Search"
          maxRows={null}
          startIcon={<SearchIcon sx={{ width: "2rem", height: "2rem" }} />}
        />
        <SelectInput
          data={sortConfig}
          width="20rem"
          label="Sort by"
          value={orderValue}
          setValue={setrderValue}
        />
      </div>

      {/* <PriceSlider /> */}
      {/* <CheckboxesGroup valueList={textureList} setValueList={setTextureList} /> */}
    </section>
  );
};

export default HeadFilters;
