"use client";

import React from "react";

// You can pass additional MDX components via props if needed later
export default function MDXRenderer({
  Component,
}: {
  Component: React.ComponentType;
}) {
  return <Component />;
}
