import { useEffect, useState } from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";

import Button from "../UI/Button/Button";
import { applyPriceFilter } from "../../store/filter-slice";

const NumberInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "&.MuiInputBase-root": {
    color: "rgba(54, 54, 54, 0.95)",
    borderRadius: "0.25rem",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
    border: "2px solid rgba(0, 0, 0, 0.2)",
    fontSize: "1.5rem",
    width: "100%",
    padding: "0.35rem .5rem 0.35rem .7rem",
  },
  "& .MuiInputBase-input": {
    padding: "0.3rem .5rem",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0px",

  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },

    "& .MuiSlider-valueLabelCircle": {
      fontSize: "1.25rem",
      padding: ".25rem",
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },

  "& .MuiSlider-markLabel": {
    fontSize: "1.25rem",
    fontWeight: "600",
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <AttachMoneyIcon sx={{ width: "1.5rem", height: "1.5rem" }} />
    </SliderThumb>
  );
}

const marks = [
  {
    value: 1,
    label: "$1",
  },
  {
    value: 1000,
    label: "$1000",
  },
];

const PriceSlider = () => {
  const [values, setValues] = useState([3, 989]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (values[0] > values[1]) {
      const sortedList = values.slice().sort((a, b) => a - b);
      setValues(sortedList);
    }
  }, [values]);

  const extractRange = (values: number[], isLabel: boolean) => {
    const sortedList = values.slice().sort((a, b) => a - b);
    const sortedValues = isLabel
      ? `$${sortedList[0]} - $${sortedList[1]}`
      : sortedList;
    return sortedValues;
  };

  const handleChangeValues = (_event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let index = event.target.name === "min" ? 0 : 1;
    const newValues = [...values];

    newValues[index] =
      event.target.value === "" ? 0 : Number(event.target.value);
    setValues(newValues);
  };

  const handleBlur = (value: number, index: number) => {
    if (value < 0) {
      const newValues = [...values];
      newValues[index] = 1;
      setValues(newValues);
    } else if (value > 1000) {
      const newValues = [...values];
      newValues[index] = 1000;
      setValues(newValues);
    }
  };

  const handleClickApply = () => {
    dispatch(applyPriceFilter(values));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        width: "20rem",
        p: "1rem 1.5rem",
      }}
    >
      <Stack sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <FormControl sx={{ width: "50%" }} variant="standard">
          <InputLabel
            sx={{ fontSize: "2rem", color: "#000000" }}
            shrink
            htmlFor="min"
          >
            Min.
          </InputLabel>
          <NumberInput
            value={values[0]}
            size="small"
            name="min"
            onChange={handleInputChange}
            onBlur={() => handleBlur(values[0], 0)}
            inputProps={{
              min: 0,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "50%" }} variant="standard">
          <InputLabel
            sx={{ fontSize: "2rem", color: "#000000" }}
            shrink
            htmlFor="max"
          >
            Max.
          </InputLabel>
          <NumberInput
            value={values[1]}
            size="small"
            name="max"
            onChange={handleInputChange}
            onBlur={() => handleBlur(values[1], 1)}
            inputProps={{
              min: 0,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </FormControl>
      </Stack>

      <AirbnbSlider
        value={values}
        onChange={handleChangeValues}
        valueLabelDisplay="auto"
        marks={marks}
        max={1000}
        min={1}
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontSize={17} fontWeight={600}>
          {extractRange(values, true)}
        </Typography>
        <Button
          onClick={handleClickApply}
          text="Apply"
          fontSize="1.25rem"
          fontWeight="600"
          padding="1rem 0.25rem"
          width="7rem"
        />
      </Box>
    </Box>
  );
};

export default PriceSlider;
