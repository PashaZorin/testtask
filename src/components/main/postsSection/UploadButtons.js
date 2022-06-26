import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
//import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function UploadButtons() {
  const Input = styled("input")({
    display: "none",
  });

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button
          variant="outlined"
          size="large"
          component="span"
          className="post__upload-button"
          style={{
            boxShadow: "none",
            textTransform: "none",
            fontSize: 16,
            padding: "14px 14px",
            border: "1px solid #000000de",
            lineHeight: 1.5,
            borderColor: "#000000de",
            color: "#000000de",
            borderRadius: " 4px 0px 0px 4px",
            "&:hover ": {
              backgroundColor: "#000000de",
              borderColor: "#000000de",
              boxShadow: "none",
            },
            "&:active": {
              backgroundColor: "#000000de",
              borderColor: "#000000de",
              boxShadow: "none",
            },
          }}
        >
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <TextField
            className="post__upload-input"
            disabled
            label="Upload your photo"
            //fullWidth
            style={{
              borderRadius: " 4px 0px 0px 4px",
              width: "320px",
            }}
          />
        </IconButton>
      </label>
    </Stack>
  );
}
