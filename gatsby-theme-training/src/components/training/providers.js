import React from 'react';
import { AuthProvider } from './auth';
import { MDXProvider } from '@mdx-js/react';
import CodeRenderer from './code-renderer';
import InlineCode from './inline-code';

const mdxComponents = {
  code: CodeRenderer,
  inlineCode: InlineCode,
};

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </AuthProvider>
  );
};

export default Providers;
