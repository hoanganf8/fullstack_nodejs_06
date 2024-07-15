import { useState } from "react";
import students from "../db.json";
import { useTransition } from "react";
import { withColor } from "../utils/withColor";
const Students = withColor(function Students() {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleHighlight = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Từ khóa..."
          onChange={handleHighlight}
        />
      </div>
      <h2>Danh sách sinh viên</h2>
      {isPending && <h3>Loading...</h3>}
      {students.map((student) => {
        let title = <h3>{student.fullName}</h3>;
        if (
          keyword &&
          student.fullName
            .toLowerCase()
            .indexOf(keyword.toLocaleLowerCase()) !== -1
        ) {
          const pos = student.fullName
            .toLowerCase()
            .indexOf(keyword.toLocaleLowerCase());
          title = (
            <h3>
              {student.fullName.slice(0, pos)}
              <span style={{ backgroundColor: "yellow" }}>
                {student.fullName.slice(pos, pos + keyword.length)}
              </span>
              {student.fullName.slice(pos + keyword.length)}
            </h3>
          );
        }
        return <div key={student.id}>{title}</div>;
      })}
    </div>
  );
});
export default Students;
