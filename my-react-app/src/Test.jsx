import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading = "Discover";

function Head() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3" gutterBottom style={{color:"#02b6ce",}}>
          {heading}
        </Typography>
      </MuiThemeProvider>
    </div>
  );
}

export default Head;
