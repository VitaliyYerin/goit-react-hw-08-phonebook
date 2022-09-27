import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 10px solid rgb(156, 182, 238);
  padding: 20px;
  border-radius: 50px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const InputName = styled.input`
  margin-left: 28px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;
export const InputNumber = styled.input`
  margin-left: 10px;
  width: 350px;
  height: 30px;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  margin: auto;
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  width: 150px;
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
