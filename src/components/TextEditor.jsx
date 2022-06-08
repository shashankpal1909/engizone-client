import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Grid } from "@mui/material";

const TextEditor = () => {
  return (
    <Grid
      container
      //   alignItems="center"
      //   justifyContent="center"
      flexDirection="column"
      //   marginBottom={4}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        // alignItems="center"
        // justifyContent="center"
        position="relative"
      >
        <CKEditor
          editor={Editor}
          data=""
          onReady={(editor) => {
            console.log("", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </Grid>
      <Grid item justifyContent="flex-end" alignItems="flex-end" padding={1}>
        {/* <Button type='submit' variant='contained'>Submit</Button> */}
      </Grid>
    </Grid>
  );
};

export default TextEditor;
