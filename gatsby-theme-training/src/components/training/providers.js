import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { AuthProvider } from './auth';
import CodeRenderer from './code-renderer';
import InlineCode from './inline-code';
import Link from './link';

const mdxComponents = {
  code: CodeRenderer,
  inlineCode: InlineCode,
  a: Link,
};

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </AuthProvider>
  );
};

export default Providers;