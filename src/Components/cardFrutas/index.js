export const CardFrutas = ({ item }) => {
  return (
    <>
      <span>{`nome: ${item.name}`}</span>
      <span>{`quantidade:${item.quantity}`}</span>
      <span>{`preço:${item.price}`}</span>
    </>
  );
};
