import { CardFrutas } from "../cardFrutas";
import { DivStyled } from "./style";

export const List = ({ list, name }) => {
  return (
    <DivStyled>
      <h1>{name}</h1>
      <ul>
        {list.map((item, indes) => (
          <li key={indes}>
            <CardFrutas item={item} />
          </li>
        ))}
      </ul>
    </DivStyled>
  );
};
