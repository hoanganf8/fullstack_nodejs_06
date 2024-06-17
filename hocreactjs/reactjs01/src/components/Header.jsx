/* eslint-disable react/prop-types */
export default function Header({
  title,
  name,
  email,
  age,
  onChange,
  children,
}) {
  console.log(name, email, age);

  return (
    <div>
      <h2>{title}</h2>
      <input type="text" placeholder="Nhập từ khóa..." onChange={onChange} />
      {children}
    </div>
  );
}

//props là 1 object dùng để truyền dữ liệu từ component cha xuống component con
//props chỉ truyền xuống, và không thể thay đổi
//Render Props
/*
const a = () => {}
const b = a;
const c = b;
c();    
*/
