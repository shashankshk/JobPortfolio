/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => {
      return (
        <div className='blog-code-block'>
          <SyntaxHighlighter
            language='javascript'
            style={obsidian}
            showLineNumbers
            className='blog-code-block'
          >
            {text}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length === 1 && node.content[0].marks.find((x) => x.type === 'code')) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields;
      const imageUrl = file['en-US'].url;
      const alt = title['en-US'];
      return <img src={imageUrl} alt={alt} />;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return <a href={node.data.uri}>{children}</a>;
    },
  },
};

const ContentfulRichText = ({ document }) => (
  <div className='contentful-rich-text'>{documentToReactComponents(document, options)}</div>
);

ContentfulRichText.propTypes = {
  document: PropTypes.object,
};

export default ContentfulRichText;
