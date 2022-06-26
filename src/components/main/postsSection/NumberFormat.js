import React from "react";
import NumberFormat from "react-number-format";
import { TextField } from "@mui/material";
import { useField } from "formik";

const NumberInput = (props) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  return (
    <>
      <NumberFormat
        customInput={TextField}
        {...props}
        {...field}
        error={touched && !!error}
        format="+38##########"
        type="text"
      />
      <span className="post__error-messege">{touched && error}</span>
    </>
  );
};

export default NumberInput;
