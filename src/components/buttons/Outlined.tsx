import React from "react";

type OutlinedButtonParams = {
  title: string;
  className?: string;
};

const OutlinedButton = ({ title, className }: OutlinedButtonParams) => {
  return (
    <a
      href="mailto:navneetkumar2019s@gmail.com"
      className={`ml-auto w-fit border px-6 py-3 transition-colors hover:border-secondary hover:text-secondary ${className}`}
    >
      {title}
    </a>
  );
};

export default OutlinedButton;
