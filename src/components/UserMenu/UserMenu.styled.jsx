import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';

export const Account = styled('div')`
  margin-right: 7px;
`;

export const Container = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Message = styled('span')`
  color: #fff;
` ;

export const Button = styled('button')`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  margin-left: 10px;
  padding-top: 3px;
  color: #000;
  cursor: pointer;
  background-color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    background-color: red;
  }
`;

export const CustimIcon = styled(LogoutIcon)`
  &:hover,
  :focus {
    color: #fff;
  }
`;
