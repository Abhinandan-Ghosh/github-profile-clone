import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavItem>
          <a href="/">Overview</a>
        </NavItem>
        <NavItem className="Active">
          <a href="/">Repositories</a>
          <span>11</span>
        </NavItem>
        <NavItem>
          <a href="/">Project</a>
        </NavItem>
        <NavItem>
          <a href="/">Package</a>
        </NavItem>
      </Nav>
    </div>
  );
};

const Nav = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid lightgray;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .Active {
    border-bottom: 0.1rem solid red;
  }
`;

const NavItem = styled.div`
  padding: 1rem 0rem 1rem 0rem;

  span {
    background: #cfcfcf;
    margin-left: 0.5rem;
    padding: 0.1rem;
    border-radius: 45%;
  }
`;

export default Navbar;
