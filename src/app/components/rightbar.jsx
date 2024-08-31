import {
    Box,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Button,
  } from "@mui/material";
  import React, { useState } from "react";
  
  const Rightbar = ({ onSubmit }) => {
    const [language, setLanguage] = useState("en");
    const [subject, setSubject] = useState("math");
    const [section, setSection] = useState("a");
    const [addToCurrentAffairs, setAddToCurrentAffairs] = useState(false);
    const [showInChallenge, setShowInChallenge] = useState(false);
    const [isPremiumQuestion, setIsPremiumQuestion] = useState(true);
  
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };
  
    const handleSubjectChange = (event) => {
      setSubject(event.target.value);
    };
  
    const handleSectionChange = (event) => {
      setSection(event.target.value);
    };
  
    const handleAddToCurrentAffairs = (event) => {
      setAddToCurrentAffairs(event.target.checked);
    };
  
    const handleShowInChallenge = (event) => {
      setShowInChallenge(event.target.checked);
    };
  
    const handleIsPremiumQuestion = (event) => {
      setIsPremiumQuestion(event.target.checked);
    };
  
    return (
      <Box 
      flex={2} 
      p={2} 
      sx={{ 
        display: 'block',
        width: '100%'
      }}
    >
      <Box width="100%">

        {/* Submit Button */}
        <Grid item xs={12} mb={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={onSubmit}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#4CAF50", // Green color
              '&:hover': {
                backgroundColor: "#45a049", // Slightly darker green on hover
              },
            }}
          >
            Submit
          </Button>
        </Grid>

        {/* Checkbox Options */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={addToCurrentAffairs}
                  onChange={handleAddToCurrentAffairs}
                />
              }
              label="Add to Current Affairs"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showInChallenge}
                  onChange={handleShowInChallenge}
                />
              }
              label="Show in Challenge"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPremiumQuestion}
                  onChange={handleIsPremiumQuestion}
                />
              }
              label="Premium Question"
            />
          </Grid>
        </Grid>

        {/* Language and Translate Buttons */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                label="Language"
                value={language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Malayalam</MenuItem>
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
              Translate
            </Button>
          </Grid>
        </Grid>

        {/* Subject and Section Dropdowns */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Select Subject</InputLabel>
              <Select
                label="Select Subject"
                value={subject}
                onChange={handleSubjectChange}
              >
                <MenuItem value="math">Math</MenuItem>
                <MenuItem value="science">Science</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Section</InputLabel>
              <Select
                label="Section"
                value={section}
                onChange={handleSectionChange}
              >
                <MenuItem value="a">Section A</MenuItem>
                <MenuItem value="b">Section B</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Edit Button */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                borderRadius: 2,
                textTransform: "none",
                padding: "12px 24px",
                fontSize: "16px",
              }}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
    );
  };
  
  export default Rightbar;