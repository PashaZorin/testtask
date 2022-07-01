import React, { useState } from "react";

import { useField } from "formik";

export default function UploadButtons(props) {
  const [imgFile, setImgFile] = useState(null);
  const [field] = useField(props);
  const toggleimgFile = (data) => setImgFile(data);

  return (
    <div className="post__upload-conteiner">
      <input
        {...field}
        {...props}
        onChange={(e) => toggleimgFile(e.target.files[0])}
      />
      <span className="post__upload-button">Upload</span>
      <span className="post__upload-text">
        {imgFile ? imgFile.name : "Upload your photo"}
      </span>
    </div>
  );
}
