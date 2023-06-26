import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Styled navigation component.
 */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 10px;
`;

/**
 * Styled unordered list component.
 */
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

/**
 * Styled list item component.
 */
const Li = styled.li`
  margin: 0 10px;
`;

/**
 * Styled link component.
 */
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    color: #ff0000;
  }
`;

/**
 * Header component containing the sticky navigation menu.
 * The active link is determined based on the current location.
 */
const HeaderPage = () => {
  const location = useLocation();

  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/recipes" className={location.pathname === '/recipes' ? 'active' : ''}>
            Recipes
          </StyledLink>
        </Li>
       
      </Ul>
    </Nav>
  );
};

export default HeaderPage;
