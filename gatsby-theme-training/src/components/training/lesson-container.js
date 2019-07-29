import styled from '@emotion/styled';
import { space } from './styles';

const LessonContainer = styled.div`
  color: rgba(0, 0, 0, 0.87);
  padding: ${space * 4}px;

  h1 {
    color: rgba(0, 0, 0, 0.54);
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 1rem 0 2rem;
  }

  p,
  li {
    font-weight: 400;
    line-height: 1.6em;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export default LessonContainer;
