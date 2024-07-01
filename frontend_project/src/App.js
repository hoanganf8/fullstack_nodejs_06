import moment from "moment";
import "./assets/style.scss";
import Header from "./Components/Header";
import config from "./config.json";
import image01 from "./assets/img/HTTP_Steps.png";
export default function App() {
  //   console.log(image01);
  console.log(process.env.APP_NAME);
  console.log(process.env.NODE_ENV);
  return `
  ${Header()}
  <h1>Học JS không khó</h1>
  <h2>Thời gian hiện tại: ${moment().format("DD/MM/YYYY hh:mm:ss")}</h2>
  <h2>Server: ${config.SERVER_API}</h2>
  <img src="${image01}"/>
  `;
}
