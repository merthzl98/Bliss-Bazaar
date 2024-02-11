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
  "& .MuiInputBase-input": {
    color: "rgba(54, 54, 54, 0.95)",
    borderRadius: "0.25rem",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
    border: "2px solid rgba(0, 0, 0, 0.2)",
    fontSize: "1.5rem",
    width: "100%",
    padding: "0.6rem 1rem",
    // borderLeft: "none",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "0.25rem",
      backgroundColor: "rgba(54, 54, 54, 0.03)",
    },
  },
}));

type TextInputProps = {
  value: string;
  setValue: (value: string) => void;
  label: string;
  maxRows: number | null;
  startIcon: React.ReactElement<SvgIconProps>;
};

const TextInput = (props: TextInputProps) => {
  const { value, setValue, label, maxRows, startIcon } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="standard">
      <InputLabel
        sx={{ fontWeight: "bold", fontSize: "2rem", color: "#000000" }}
        shrink
        htmlFor={label}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        onChange={handleChange}
        value={value}
        multiline={!!maxRows}
        maxRows={maxRows ?? 1}
        size="small"
        startAdornment={
          <InputAdornment
            sx={
              {
                // border: "2px solid rgba(0, 0, 0, 0.5)",
                // borderRadius: "0.25rem",
                // borderRight: "none",
                // py: 2.1,
                // px: 1.1,
                // margin: "0",
              }
            }
            position="start"
          >
            {startIcon}
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default TextInput;
