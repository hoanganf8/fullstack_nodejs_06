import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ImageUpload() {
  const [image, setImage] = useState({});
  const [status, setStatus] = useState("idle");
  const handleChooseImage = (e) => {
    const previewUrl = URL.createObjectURL(e.target.files[0]);
    setImage({ ...image, preview: previewUrl, fileInfo: e.target.files[0] });
  };
  const handleUploadImage = async () => {
    try {
      setStatus("pending");
      if (!image.fileInfo) {
        throw new Error("Chọn ảnh đi");
      }
      const formData = new FormData();
      formData.append("file", image.fileInfo);
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API_UPLOAD}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Đã có lỗi xảy ra");
      }
      const data = await response.json();
      setImage({ ...image, output: data.location, preview: null });
    } catch (e) {
      return toast.error(e.message);
    } finally {
      setStatus("idle");
    }
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  return (
    <div>
      <input type="file" onChange={handleChooseImage} />
      <button disabled={status === "pending"} onClick={handleUploadImage}>
        {status === "pending" ? "Uploading..." : "Upload"}
      </button>
      <hr />
      {image?.preview && <img width={200} src={image.preview} />}
      {image?.output && <img width={200} src={image.output} />}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

/*
Bài tập: 
- Chọn ảnh ==> Hiển thị preview image
- Nếu chọn ảnh khác ==> Xóa preview cũ, thay thành preview mới
- Bấm nút "Upload" ==> Up ảnh lên server (Có loading)
+ Nếu upload thành công ==> Trả về ảnh mới của server (Hiển thị dạng ảnh)
+ Nếu upload không thành công ==> Trả về thông báo lỗi
Lưu ý: Cho dù upload thành công hay không? Link preview đều phải được xóa

Observer: subscript/unsubscribe
Event: addEventListener / removeEventListener
*/
