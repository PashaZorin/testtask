import React from "react";
import { useField, Field } from "formik";
import { TextField } from "@mui/material";

const PostInput = (props) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  return (
    <>
      <Field {...field} {...props} as={TextField} error={touched && !!error} />
      <span className="post__error-messege">{touched && error}</span>
    </>
  );
};

//PostInput.propTypes = {};
//PostInput.defaultProps = {};

export default PostInput;
