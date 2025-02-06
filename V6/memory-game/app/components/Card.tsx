import CardType from "../types/CardType";

const Card = ({ card, clickEvent }: { card: CardType, clickEvent:Function}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => clickEvent(card)}
    >
      {card.revealed ? card.value : <></>}
    </div>
  );
};

export default Card;
