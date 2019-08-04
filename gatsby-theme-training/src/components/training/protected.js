import styled from '@emotion/styled';
import React from 'react';
import { useAuthContext } from './auth';
import Button from './button';
import LockIcon from './lock-icon';
import { appbarHeight } from './styles';
import Toolbar from './toolbar';

const Container = styled.div`
  padding: ${appbarHeight};
`;

const Content = styled.div`
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

// eslint-disable-next-line no-undef
const isLocal = process.env.NODE_ENV === 'development';

const Protected = ({ children }) => {
  const { isLoggedIn, login } = useAuthContext();

  return (
    <div>
      {isLoggedIn || isLocal ? (
        children
      ) : (
        <Container>
          <Content>
            <LockIcon />
            <p>Login required to access the content.</p>
            <Toolbar align="center">
              <Button variant="bubble" onClick={login}>
                Login
              </Button>
            </Toolbar>
          </Content>
        </Container>
      )}
    </div>
  );
};

export default Protected;
