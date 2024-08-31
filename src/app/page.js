'use client';

import React, { useState, useRef } from "react";
import QuestionForm from "./components/QuestionForm";
import Rightbar from "./components/rightbar";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const [mode, setMode] = useState("light");
  const [formValid, setFormValid] = useState(true);
  const questionFormRef = useRef();

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleSubmit = () => {
    const isValid = questionFormRef.current.validateForm();
    setFormValid(isValid);
    if (isValid) {
      // Proceed with form submission
      console.log("Form is valid, submitting...");
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 0, sm: 1 }
      }}>
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <QuestionForm ref={questionFormRef} />
        </Box>
        <Rightbar onSubmit={handleSubmit} />
      </Box>
    </ThemeProvider>
  );
}

export default App;