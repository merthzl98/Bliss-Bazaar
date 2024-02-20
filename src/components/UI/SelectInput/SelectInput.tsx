import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiSelect-select": {
    minHeight: "1rem !important",
  },
  "& .MuiInputBase-input": {
    color: "rgba(54, 54, 54, 0.95)",
    borderRadius: "0.25rem",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#2b2b2b",
    border: "2px solid rgba(0, 0, 0, 0.2)",
    fontSize: "1.5rem",
    width: "100%",
    padding: "1rem",
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
  "& .MuiSvgIcon-root": {
    width: "2rem",
    height: "2rem",
  },
}));

type SelectInputProps = {
  data: any[];
  width: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const SelectInput = ({
  data,
  width,
  label,
  value,
  setValue,
}: SelectInputProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
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
      <Select
        sx={{ width: width }}
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {data.map((item) => (
          <MenuItem
            sx={{ fontSize: "1.5rem" }}
            key={item.id}
            value={item.value}
          >
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
