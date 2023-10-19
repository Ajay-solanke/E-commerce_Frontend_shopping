import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: "0 50px 50px 0",
        },
      },
    },
  },
});

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }} // Modify the width here
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <div
          style={{
            padding: "15px",
            marginLeft: "20px",
          }}
        ></div>
        <List>
          <List>
            <h5>SHOP BY CATEGORY</h5>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
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
            </ListItemButton>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <Link
                to="/womensfashion"
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Womens Fashion
              </Link>
            </ListItemButton>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
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
            </ListItemButton>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
              <Link
                to="/electronics"
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Electronics Products
              </Link>
            </ListItemButton>
          </List>
        </List>
        <Divider />
        <List>
          <h5>HELP & ACCOUNTS</h5>
          <ListItemButton
            sx={{ "&:hover": { backgroundColor: "lightgray" } }}
          >
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
          <ListItemButton
            sx={{ "&:hover": { backgroundColor: "lightgray" } }}
          >
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
          </ListItemButton>
        </List>
      </div>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
