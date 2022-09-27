import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  color: #0d6efd;
  background-color: rgb(221, 216, 236);
  border-radius: 25px;
  width: 80px;
  &:hover,
  :focus {
    color: #fff;
    background-color: rgb(100, 70, 192);
  }
`;

export const LinkWraper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`;
