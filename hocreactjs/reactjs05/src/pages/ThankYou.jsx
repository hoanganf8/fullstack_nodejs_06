import { useLocation, useNavigate } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div>
      <h1>ThankYou</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
