import { toUpperCase } from "./utils/stringUtils";
import { STATIC_HELLO } from "./constants";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustumInput";
import CustomFigure from "./components/CustumFigure";
import { bootstrapButtonVariant, buttonTexts , textInputProps,figureProps } from "./constants";

const App = () => {
  return (
    <div>
    <CustomFigure
      width={figureProps.versionA.width}
      height={figureProps.versionA.height}
    />
  </div>
        
  )    

  }
export default App;