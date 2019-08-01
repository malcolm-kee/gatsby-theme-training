import { Link } from 'gatsby';
import {
  Appbar,
  Button,
  MainContainer,
  Reset,
  Seo,
  Toolbar,
} from 'gatsby-theme-training';
import React from 'react';

export default function Homepage() {
  return (
    <div>
      <Seo />
      <Reset />
      <Appbar />
      <MainContainer>
        <div>
          Homepage in a user's site
          <Toolbar>
            <Button component={Link} variant="bubble" to="/what-is-react">
              Start
            </Button>
          </Toolbar>
        </div>
      </MainContainer>
    </div>
  );
}
