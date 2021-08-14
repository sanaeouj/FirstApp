import Figure from 'react-bootstrap/Figure'
import { figureProps } from "../../constants";
const index = ({
  width = figureProps.defaults.width,
  height = figureProps.defaults.height,
  image = figureProps.defaults.image,
  titre = figureProps.defaults.titre,
}) => {
  return (
    <Figure>
      <Figure.Image
        width={width}
        height={height}
        alt="171x180"
        src={image}
      />
      <Figure.Caption>
        {titre}
      </Figure.Caption>
    </Figure>
  );
};

export default index;
