import React from 'react';
import { li, toc, ul } from './lesson-toc.module.scss';

const LessonToc = ({ items }) => {
  return Array.isArray(items) && items.length > 0 ? (
    <div className={toc}>
      <ul className={ul}>
        {items.map(item => (
          <li className={li} key={item.url}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default LessonToc;
