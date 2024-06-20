import React from "react";
interface FooterProps {
    name: string
}
export default function Footer2({name}: FooterProps) {
    return (
    <h1>
        Hello anh em F8: {name}
    </h1>
  )
}
