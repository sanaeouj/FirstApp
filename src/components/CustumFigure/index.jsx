import Figure from 'react-bootstrap/Figure'
import { figureProps } from "../../constants";
const index = ({
  width = figureProps.default.width,
  height = figureProps.default.height,
  image = figureProps.default.image,
  image = figureProps.default.text,
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
        text={text}
      </Figure.Caption>
    </Figure>
  );
};

export default index;
