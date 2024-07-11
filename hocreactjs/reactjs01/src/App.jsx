import React from "react";

export default function App() {
  const query = `<h1>Học JS không khó</h1>`;
  return <div dangerouslySetInnerHTML={{ __html: query }}></div>;
}
