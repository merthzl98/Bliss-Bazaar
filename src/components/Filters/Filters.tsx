import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

import "./Filter.scss";
import { CATEGORY_LIST } from "../../api/mock-data";
import PriceSlider from "./PriceSlider";

type FiltersProps = {
  onClickCategory: (categoryTitle: string) => void;
  selectedCategory: string | null;
};

const Filters = ({ onClickCategory, selectedCategory }: FiltersProps) => {
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
    <section className="filter-container">
      <div className="category-title">
        <Link to="/">
          <MdChevronLeft /> Home
        </Link>
        <h3>{selectedCategory?.toUpperCase()}</h3>
      </div>
      <ul className="category-list">{categoryList}</ul>
      <PriceSlider />
    </section>
  );
};

export default Filters;
