import styled from '@emotion/styled';
import React from 'react';
import { space } from './styles';
import QuestionIcon from './question-icon';

const ExerciseContainer = styled.div`
  background-color: white;
  border-radius: ${space * 2}px;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12);
  padding: ${space * 2}px ${space * 2}px;
  margin: ${space * 2}px 0;
`;

const ExerciseTitle = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  padding: ${space}px;
  font-size: 1.5rem;
  background-color: #ddd;

  > svg {
    margin-right: ${space / 2}px;
  }
`;

const Exercise = ({ children }) => {
  return (
    <ExerciseContainer>
      <h3>
        <ExerciseTitle>
          <QuestionIcon />
          Exercise
        </ExerciseTitle>
      </h3>
      {children}
    </ExerciseContainer>
  );
};

export default Exercise;
