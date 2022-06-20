import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Grid } from "@mui/material";

const TextEditor = ({ data, handleChange }) => {
  return (
    <Grid container flexDirection="column">
      <Grid item xs={12} sm={12} md={12} position="relative">
        <CKEditor
          editor={Editor}
          data={data}
          onReady={(editor) => {
            // console.log("", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            handleChange(event, editor);
          }}
          // onBlur={(event, editor) => {
          //   console.log("Blur.", editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log("Focus.", editor);
          // }}
        />
      </Grid>
      <Grid
        item
        justifyContent="flex-end"
        alignItems="flex-end"
        padding={1}
      ></Grid>
    </Grid>
  );
};

export default TextEditor;
