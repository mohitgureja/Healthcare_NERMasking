import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const options = ["mask1.txt", "mask2.txt"];
export default function BasicSelect(props) {
  const { inputFile, setInputFile } = props;
  const handleChange = (event: SelectChangeEvent) => {
    const link = document.createElement("a");
    const fileName = event.target.value;
    link.download = `${fileName}`;
    link.href = `./${fileName}`;
    link.click();
    setInputFile(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, height: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Input File</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputFile}
          label="Select Input File"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
