import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { authOperations, authSelectors } from 'redux/auth';
import { LoginForm, Input, ErrorMsg } from './LoginPage.styled';
import Spiner from 'components/Spinner';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import toast from 'react-hot-toast';
import useSound from 'use-sound';

import boopSfx from 'sounds';

let loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/VitaliyYerin">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginPage() {
  const [play] = useSound(boopSfx);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn(value));
    toast.success('You Log In in Phonebook!', {
      duration: 3000,
      position: 'top-center',
    });
    resetForm();
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isFetchingCurrentUser ? (
          <Box>{Spiner.customSpinner}</Box>
        ) : (
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
          >
            <LoginForm>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
              ></Input>
              <ErrorMessage name="email">
                {msg => <ErrorMsg>{msg}</ErrorMsg>}
              </ErrorMessage>
              <Input
                type="password"
                name="password"
                placeholder="Password"
              ></Input>
              <ErrorMessage name="password">
                {msg => <ErrorMsg>{msg}</ErrorMsg>}
              </ErrorMessage>
              <Button
                onClick={play}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Link
                href="https://vitaliyyerin.github.io/goit-react-hw-08-phonebook/register"
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </LoginForm>
          </Formik>
        )}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}
