import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Appbar from '../components/training/appbar';
import MainContainer from '../components/training/main-container';
import Reset from '../components/training/reset';
import Toolbar from '../components/training/toolbar';

const Container = styled(MainContainer)`
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 8px;
    color: #555;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Reset />
      <Appbar />
      <Container>
        <h1>Page Not Found</h1>
        <p>Sad... I am sorry.</p>
        <Toolbar align="center">
          <Link to="/">Home</Link>
        </Toolbar>
      </Container>
    </>
  );
};

export default NotFoundPage;
