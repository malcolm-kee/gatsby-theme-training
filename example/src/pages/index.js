import { graphql, Link, useStaticQuery } from 'gatsby';
import {
  Appbar,
  Button,
  MainContainer,
  Reset,
  Toolbar,
} from 'gatsby-theme-training';
import React from 'react';

export default function Homepage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Reset />
      <Appbar>{data.site.siteMetadata.title}</Appbar>
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
