import styled from '@emotion/styled';
import { appbarHeight, mobileWidth } from './styles';

const MainContainer = styled.div`
  margin-top: ${appbarHeight};
  @media screen and (min-width: ${mobileWidth}) {
    display: grid;
    grid-template-columns: 1fr 230px;
  }
`;

export default MainContainer;
