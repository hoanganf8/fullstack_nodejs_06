import { useRef } from "react";

const data = ["Checkbox 01", "Checkbox 02", "Checkbox 03", "Checkbox 04"];
export default function App() {
  const checkboxListRef = useRef([]);
  const countChecked = useRef(0);
  const checkAllRef = useRef();
  const handleCheckAll = (e) => {
    checkboxListRef.current.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
    });
    if (e.target.checked) {
      countChecked.current = data.length;
    } else {
      countChecked.current = 0;
    }
  };
  const pushCheckboxRef = (element) => {
    if (checkboxListRef.current.length < data.length) {
      checkboxListRef.current.push(element);
    }
  };
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      countChecked.current++;
    } else {
      countChecked.current--;
    }
    checkAllRef.current.checked = countChecked.current === data.length;
  };
  return (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={handleCheckAll} ref={checkAllRef} />{" "}
          Check All
        </label>
      </div>
      <hr />
      {data.map((item, index) => {
        return (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                ref={pushCheckboxRef}
                onChange={handleCheckbox}
              />
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
}
