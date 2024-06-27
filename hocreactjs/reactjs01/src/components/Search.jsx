import { forwardRef, useRef, useImperativeHandle } from "react";
export default forwardRef(function Search(_, ref) {
  const inputRef = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        get placholder() {
          return inputRef.current.placeholder;
        },
        set placeholder(value) {
          inputRef.current.placeholder = value;
        },
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );
  return (
    <div>
      <input type="search" placeholder="Search..." ref={inputRef} />
    </div>
  );
});
