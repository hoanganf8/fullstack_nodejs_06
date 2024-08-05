export const metadata = {
  title: "Trang chủ - F8",
  description: "Học lập trình không khó",
  keywords: "html-css,js,reactjs",
  openGraph: {
    title: "Trang chủ - F8 111",
    description: "Học lập trình không khó 111",
    images: ["https://f8.edu.vn/img/logo.png"],
  },
};
import Image from "next/image";
import DemoClient from "@/components/DemoClient";
import image01 from "@/images/5ce5d73fb2f7323808.jpg";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Ok chưa?</h1>
      <DemoClient />
      {/* <Image src={image01} alt="Ảnh 1" width={300} height={200} /> */}
      <Image
        src="https://cdnphoto.dantri.com.vn/l4EmQ7uXFyUJiNhveGQT5V-YlyU=/zoom/1032_688/2024/08/04/thumb-1722782773250.jpg"
        width={400}
        height={300}
        alt="Anh"
      />
    </div>
  );
}
