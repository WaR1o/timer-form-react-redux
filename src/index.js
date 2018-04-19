import first from "./first";
import App from "./App";
import style from "./main.css";

const numbersArr = [53, 42, 121, 26];
const arrowFunc = () => console.log(...numbersArr);
window.arrowFunc = arrowFunc;
