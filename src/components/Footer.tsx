import React from "react";
import { Box, Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <div>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bottom: "0",
          width: "100vw",
          backgroundColor: "rgb(46, 51, 51)",
          padding: "2rem 4rem",
          height: "492px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: isMainPage ? "absolute" : "static",
          top: isMainPage ? "2100px" : "",
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            color: "white",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid white",
              backgroundColor: "rgb(80, 82, 82)",
              width: "100%",
            }}
          >
            <span>Discover</span>
            <span>Deliveroo </span>
            <span>Investors </span>
            <span>About us </span>
            <span>Takeaway </span>
            <span>More </span>
            <span>Newsroom</span>
            <span>Engineering </span>
            <span>blog</span>
            <span>Design </span>
            <span>blog </span>
            <span>Gift Cards </span>
            <span>Deliveroo Students Careers</span>
            <span>Restaurant signup Become a rider</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid white",

              width: "100%",
            }}
          >
            <span>Discover</span>
            <span>Deliveroo </span>
            <span>Investors </span>
            <span>About us </span>
            <span>Takeaway </span>
            <span>More </span>
            <span>Newsroom</span>
            <span>Engineering </span>
            <span>blog</span>
            <span>Design </span>
            <span>blog </span>
            <span>Gift Cards </span>
            <span>Deliveroo Students Careers</span>
            <span>Restaurant signup Become a rider</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid white",

              width: "100%",
            }}
          >
            <span>Discover</span>
            <span>Deliveroo </span>
            <span>Investors </span>
            <span>About us </span>
            <span>Takeaway </span>
            <span>More </span>
            <span>Newsroom</span>
            <span>Engineering </span>
            <span>blog</span>
            <span>Design </span>
            <span>blog </span>
            <span>Gift Cards </span>
            <span>Deliveroo Students Careers</span>
            <span>Restaurant signup Become a rider</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid white",

              width: "100%",
            }}
          >
            <span>Discover</span>
            <span>Deliveroo </span>
            <span>Investors </span>
            <span>About us </span>
            <span>Takeaway </span>
            <span>More </span>
            <span>Newsroom</span>
            <span>Engineering </span>
            <span>blog</span>
            <span>Design </span>
            <span>blog </span>
            <span>Gift Cards </span>
            <span>Deliveroo Students Careers</span>
            <span>Restaurant signup Become a rider</span>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
