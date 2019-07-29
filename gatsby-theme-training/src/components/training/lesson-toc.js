import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  line-height: 1.3;
`;

const List = styled.ul`
  margin: 0 0 0 1.75rem;
  padding: 0;
  list-style-position: outside;
`;

const Item = styled.li`
  margin-bottom: 0.8rem;
`;

const LessonToc = ({ items }) => {
  return Array.isArray(items) && items.length > 0 ? (
    <Wrapper>
      <List>
        {items.map(item => (
          <Item key={item.url}>
            <a href={item.url}>{item.title}</a>
          </Item>
        ))}
      </List>
    </Wrapper>
  ) : null;
};

export default LessonToc;
