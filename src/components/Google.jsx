import React from "react";
import styled from "styled-components";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
`;
const LeftLinks = styled.div`
  padding: 10px;
  margin-top: 10px;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;
`;

export const Google = () => {
  return (
    <>
      <div className="container">
        <Nav>
          <LeftLinks>
            <NavLinks to="/about">About</NavLinks>
            <NavLinks to="/store">Store</NavLinks>
          </LeftLinks>

          <RightLinks>
            <NavLinks to="/email">Email</NavLinks>
            <NavLinks to="/images">Images</NavLinks>
            <NavLinks
              to="/"
              css={`
                padding-right: 20px;
              `}
            >
              <ViewCompactIcon />
            </NavLinks>

            <Link to="/">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Link>
          </RightLinks>
        </Nav>
      </div>
    </>
  );
};
