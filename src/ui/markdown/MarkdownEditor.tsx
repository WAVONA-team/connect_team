import React from "react";
import dynamic from "next/dynamic";
import { type ContextStore } from "@uiw/react-md-editor";

type Props = {
  source: string;
  setSource: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore,
  ) => void;
  className?: string;
  withoutToolBar?: boolean;
  withDragBar?: boolean;
  placeholder?: string;
};

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MarkdownEditor: React.FC<Props> = React.memo(
  ({
    source,
    setSource,
    className = "",
    withoutToolBar = false,
    withDragBar = true,
    placeholder = "",
  }) => {
    return (
      <MDEditor
        className={`
          ${className}
          !bg-secondary-dark-purple
        `}
        value={source}
        onChange={setSource}
        preview="edit"
        hideToolbar={withoutToolBar}
        visibleDragbar={withDragBar}
        textareaProps={{
          placeholder,
        }}
      />
    );
  },
);

export default MarkdownEditor;
