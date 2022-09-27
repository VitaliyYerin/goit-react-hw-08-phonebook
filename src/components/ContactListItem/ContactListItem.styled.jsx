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
  padding: 0 10px;
  width: 80px;
  height: 30px;
  background-color: rgb(133, 180, 222);
  border: none;
  border-radius: 20px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);
  -webkit-box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);
  -moz-box-shadow: 0px 0px 4px 4px rgba(58, 132, 222, 0.75);
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(100, 70, 192);
    box-shadow: 0px 0px 7px #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 20px;
  padding-right: 10px;
  margin-left: 20px;
`;
