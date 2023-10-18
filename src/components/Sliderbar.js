import React from "react";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ borderRadius: "2px 20px 20px 2px" }}>
        <List>
          <h2>Hello</h2>
        </List>

        <List>
          <h5>Shop by category</h5>

          <div>
            <Link
              to="/mensfashion"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Mens Fashion
            </Link>
          </div>
          <br></br>
          <div style={{ marginTop: "-10px" }}>
            <Link
              to="/womensfashion"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "black",
                // marginTop: "20px",
              }}
            >
              Womens Fashion
            </Link>
          </div>
          <br></br>
          <div style={{ marginTop: "-10px" }}>
            <Link
              to="/mobilephones"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Mobile Phones
            </Link>
          </div>
        </List>

        <Divider />

        <List>
          <h5>Help & Setting</h5>
          <ListItemButton>
            <Link
              to="/my-account"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Your Account
            </Link>
          </ListItemButton>
          {/* {["Customer-Service"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
          <Link
            to="/Customer-Service"
            style={{
              marginLeft: "10px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Customer-Service
          </Link>
        </List>
      </div>
    </Box>
  );

  return (
    <div style={{ borderRadius: "2px 20px 20px 2px" }}>
      {["Left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuOpenIcon onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </MenuOpenIcon>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
