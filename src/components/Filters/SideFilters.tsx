import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setTextureList } from "../../store/filter-slice";
import { RootState } from "../../store";
import PriceSlider from "./PriceSlider";
import CheckboxesGroup from "../UI/CheckboxesGroup/CheckboxesGroup";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: "2px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "0.25rem",
  fontSize: "1.5rem",
  fontWeight: "600",
  "&:not(:last-child)": {
    borderBottom: 0,
  },

  "&::before": {
    display: "none",
  },
  "& .MuiSvgIcon-root": {
    width: "2rem",
    height: "2rem",
  },
}));

type FiltersProps = {
  colorList: Color[];
  setColorList: (list: Color[]) => void;
  isLoading: boolean;
};

const SideFilters = ({ colorList, setColorList, isLoading }: FiltersProps) => {
  const dispatch = useDispatch();
  const textureList = useSelector(
    (state: RootState) => state.filter.textureList
  );

  const handlePreventClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const sideFilterStyle = isLoading
    ? { opacity: "0.5", cursor: "not-allowed" }
    : { opacity: "1" };

  return (
    <aside
      onClick={(event) => isLoading && handlePreventClick(event)}
      style={sideFilterStyle}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Price Range
        </AccordionSummary>
        <AccordionDetails>
          <PriceSlider />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Texture
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxesGroup
            valueList={textureList}
            setValueList={(list) => dispatch(setTextureList(list))}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Color
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxesGroup valueList={colorList} setValueList={setColorList} />
        </AccordionDetails>
      </Accordion>
    </aside>
  );
};

export default SideFilters;
