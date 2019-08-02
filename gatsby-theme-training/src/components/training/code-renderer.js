import styled from '@emotion/styled';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { transformTokens, wrapJsCode } from '../../lib/transform-code';
import EditIcon from './edit-icon';
import EyeIcon from './eye-icon';
import InlineCode from './inline-code';
import { fontFamily, space } from './styles';

const injectedGlobals = { sanitize, shallowConcat, ReactDOM, ajax };

const CodeLiveEditorWrapper = styled.div`
  padding: 0 ${space / 2}px ${space / 2}px;
  border-radius: ${space / 2}px;
  background-color: rgba(228, 224, 205, 0.5);
  line-height: 1.25rem;
`;

const CodeHeaderContainer = styled.div`
  position: relative;
`;

const CodeHeader = styled.div`
  padding: ${space}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeIcon = styled.div`
  width: 25px;
  height: 25px;
  svg {
    color: inherit;
    fill: currentColor;
  }
`;

const CodeLanguage = styled.span`
  position: absolute;
  z-index: 1;
  top: 100%;
  right: ${space * 2}px;
  text-transform: uppercase;
  line-height: 1.3;
  font-size: 0.7rem;
  background-color: #61dafb;
  padding: 0 ${space}px;
  border-radius: 0 0 ${space / 2}px ${space / 2}px;
`;

const CodeLiveError = styled(LiveError)`
  padding: ${space}px;
  margin-bottom: 0;
  background-color: #f44336;
  font-weight: bold;
`;

const CodeLivePreview = styled(LivePreview)`
  font-family: ${fontFamily};
  padding: 0 ${space}px;

  .log-output {
    width: 100%;
    overflow: auto;
    line-height: 1.75;
    &::before {
      content: '> ';
    }
  }
`;

const CodeLiveEditor = ({ code, theme, language, noInline, fileName }) => {
  return (
    <CodeLiveEditorWrapper>
      <LiveProvider
        code={code}
        scope={injectedGlobals}
        transformCode={language === 'js' ? wrapJsCode : undefined}
        theme={theme}
        language="jsx"
        noInline={noInline}
      >
        <CodeHeaderContainer>
          <CodeHeader>
            <CodeIcon>
              <EditIcon />
            </CodeIcon>
            {fileName && <span>{fileName}</span>}
            <span />
          </CodeHeader>
          <CodeLanguage>{language}</CodeLanguage>
        </CodeHeaderContainer>
        <LiveEditor />
        <CodeLiveError />
        <CodeLivePreview />
      </LiveProvider>
    </CodeLiveEditorWrapper>
  );
};

function sanitize(data) {
  return Array.isArray(data)
    ? `[${data.map(sanitize).join(',')}]`
    : data instanceof Error
    ? data.toString()
    : typeof data === 'object'
    ? JSON.stringify(data, null, 2)
    : typeof data === 'string'
    ? `"${data}"`
    : data;
}

function noop() {}

function ajax(url, options) {
  var opts = options || {};
  var onSuccess = opts.onSuccess || noop;
  var onError = opts.onError || noop;
  var dataType = opts.dataType || 'json';
  var method = opts.method || 'GET';

  var request = new XMLHttpRequest();
  request.open(method, url);
  if (dataType === 'json') {
    request.overrideMimeType('application/json');
    request.responseType = 'json';
    request.setRequestHeader('Accept', 'application/json');
  }

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      onSuccess(request.response);
    } else {
      onError(request.response);
    }
  };

  request.onerror = onError;

  request.send(opts.body);
}

function shallowConcat(targetArr, item) {
  if (!Array.isArray(targetArr)) return targetArr;

  const newArr = targetArr.slice();
  newArr.push(item);
  return newArr;
}

const codePadding = 1;
const highlightWidth = 0.25;

const CodeSnippetContainer = styled(CodeLiveEditorWrapper)`
  pre {
    font-family: monospace;
    padding: ${codePadding}rem;
    line-height: 1.25rem;
    overflow-x: auto;
  }

  .highlighted-code-line {
    background-color: #eeeeee;
    display: block;
    margin-right: -${codePadding}rem;
    margin-left: -${codePadding}rem;
    padding-right: ${codePadding}rem;
    padding-left: ${codePadding - highlightWidth}rem;
    border-left: ${highlightWidth}rem solid hsl(161, 78%, 55%);
  }
`;

function CodeSnippetComponent({
  code,
  language,
  theme,
  fileName,
  noWrapper,
  highlightedLines,
}) {
  const lineIndexesToHighlight =
    typeof highlightedLines === 'string'
      ? highlightedLines.split(',').map(num => Number(num) - 1)
      : [];

  const highlightedCode = (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {transformTokens(tokens, lineIndexesToHighlight).map(
            ({ line, isHighlighted }, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                    className: isHighlighted
                      ? 'highlighted-code-line'
                      : undefined,
                  })}
                >
                  {line.map((token, key) => {
                    return (
                      <span key={key} {...getTokenProps({ token, key })} />
                    );
                  })}
                </div>
              );
            }
          )}
        </pre>
      )}
    </Highlight>
  );

  return (
    <CodeSnippetContainer>
      {!noWrapper && (
        <CodeHeaderContainer>
          <CodeHeader>
            <CodeIcon>
              <EyeIcon />
            </CodeIcon>
            {fileName && <span>{fileName}</span>}
            <span />
          </CodeHeader>
          <CodeLanguage>{shortenLanguage(language)}</CodeLanguage>
        </CodeHeaderContainer>
      )}
      {highlightedCode}
    </CodeSnippetContainer>
  );
}

const CodeSnippet = React.memo(CodeSnippetComponent);

/**
 *
 * @param {string} language
 */
const shortenLanguage = language =>
  language && /javascript/i.test(language) ? 'js' : language;

const githubTheme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#e3116c',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#36acaa',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#00009f',
      },
    },
  ],
};

export default function CodeRenderer({
  children,
  className,
  live,
  noInline,
  noWrapper,
  fileName,
  highlightedLines,
}) {
  const language = className && className.split('-').pop();

  const code = typeof children === 'string' ? children.trim() : children;

  return live &&
    (language === 'js' || language === 'jsx' || language === 'javascript') ? (
    <CodeLiveEditor
      code={code}
      theme={githubTheme}
      language={language}
      noInline={noInline}
      fileName={fileName}
    />
  ) : language ? (
    <CodeSnippet
      code={code}
      language={language}
      theme={githubTheme}
      fileName={fileName}
      noWrapper={noWrapper}
      highlightedLines={highlightedLines}
    />
  ) : (
    <InlineCode>{children}</InlineCode>
  );
}
