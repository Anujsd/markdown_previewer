import React, { useState } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
});

function App() {
  const [inputText, setInputText] = useState(placeholder);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <section className="markdown">
      <Editor inputText={inputText} handleChange={handleChange} />
      <Preview inputText={inputText} />
    </section>
  );
}

const Editor = ({ inputText, handleChange }) => {
  return (
    <div>
      <div className="heading">Editor</div>
      <textarea
        className="input"
        name="editor"
        id="editor"
        cols="30"
        rows="10"
        value={inputText}
        placeholder={inputText}
        onChange={handleChange}
      />
    </div>
  );
};

const Preview = ({ inputText }) => {
  return (
    <div className="box">
      <div className="heading">Preview</div>
      <div
        className="result"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(inputText),
        }}
      />
    </div>
  );
};
export default App;
