import React, { useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import TextAreaWithTitle from "./components/TextAreaWithTitle";
import { MaskButton } from "./components/MaskButton";
import UploadFilesSection from "./components/UploadFilesSection";
import axios from "axios";
import { IS_DEMO_MODE } from "./constants";
import { dInput, dOutput } from "./dummy-data/dummy-data";
var FormData = require("form-data");

const BASE_URL = "https://52.29.156.184:5000/";
function App() {
  const [text, setText] = useState(IS_DEMO_MODE ? dInput : "");
  const [outputText, setOutputText] = useState("");

  async function getUser() {
    try {
      console.log(text);
      if (IS_DEMO_MODE) {
        setOutputText(dOutput);
      } else {
        var data = new FormData();
        data.append("text", text);

        const response = await axios.post(BASE_URL + "mask-text", data);
        console.log(response.data);
        setOutputText(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {/* APP TITLE */}
      <Box mb={2}>
        <Typography variant="h4" className="app-title">
          Healthcare Data Masking
        </Typography>
      </Box>

      {/* TEXT AREAS SECTION */}
      <Box display="flex" justifyContent={"space-between"} my={2}>
        <TextAreaWithTitle
          title="Data to be Masked"
          text={text}
          setText={setText}
          disable={IS_DEMO_MODE}
        />
        <TextAreaWithTitle
          title="Masked Data"
          text={outputText}
          disable={true}
        />
      </Box>

      <Box mt={2} ml={3} display="flex">
        {/* UPLOAD FILES SECTION */}
        <Box
          display="flex"
          flex={1}
          flexDirection="row"
          alignItems="flex-start"
          flexWrap="wrap"
          // mt={4}
        >
          <Typography variant="subtitle1">
            <b>Upload Files to be Masked</b>
          </Typography>
          <UploadFilesSection />
        </Box>

        <Box
          display="flex"
          flex={2}
          flexDirection="row"
          alignItems="flex-start"
          pl={10}
          pt={2}
        >
          {/* <MaskButton variant="contained" className="mask-btn" onClick={getUser} > */}
          <MaskButton
            variant="contained"
            className="mask-btn"
            onClick={getUser}
          >
            MASK DATA
          </MaskButton>
        </Box>
      </Box>
    </div>
  );
}

export default App;
