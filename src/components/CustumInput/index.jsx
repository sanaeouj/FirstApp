import Form from "react-bootstrap/Form";
import { textInputProps } from "../../constants";
const index = ({
  type = textInputProps.default.type,
  placeholder = textInputProps.default.placeholder,
}) => {
 return <Form.Control type={type} placeholder={placeholder} />;
};

export default index;
