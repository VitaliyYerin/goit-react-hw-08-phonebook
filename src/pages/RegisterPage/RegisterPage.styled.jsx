import { Form, Field } from 'formik';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const RegBtn = ({ children }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      size="medium"
      sx={{
        '&:hover': {
          boxShadow: 10,
        },
      }}
    >
      {children}
    </Button>
  );
};

export const RegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  padding: 20px;
  margin: 0 auto;
`;

export const RegInput = styled(Field)`
  border-radius: 0.5rem;
  font-size: 1.25rem;
  min-height: calc(1em + 1rem + 2px);
  padding: 0.5rem 1rem;
  appearance: none;
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #b1b7c1;
  border-radius: 0.375rem;
  color: rgba(44, 56, 74, 0.95);
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 90%;
  margin-top: 10px;
  &::placeholder {
  }
  &:hover,
  &:focus {
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  }
`;

export const ErrorMsg = styled('div')``;

export const AvatarText = styled('h3')``;
