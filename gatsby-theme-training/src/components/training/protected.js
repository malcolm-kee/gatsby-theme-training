import styled from '@emotion/styled';
import React from 'react';
import { useAuthContext } from './auth';
import Button from './button';
import LockIcon from './lock-icon';
import { appbarHeight } from './styles';
import Toolbar from './toolbar';

const Container = styled.div`
  padding: ${appbarHeight};
  text-align: center;
`;

const Protected = ({ children }) => {
  const { isLoggedIn, login } = useAuthContext();

  return (
    <div>
      {isLoggedIn ? (
        children
      ) : (
        <Container>
          <LockIcon />
          <p>Login required to access the content.</p>
          <Toolbar align="center">
            <Button onClick={login}>Login</Button>
          </Toolbar>
        </Container>
      )}
    </div>
  );
};

export default Protected;
