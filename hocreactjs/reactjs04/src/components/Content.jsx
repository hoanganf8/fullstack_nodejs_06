import { memo } from "react";
const Content = memo(function Content() {
  console.log("Content render");
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci
      maxime, a facilis provident tenetur rerum quam maiores hic assumenda
      excepturi omnis sed beatae distinctio aperiam vero ea minus quidem?
    </div>
  );
});

export default Content;

//HOC React.memo
