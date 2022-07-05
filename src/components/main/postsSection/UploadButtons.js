import React from "react";

import { useField } from "formik";

export default function UploadButtons(props) {
  const [field] = useField(props);
  return (
    <div className="post__upload-conteiner">
      <input className="post__upload-input-transparent" {...field} {...props} />
      <p className="post__upload-button">Upload</p>
      <input
        disabled
        className="post__upload-text"
        value={field.value ? field.value : "Upload your photo"}
      />
    </div>
  );
}
