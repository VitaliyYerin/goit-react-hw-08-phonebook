import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-left: 30px;
`;

export const Button = styled.button`
  margin: auto;
  cursor: pointer;
  outline: none;
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 20px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    box-shadow: 2px 3px 5px #000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 10px;
  padding-right: 10px;
  margin-left: 20px;
`;
