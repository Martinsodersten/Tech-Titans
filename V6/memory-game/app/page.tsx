"use client";

import React, { useState, useEffect } from "react";
import CardType from "./types/CardType";
import Card from "./components/Card";
import CheckedCards from "./types/CheckedCards";

export default function Home() {
  const possibleValues = [
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "E",
    "E",
    "F",
    "F",
  ];
  const [cardDeck, setCardDeck] = useState<CardType[] | []>([]);
  const [checkedCards, setCheckedCards] = useState<CheckedCards>({firstCard: null, secondCard: null})

  useEffect(() => {
    const tempCardDeck: CardType[] = [];
    let index = 0;
    while (possibleValues.length > 0) {
      let card: CardType = {
        revealed: false,
        value: possibleValues.splice(
          Math.random() * possibleValues.length,
          1
        )[0],
        index: index,
      };
      tempCardDeck.push(card);
      index++;
    }
    setCardDeck(tempCardDeck);
  }, []);

  useEffect(() => {
  }, [cardDeck]);

  useEffect(() => {
    if(checkedCards.firstCard && checkedCards.secondCard) {
      if(checkedCards.firstCard.value == checkedCards.secondCard.value) console.log("Same")
        else {
          let tempDeck = cardDeck.map((tempCard) =>
            tempCard.index === checkedCards.firstCard!.index ||
            tempCard.index === checkedCards.secondCard!.index
              ? { ...tempCard, revealed: !tempCard.revealed }
              : tempCard
          );

         setTimeout(() => setCardDeck(tempDeck), 500)

      }
      setCheckedCards({firstCard: null, secondCard: null})
    }
  }, [checkedCards])

  const clickEvent = (card: CardType) => {
    if (card.revealed == false) {
      let tempDeck = [...cardDeck];
      tempDeck = tempDeck.map((tempCard) => {
        if (tempCard.index === card.index)
          tempCard.revealed = !tempCard.revealed;
        return tempCard;
      });
      setCardDeck(tempDeck);
      if(!checkedCards.firstCard) {
        console.log(card)
        const cardsToCheck: CheckedCards = {firstCard: card, secondCard: null}
        setCheckedCards(cardsToCheck)
      }
      else {
        const cardsToCheck = {...checkedCards}
        cardsToCheck.secondCard = card;
        setCheckedCards(cardsToCheck)
      }
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "min-content min-content min-content min-content",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "center",
        marginTop: "20vh",
      }}
    >
      {cardDeck.map((card) => (
        <Card key={card.index} card={card} clickEvent={clickEvent} />
      ))}
    </div>
  );
}
