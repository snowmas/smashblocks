


import React from "react";
import { Slider, Input } from "@material-ui/core/";

export default function InsertSlider({ values, handleChange }) {
  console.log("LOG IS: values.areaSpace: " + values.areaSpace);
  const [value, setValue] = React.useState(values.areaSpace);
  console.log("LOG IS: value: " + value);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    console.log("LOG IS: handleSliderChange: setValue(newValue): " + newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    console.log("LOG IS: handleInputChange: setValue(event.target.value): " + event.target.value);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
      console.log("LOG IS: handleBlur (0)");
    } else if (value > 100) {
      setValue(100);
      console.log("LOG IS: handleBlur (100)");
    }
  };

      // SLIDER
    // Handle inputs change
    handleChange = input => event => {  // input is areaSpace?
      console.log("LOG index: handleChange: input: " + input);  // INPUT NOT NEEDED HERE; input is only need to make handleChange generic and tell it which state var needs to be updated
      // this.setState({ [input]: event.target.value });  // ? needed to make handleChange generic, to handle the input field?
      setValue(event.target.value); // ADDED BY ME: sets the areaSpace state
      console.log("LOG index: handleChange: event.target.value: " + event.target.value);
    }


  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Input
        value={value}
        margin="dense"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 800,
          type: "number",
          "aria-labelledby": "input-slider"
        }}
      />
      <Slider
        style={{ marginTop: "20px" }}
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        step={1}
        min={0}
        max={55}
        onChangeCommitted={(event, value) =>
          handleChange("areaSpace")({ target: { value } })
        }
      />
    </div>
  );
}
