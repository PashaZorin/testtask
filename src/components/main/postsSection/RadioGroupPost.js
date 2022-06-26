import React from "react";
import Radio from "@mui/material/Radio";
import { useField } from "formik";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioGroupPost = (props) => {
  const [field] = useField(props);
  return (
    <section className="post__input-radio-conteiner">
      <FormControl
        sx={{
          gap: 0.5,
        }}
      >
        <FormLabel id="demo-radio-buttons-group-label">
          Select your position
        </FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" {...field}>
          <FormControlLabel
            value="Frontend developer"
            control={<Radio />}
            label="Frontend developer"
            name="position"
            sx={{
              paddingBottom: 0,
            }}
          />
          <FormControlLabel
            value="Backend developer"
            control={<Radio />}
            label="Backend developer"
            name="position"
          />
          <FormControlLabel
            value="Designer"
            control={<Radio />}
            name="position"
            label="Designer"
          />
          <FormControlLabel
            value="QA"
            control={<Radio />}
            name="position"
            label="QA"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
};
export default RadioGroupPost;
