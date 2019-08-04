import { Link } from 'gatsby';
import Appbar from 'gatsby-theme-training/src/components/training/appbar';
import Button from 'gatsby-theme-training/src/components/training/button';
import MainContainer from 'gatsby-theme-training/src/components/training/main-container';
import Reset from 'gatsby-theme-training/src/components/training/reset';
import Seo from 'gatsby-theme-training/src/components/training/seo';
import Toolbar from 'gatsby-theme-training/src/components/training/toolbar';
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
            <Button component={Link} variant="primary" to="/what-is-react">
              Start
            </Button>
          </Toolbar>
        </div>
      </MainContainer>
    </div>
  );
}
