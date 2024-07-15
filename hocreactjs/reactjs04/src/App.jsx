import { lazy, Suspense } from "react";
const Students = lazy(() => import("./components/Students"));
export default function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Students />
    </Suspense>
  );
}

//Tự viết HOC (Higher Order Component)
