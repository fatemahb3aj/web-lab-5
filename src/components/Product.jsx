import Card from "./Card";

export default function Product(props) {
  return (
    <Card>
      <h3>{props.title}</h3>
      <p>Price: ${props.price}</p>
    </Card>
  );
}