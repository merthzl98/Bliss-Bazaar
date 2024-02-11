import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

type CheckboxesGroupProps = {
  valueList: any[];
  setValueList: (valueList: any) => void;
};

const CheckboxesGroup = ({ valueList, setValueList }: CheckboxesGroupProps) => {
  const error = valueList.filter((item) => item.status).length < 2;

  const checkboxList = valueList.map((item) => (
    <FormControlLabel
      key={item.id}
      control={
        <Checkbox
          disabled={item.status && error}
          checked={item.status}
          onChange={(event) => handleChange(event, item)}
          name={item.title.toLowerCase()}
        />
      }
      label={
        <Typography style={{ fontSize: "1.5rem" }}>{item.title}</Typography>
      }
    />
  ));

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    item: any
  ) => {
    const itemIndex = valueList.findIndex((element) => element.id === item.id);

    if (itemIndex !== -1) {
      const newList = [...valueList];
      newList[itemIndex] = {
        ...newList[itemIndex],
        status: event.target.checked,
      };
      setValueList(newList);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        {error && (
          <FormLabel sx={{ fontSize: "1.5rem" }} component="legend">
            No less than 1 selection can be made
          </FormLabel>
        )}
        <FormGroup>{checkboxList}</FormGroup>
      </FormControl>
    </Box>
  );
};

export default CheckboxesGroup;
