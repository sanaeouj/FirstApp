import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustumInput";
import CustomFigure from "./components/CustumFigure";
import {
  bootstrapButtonVariant,
  buttonTexts,
  textInputProps,
  figureProps,
} from "./constants";

const App = () => {
  return (
    <div>
      <CustomFigure
        {...figureProps.maison}
      />
      <br></br> <br></br>
      <CustomFigure
        
      />
      <br></br> <br></br>
      <CustomFigure {...figureProps.ordinateur} />
    </div>
  );
};
export default App;
