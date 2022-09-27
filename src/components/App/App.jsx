import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import routesPath from 'routesPath';
import { authOperations, authSelectors } from 'redux/auth';
import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { Toaster } from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
import { SpinnerContainer } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const AppMainView = lazy(() => import('../AppMainView'));
const PageNotFound = lazy(() => import('components/PageNotFound'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Suspense
        fallback={
          <SpinnerContainer>
            <FadeLoader color="rgba(77, 52, 220, 1)" />
          </SpinnerContainer>
        }
      >
        <Routes>
          <Route path={routesPath.home} element={<Header />}>
            <Route
              index
              element={
                <PublicRoute
                  redirectPath={routesPath.contacts}
                  isLoggedIn={isLoggedIn}
                >
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              element={
                <PublicRoute
                  redirectPath={routesPath.contacts}
                  isLoggedIn={isLoggedIn}
                  restricted
                />
              }
            >
              <Route path={routesPath.login} element={<LoginPage />} />
              <Route path={routesPath.register} element={<RegisterPage />} />
            </Route>

            <Route
              path={routesPath.contacts}
              element={
                <PrivateRoute
                  isLoggedIn={isLoggedIn}
                  redirectPath={routesPath.login}
                >
                  <AppMainView />
                </PrivateRoute>
              }
            />
            <Route path={routesPath.unknown} element={<PageNotFound />} />
          </Route>
        </Routes>
        <Toaster
          toastOptions={{
            error: {
              style: {
                fontWeight: 500,
                padding: '16px',
                color: '#fff',
                background: 'red',
              },
            },
            success: {
              style: {
                fontWeight: 500,
                padding: '16px',
                color: '#fff',
                background: '#5446cc',
              },
            },
          }}
        />
      </Suspense>
    </>
  );
};

export default App;
