import {
  Container,
  HomeTitle,
  HomeText,
  AuthLink,
  AuthContainer,
  ContactsLink,
} from './HomePage.styled';
import GlobalFonts from 'fonts/fonts.styled';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import routesPath from 'routesPath';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import image from 'images';

const HomePage = () => {
  const el = useRef(null);
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome to PHONEBOOK ! '],
      startDelay: 1000,
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <HomeTitle ref={el}></HomeTitle>
        <GlobalFonts />
        <HomeText
          as={motion.h1}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.9, delay: 2.5 }}
        >
          "Nice moment to look at yours contacts😀!"
        </HomeText>

        {!isLoggedIn ? (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.2 }}
          >
            <AuthContainer>
              <AuthLink to="login">Log in</AuthLink>
              <AuthLink to="register">Sign Up</AuthLink>
            </AuthContainer>
          </motion.div>
        ) : (
          <ContactsLink to={routesPath.contacts}>ContactsBook</ContactsLink>
        )}
      </Container>
    </>
  );
};

export default HomePage;
