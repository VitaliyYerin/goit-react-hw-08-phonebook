import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Account, Container, Button, CustimIcon } from './UserMenu.styled';
import toast from 'react-hot-toast';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  return (
    <Container>
      <Account>
        <AccountCircleIcon sx={{ color: '#0d6efd' }} fontSize="large" />
      </Account>
      <span>Welcome, {name}</span>
      <Button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
          toast.success(`You just Log Out`, {
            duration: 2000,
            position: 'top-center',
          });
        }}
      >
        <CustimIcon />
      </Button>
    </Container>
  );
};

export default UserMenu;
