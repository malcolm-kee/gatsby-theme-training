import styled from '@emotion/styled';
import { space } from './styles';

const Toolbar = styled.div`
  margin: ${space * 3}px 0;
  min-height: 56px;
  display: flex;
  align-items: center;
  padding: 0 ${space}px;
  justify-content: flex-end;
`;

export default Toolbar;
