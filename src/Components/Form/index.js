import { useState } from "react/cjs/react.development";
import { DivStyled } from "./sytle";

export const Form = ({
  frutaEntrada,
  setFrutaEntrada,
  frutaSaida,
  setFrutaSaida,
  movimentacoes,
  setMovimentacoes,
}) => {
  const [name, setName] = useState([""]);
  const [quantity, setQuantity] = useState([""]);
  const [price, setPrice] = useState([""]);

  const addFruit = (fruta) => {
    setFrutaEntrada([...frutaEntrada, fruta]);
    setMovimentacoes([...movimentacoes, fruta]);
  };
  const rmvFruit = (fruta) => {
    setFrutaSaida([...frutaSaida, fruta]);
    setMovimentacoes([...movimentacoes, fruta]);
  };

  const constroiFruta = (name, quantity, price) => {
    return { name: name, quantity: quantity, price: price };
  };

  return (
    <DivStyled>
      <input
        type="text"
        placeholder="nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="quantidade"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <input
        type="text"
        placeholder="preço"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button onClick={() => addFruit(constroiFruta(name, quantity, price))}>
        entrada
      </button>
      <button onClick={() => rmvFruit(constroiFruta(name, quantity, price))}>
        saida
      </button>
    </DivStyled>
  );
};
