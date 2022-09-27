import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const glow = keyframes`
from {
    text-shadow:
  2px 2px 1px rgba(0,0,0,.4),
  0 0 10px #42A5F5,
  0 0 30px rgba(33, 150, 243, .75),
  0 0 50px rgba(33, 150, 243, .75),
  0 0 60px rgba(33, 150, 243, .75);
  }
  to {
    text-shadow:
  2px 2px 1px rgba(0,0,0,.4),
  0 10 20px #42A5F5,
  0 8 40px rgba(33, 150, 243, .75),
  0 0 60px rgba(33, 150, 243, .75),
  0 0 80px rgba(33, 150, 243, .75);
  }
  `;

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  color: #fff;
  background-color: rgb(100, 70, 192);
  border-radius: 25px;
  width: 80px;
  &:hover,
  :focus {
    color: #0d6efd;
    background-color: rgb(221, 216, 236);
  }
`;

export const HomeTitle = styled.h1`
  display: block;
  padding: 10px 25px;
  border-radius: 25px;
  margin: 0;
  color: #0d6efd;
  background-color: rgb(221, 216, 236);
`;

export const HomeText = styled.p`
  padding: 10px 25px;
  font-family: 'LeHavreLayersDblLine';
  color: #f51909;
  margin-top: 50px;
  margin-bottom: 50px;
  animation: ${glow} 1s ease-in-out infinite alternate;
`;

export const ContactsLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  color: #fff;
  background-color: rgb(100, 70, 192);
  border-radius: 25px;
  &:hover,
  :focus {
    color: #0d6efd;
    background-color: rgb(221, 216, 236);
  }
`;
