import CardType from "../types/CardType";

const Card = ({ card, clickEvent }: { card: CardType, clickEvent:Function}) => {
  return (
    <div className="card-wrapper">
    <div
    className={card.revealed ? "revealed" : "unrevealed"}
      style={{
        backgroundColor:"#00FF00",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => clickEvent(card, e.target)}
    >
      {card.revealed ? card.value : <></>}
    </div>
    </div>
  );
};

export default Card;
