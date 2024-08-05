"use client";
import styled from "styled-components";

export default function DemoClient({ children }) {
  console.log("DemoClient");
  const Title = styled.h1`
    color: red;
    font-size: 50px;
    font-style: italic;
  `;
  return (
    <div>
      <Title>DemoClient</Title>
      {children}
    </div>
  );
}
