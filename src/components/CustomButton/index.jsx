import Button from "react-bootstrap/Button";
import { buttonTexts } from "../../constants"; 


const index = ({ color, text = buttonTexts.success }) => {
  return <Button variant={color}>{text}</Button>;
};


