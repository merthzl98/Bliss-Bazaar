import { useState } from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Typography } from "@mui/material";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",

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
  const [values, setValues] = useState<number[]>([1, 700]);

  const extractRange = (values: number[], isLabel: boolean) => {
    values.sort((a, b) => a - b);
    const sortedValues = isLabel ? `$${values[0]} - $${values[1]}` : values;
    return sortedValues;
  };

  const handleChangeValues = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };

  // console.log({ values });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        border: "2px solid rgba(0, 0, 0, 0.2)",
        width: "30rem",
        p: "2rem 3rem",
        borderRadius: "0.5rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom fontSize={20}>
          Price Range
        </Typography>
        <Typography fontSize={20} fontWeight={600}>
          {extractRange(values, true)}
        </Typography>
      </Box>

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
    </Box>
  );
};

export default PriceSlider;
