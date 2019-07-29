import styled from '@emotion/styled';
import { space } from './styles';

const LessonContent = styled.article`
  > h2 {
    border-bottom: 1px solid;
    border-bottom-color: inherit;
    line-height: 2;
    font-weight: 700;
    font-size: 1.6rem;
    margin-top: 1em;
    margin-bottom: 0.5rem;
    line-height: 2;
  }

  > p {
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
