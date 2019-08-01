import styled from '@emotion/styled';
import { space } from './styles';

const LessonContent = styled.article`
  /* temp fix based on https://github.com/gatsbyjs/gatsby/issues/15486
  watching that issue for proper fix */
  .gatsby-resp-image-image {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }

  > h2 {
    border-bottom: 1px solid #bbbbbb;
    line-height: 2;
    font-weight: 700;
    font-size: 1.6rem;
    margin-top: 1em;
    margin-bottom: 0.5rem;
  }

  > h3,
  > h4,
  > h5 {
    margin-top: 2rem;
  }

  > p {
    margin-top: 2em;
    text-align: justify;
  }

  ol,
  ul {
    margin: 1em 0;
    padding-left: 30px;
  }

  li {
    margin-bottom: 0.5em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    &[id]:before {
      display: block;
      content: ' ';
      margin-top: -60px;
      height: 60px;
      visibility: hidden;
    }
  }

  aside {
    font-style: italic;
    padding: 0 ${space}px;
    border: 1px solid;
    border-radius: 4px;
    margin: ${space * 2}px -${space}px ${space * 2}px;
    break-inside: avoid;
    color: $text-color-pale;
    border-color: currentColor;

    > p {
      color: inherit;
      &:first-of-type {
        margin-top: 0.5em;
      }
      &:last-child {
        margin-bottom: 0.5em;
      }
    }
  }

  .pre-responsive-table + table {
    @media (max-width: 450px) {
      thead {
        display: none;
      }
      tr {
        display: flex;
        flex-flow: column;
        margin-bottom: ${space}px;

        > td:first-of-type {
          border-bottom: none;
        }

        &:first-of-type {
          > td:first-of-type {
            border-top-color: hsla(0, 0%, 0%, 0.12);
            border-top-style: solid;
            border-top-width: 1px;
          }
        }
      }
    }
  }

  details {
    padding: 0 ${space}px ${space * 2}px;
    > summary {
      cursor: pointer;
    }

    p {
      margin-top: ${space}px;
    }
  }
`;

export default LessonContent;
