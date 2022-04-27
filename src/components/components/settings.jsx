import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@material-ui/core/Divider";

const Settings = () => {
  return (
    <div>
      <center>
        <div
          style={{
            width: "50%",
            backgroundColor: "#e8e8e8",
            padding: 20,
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 25,
            borderRadius: 7,
          }}
        >
          Settings
        </div>
      </center>
      <center>
        <div
            style={{
                textAlign: "center",
                borderRadius: 7,
                border: '1px solid gray',
                width: "70%",
                alignItems: "center",
                marginTop: 25,
                backgroundColor: "#f2f2f2",
            }}
        >
          <FormControl
            component="fieldset"
            variant="filled"
          >
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ 
                display: "flex",
                fontSize: 18, 
                fontWeight: "bold",
            }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="enable"
                control={<Radio />}
                label="Enable"
              />
              <FormControlLabel
                value="disable"
                control={<Radio />}
                label="Disable"
              />
            </RadioGroup>
          </FormControl>
          <Divider style={{ width: "100%" }} />
          <></><br/>
          <FormControl
            component="fieldset"
            variant="filled"
          >
          <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ 
                  display: "flex",
                  fontSize: 18, 
                  fontWeight: "bold",
                }}
            >
              Lottery - Super distributor wise winning: 
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
              />
            </RadioGroup></FormControl>
            <Divider style={{ width: "100%" }} />
            <></><br/>
            <FormControl
            component="fieldset"
            variant="filled"
          >
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ 
                display: "flex",
                fontSize: 18, 
                fontWeight: "bold",
                }}
            >
              Multi - Attempt Allowed:
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="enable"
                control={<Radio />}
                label="Enable"
              />
              <FormControlLabel
                value="disable"
                control={<Radio />}
                label="Disable"
              />
            </RadioGroup></FormControl>
          <Divider style={{  width: "100%" }} />
            <></>

        </div>
      </center>
    </div>
  );
};

export default Settings;
