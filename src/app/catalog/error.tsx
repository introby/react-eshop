"use client";

import React from "react";

type ErrorWrapperProps = {
  error: Error;
};

const ErrorWrapper: React.FC<ErrorWrapperProps> = ({ error }) => {
  return <h1>Oops!!! {error.message}</h1>;
};

export default ErrorWrapper;
