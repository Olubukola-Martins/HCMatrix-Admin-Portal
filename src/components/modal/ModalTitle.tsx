import React from "react";

const ModalTitle: React.FC<{ text: string }> = ({ text }) => {
  return <span className="font-bold text-xl">{text}</span>;
};

export default ModalTitle;
