import Figure from "react-bootstrap/Figure";
import { figureProps } from "../../constants";
const index = (props) => {
  const { width, height, image, titre } = props;
  return (
    <Figure>
      <Figure.Image
        width={width}
        height={height}
        alt={`${width}x${height}`}
        src={image}
      />
      <Figure.Caption>{titre}</Figure.Caption>
    </Figure>
  );
};
index.defaultsProps = {
  ... figureProps.defaults
 };
export default index;
