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


const whead1 ="Prepare for your first skateboard jump";
const sub1 ="Jordan Wise";
const sub2 ="125,908 views . 2 days ago";

function Whead1() {
    return (
      <div className="whead" style = {{display:"contents"}}>
        <MuiThemeProvider theme={theme}>
          <Typography variant="h5" gutterBottom >
            {whead1}
          </Typography>
          <Typography variant="subtitle" gutterBottom
          style={{opacity:0.5,}}>
            {sub1}
          </Typography>
          <br/>
          <Typography variant="subtitle" gutterBottom
          style={{opacity:0.5,}}>
            {sub2}
          </Typography>
        </MuiThemeProvider>
      </div>
    );
  }
  export default Whead1;