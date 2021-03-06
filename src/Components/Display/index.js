import { useState } from "react";
import { Form } from "../Form";
import { List } from "../List";

export const Display = () => {
  const [frutaEntrada, setFrutaEntrada] = useState([]);
  const [frutaSaida, setFrutaSaida] = useState([]);
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [showEntrada, setShowEntrada] = useState(false);

  const totalFrutaEntrada = frutaEntrada.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const totalFrutaSaida = frutaSaida.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div>
      {showEntrada && (
        <p>Valor total das frutas de entrada : {totalFrutaEntrada}</p>
      )}
      {!showEntrada && (
        <p>Valor total das frutas de saida : {totalFrutaSaida}</p>
      )}

      <Form
        frutaEntrada={frutaEntrada}
        setFrutaEntrada={setFrutaEntrada}
        frutaSaida={frutaSaida}
        setFrutaSaida={setFrutaSaida}
        movimentacoes={movimentacoes}
        setMovimentacoes={setMovimentacoes}
      />

      <button onClick={() => setShowEntrada(!showEntrada)}>
        {!showEntrada ? `mostrar entrada` : `mostrar saida`}
      </button>
      {showEntrada ? (
        <List list={frutaEntrada} name={"Frutas de entrada"} />
      ) : (
        <List list={frutaSaida} name={"Frutas de saida"} />
      )}
      <List list={movimentacoes} name={"Todas movimentaçoes"} />
    </div>
  );
};
