import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@mui/material/Box";

const Resetmac = () => {
  const [retailer, setRetailer] = useState("");
  const handleChange = (event) => {
    setRetailer(event.target.value);
  };

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
          Reset MAC
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "bold",
            marginTop: 25,
            width: "85%",
            height: "100%",
            lineHeight: "45px",
            borderRadius: 7,
            boxShadow: "#e8e8e8",
          }}
        >
          <div style={{ marginTop: 10, marginRight: 10 }}>
            <Box sx={{ minWidth: 120 }}>
              Select Retailer:
              <Select
                style={{ width: "50%", height: "100%", backgroundColor:'transparent' }}
                value={retailer}
                label="Retailer"
                onChange={handleChange}
              >
                <MenuItem value={"Retailer 1"}>Retailer 1</MenuItem>
                <MenuItem value={"Retailer 2"}>Retailer 2</MenuItem>
                <MenuItem value={"All"} >All</MenuItem>
              </Select>
            </Box>
            <Button
              variant="contained"
              style={{
                float: "left",
                left: "15%",
                top: 30,
                marginBottom: "50px",
              }}
              onClick={() => console.log("You have clicked me!")}
            >
              
              Reset MAC
            </Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Resetmac;
