import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RegForm, RegInput, ErrorMsg } from './RegisterPage.styled';
import toast from 'react-hot-toast';

let loginSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(authOperations.register(value));
    toast.success('You Registered successfully in Phonebook!', {
      duration: 3000,
      position: 'top-center',
    });
    resetForm();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <RegForm>
          <Avatar sx={{ m: 1, bgcolor: 'red', color: '#fff' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <RegInput
            type="text"
            name="name"
            placeholder="Enter your name"
          ></RegInput>
          <ErrorMessage name="name">
            {msg => <ErrorMsg>{msg}</ErrorMsg>}
          </ErrorMessage>
          <RegInput
            type="email"
            name="email"
            placeholder="Enter your email"
          ></RegInput>
          <ErrorMessage name="email">
            {msg => <ErrorMsg>{msg}</ErrorMsg>}
          </ErrorMessage>
          <RegInput
            type="password"
            name="password"
            placeholder="Password"
          ></RegInput>
          <ErrorMessage name="password">
            {msg => <ErrorMsg>{msg}</ErrorMsg>}
          </ErrorMessage>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              '&:hover': {
                boxShadow: 4,
              },
            }}
          >
            Sign Up
          </Button>
          <Link
            href="https://vitaliyyerin.github.io/goit-react-hw-08-phonebook/login"
            variant="body2"
          >
            Already have an account? Sign in
          </Link>
        </RegForm>
      </Formik>
    </Box>
  );
}
