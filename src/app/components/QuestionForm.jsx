"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const QuestionForm = forwardRef((props, ref) => {
  const [typeOfQuestion, setTypeOfQuestion] = useState("text");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [isOptionMath, setIsOptionMath] = useState([false, false, false, false]);
  const [correctAnswer, setCorrectAnswer] = useState("A");
  const [description, setDescription] = useState("");
  const [paragraphId, setParagraphId] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!question.trim()) newErrors.question = "Question is required";
    if (options.some(option => !option.trim())) newErrors.options = "All options are required";
    if (!description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateForm
  }));

  const handleTypeOfQuestionChange = (event) => {
    setTypeOfQuestion(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    if (errors.question) setErrors(prev => ({ ...prev, question: "" }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    if (errors.options) setErrors(prev => ({ ...prev, options: "" }));
  };

  const handleIsOptionMathChange = (index, checked) => {
    const newIsOptionMath = [...isOptionMath];
    newIsOptionMath[index] = checked;
    setIsOptionMath(newIsOptionMath);
  };

  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (errors.description) setErrors(prev => ({ ...prev, description: "" }));
  };

  return (
    <Box sx={{ maxWidth: '100%', pr: { xs: 0, sm: 0, md: 0 } }}>
      
      {/* Type of Question Dropdown */}
      <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Type of Question</InputLabel>
            <Select
              value={typeOfQuestion}
              label="Type of Question"
              onChange={handleTypeOfQuestionChange}
            >
              <MenuItem value="text">Text</MenuItem>
              <MenuItem value="html">HTML</MenuItem>
              <MenuItem value="math">Math</MenuItem>
              <MenuItem value="statement">Statement</MenuItem>
              <MenuItem value="matchPairs">Match Pairs</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      {/* Question Field */}
      <Grid item xs={12} mb={3} mt={3} >
        <TextField
          fullWidth
          multiline
          rows={5}
          placeholder="Enter your Question ..."
          variant="standard"
          value={question}
          onChange={handleQuestionChange}
          error={!!errors.question}
          helperText={errors.question}
          InputProps={{
            style: {
              padding: "0px 0",
              borderRadius: 2,
            },
          }}
        />
      </Grid>

      {/* Option Fields */}
      <Grid container spacing={2} mb={3}>
        {["A", "B", "C", "D"].map((letter, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                position: "relative",
                pb: 6,
                mb: 1,
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                placeholder={`Option ${letter}`}
                value={options[index]}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                error={!!errors.options}
                helperText={index === 0 && errors.options}
                sx={{
                  "& .MuiInput-underline:before": { borderBottomColor: "#ccc" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "#aaa",
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isOptionMath[index]}
                    onChange={(event) =>
                      handleIsOptionMathChange(index, event.target.checked)
                    }
                    size="small"
                  />
                }
                label="Math"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.75rem",
                  },
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Correct Answer and Generate Wrong Options */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Choose Correct Answer</InputLabel>
            <Select
              label="Choose Correct Answer"
              value={correctAnswer}
              onChange={handleCorrectAnswerChange}
            >
              {["A", "B", "C", "D"].map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                >{`Option ${option}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              padding: "12px 24px",
              fontSize: "16px",
            }}
          >
            Generate Wrong Options
          </Button>
        </Grid>
      </Grid>

      {/* Paragraph ID */}
      <Grid item xs={12} mb={3}>
        <TextField
          fullWidth
          placeholder="Paragraph ID (Optional)"
          variant="standard"
          value={paragraphId}
          onChange={(e) => setParagraphId(e.target.value)}
          InputProps={{
            style: {
              padding: "0px 0",
              borderRadius: 2,
            },
          }}
        />
      </Grid>

      {/* Description Field */}
      <Grid item xs={12} mb={3}>
        <TextField
          fullWidth
          multiline
          rows={5}
          placeholder="Description (Required)"
          variant="standard"
          value={description}
          onChange={handleDescriptionChange}
          error={!!errors.description}
          helperText={errors.description}
          InputProps={{
            style: {
              padding: "0px 0",
              borderRadius: 2,
            },
          }}
        />
      </Grid>
    </Box>
  );
})

QuestionForm.displayName = 'QuestionForm';

export default QuestionForm;