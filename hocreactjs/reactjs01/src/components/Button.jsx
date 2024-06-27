import { forwardRef } from "react";

const Button = forwardRef(function Button(_, ref) {
  return (
    <div>
      <button ref={ref}>Click me</button>
    </div>
  );
});

export default Button;

// forwardRef: Higher Order Component (HOC)
