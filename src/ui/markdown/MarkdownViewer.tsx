import React from "react";
import MDEditor from "@uiw/react-md-editor";

type Props = {
  source: string;
  className?: string;
};

const MarkdownViewer: React.FC<Props> = React.memo(
  ({ source, className = "" }) => {
    return (
      <MDEditor.Markdown
        className={`
          ${className}
          !bg-secondary-dark-purple
        `}
        source={source}
      />
    );
  },
);

export default MarkdownViewer;
