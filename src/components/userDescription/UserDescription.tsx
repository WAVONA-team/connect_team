'use client'
import React from "react";
import MarkdownViewer from "@/ui/markdown/MarkdownViewer";

type Props = {
  description: string
};

const UserDescription: React.FC<Props> = React.memo(({ description }) => (
  <MarkdownViewer source={description}/>
));

export default UserDescription;
