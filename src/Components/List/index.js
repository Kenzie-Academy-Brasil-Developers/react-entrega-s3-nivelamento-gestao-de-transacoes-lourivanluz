import { CardFrutas } from "../cardFrutas";
import { DivStyled } from "./style";

export const List = ({ list, name }) => {
  return (
    <DivStyled>
      <h1>{name}</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <CardFrutas item={item} />
          </li>
        ))}
      </ul>
    </DivStyled>
  );
};
