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
      width={figureProps.maison.width}
      height={figureProps.maison.height}
      image={figureProps.maison.image}
      titre={figureProps.maison.titre}
    />
  <br></br> <br></br>
        <CustomFigure
        width={figureProps.defaults.width}
        height={figureProps.defaults.height}
      />
       <br></br> <br></br>
       <CustomFigure
       width={figureProps.ordinateur.width}
      height={figureProps.ordinateur.height}
      image={figureProps.ordinateur.image}
      titre={figureProps.ordinateur.titre}
      />
    </div>
  )    

  }
export default App;