import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { InputAdornment, SvgIconProps } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
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
    "&:focus": {
      borderRadius: "0.25rem",
      backgroundColor: "rgba(54, 54, 54, 0.03)",
    },
  },
}));

type TextInputProps = {
  width: string;
  value: string;
  setValue: (value: string) => void;
  label: string;
  maxRows?: number;
  startIcon: React.ReactElement<SvgIconProps>;
  type: string;
};

const TextInput = ({
  width,
  value,
  setValue,
  label,
  maxRows = 1,
  startIcon,
  type,
}: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: width }} variant="standard">
      <InputLabel
        sx={{ fontWeight: "bold", fontSize: "2rem", color: "#000000" }}
        shrink
        htmlFor={label}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        type={type}
        onChange={handleChange}
        value={value}
        multiline={maxRows > 1}
        maxRows={maxRows}
        size="small"
        startAdornment={
          <InputAdornment position="start">{startIcon}</InputAdornment>
        }
      />
    </FormControl>
  );
};

export default TextInput;
