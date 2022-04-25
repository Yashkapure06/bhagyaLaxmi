import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';

const Commissionreport = () => {
  const [user, setUser] = useState('');

  const buttons = [
    "This Week",
    "Previous Week",
    "Last Month",
    "Today",
    "Yesterday",
    "Custon date",
  ];

  const [active, setActive] = useState(buttons[0]);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const users = [
    {
      srno: 1,
      username: "Test",
      from: "ABC",
      to: "XYZ",
      commission: "Gross: ",
      played: 0.0,
      won: 0.0,
      consumed: 0.0,
      mainCommission: 0.0,
    },
  ];
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
          
          Reports - Commission
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 17,
            fontWeight: "bold",
            marginTop: 25,
            border: "1px solid gray",
            width: "85%",
            height: "100%",
            lineHeight: "45px",
            borderRadius: 7,
            boxShadow: "#e8e8e8",
          }}
        >
          <div style={{ marginTop: 10, marginRight: 10 }}>
          <Box sx={{ minWidth: 120 }}>
                User:   
                <Select
                style={{ width: "50%", height: "100%" }}
                value={user}
                label="User"
                onChange={handleChange}
                >
                <MenuItem value={"User1"}>User1</MenuItem>
                <MenuItem value={"User2"}>User2</MenuItem>
                <MenuItem value={"User3"}>User3</MenuItem>
                </Select>
            </Box>
          </div>
          Select Date:
          <div>
            {buttons.map((button) => (
              <Button
                style={{ marginTop: 10, marginRight: 10, padding: 10 }}
                variant="contained"
                color="primary"
                key={button}
                active={active === button}
                onClick={() => setActive(button)}
              >
                {button}
              </Button>
            ))}
          </div>
          <br />
          Report for:
          <Button variant="contained" color="secondary">
            {active}
          </Button>
          <br />
          From : Date-time <span> </span> To:Date-time
          <br />
        </div>
        <Divider style={{ marginTop: 10, width: "75%" }} />
        <center className="table-responsive">
          <table
            style={{ width: "75%",alignItem:'center', right: 0, margin: 25 }}
            className="table  table-hover "
          >
            <thead>
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">username</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">%Commission</th>
                <th scope="col">Points Played</th>
                <th scope="col">Points Won</th>
                <th scope="col">Points Consumed</th>
                <th scope="col">Commission</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <th scope="row">{user.srno}</th>
                  <td>{user.username}</td>
                  <td>{user.from}</td>
                  <td>{user.to}</td>
                  <td>{user.commission}</td>
                  <td>{user.played}</td>
                  <td>{user.won}</td>
                  <td>{user.consumed}</td>
                  <td>{user.mainCommission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
        <Button variant="contained" style={{backgroundColor:"#c9b500", float:'right', right:'5%'}} onClick={()=>console.log("You have clicked me!")}> Print </Button>
      </center>
    </div>
  );
};

export default Commissionreport;
