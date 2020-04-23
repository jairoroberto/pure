import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CodeBlock from './CodeBlock';
import { html } from 'js-beautify';

function Example({ children }) {
    const opts = { inline: 'b' };
    const markup = html(ReactDOMServer.renderToStaticMarkup(children), opts);
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: markup }} />
            <CodeBlock>{markup}</CodeBlock>
        </>
    );
}

export default Example;
