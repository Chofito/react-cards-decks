import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import Menu from '../Menu';
import Card from '../Card';
import useAppStore from '../../store/useAppStore';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgb(95, 0, 204), rgb(54, 0, 204));
  background-color: initial;
  background: linear-gradient(180deg, #70f, #40f);
  overflow: hidden;
`;

const Container2 = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const Footer = styled.div`
  align-items: center;
  display: flex;
  bottom: 1rem;
  position: absolute;
`;

const Home: any = () => {
  const {
    cards,
    setCards,
    history,
    setHistory,
  } = useAppStore();
  const [result, setResult] = useState<any>({
    like: 0,
    nope: 0,
    superlike: 0,
  });
  // index of last card
  const removeCard = (oldCard: any, direction: any) => {
    setHistory([...history, { ...oldCard, direction }]);

    setCards(cards.filter((card: any) => {
      return card.id !== oldCard.id;
    }));
    
    setResult({ ...result, [direction]: result[direction] + 1 });
  };

  const undoSwipe = () => {
    // get last card from history
    const newCard = history[history.length - 1];

    if (newCard) {
      const { direction } = newCard;

      setHistory(history.filter((card: any) => {
        return card.id !== newCard.id;
      }));

      setResult({
        ...result,
        [direction]: result[direction] - 1,
      });

      setCards([...cards, newCard]);
    }
  };

  return (
    <Container>
      <AnimatePresence>
        {cards.map((card: any, index: any) => (
          <Card
            key={card.name}
            lock={index === cards.length - 1}
            removeCard={removeCard}
            card={card}
          />
        ))}
      </AnimatePresence>
      {cards.length === 0 ? <span>End of Stack</span> : null}
      <Footer>
        <Container2>
          <button
            disabled={history.length === 0}
            className="w-14 h-14 rounded-full text-black bg-white inline-flex justify-center items-center disabled:cursor-not-allowed"
            onClick={undoSwipe}
            data-testid="undo-btn"
            aria-label="Undo Swipe"
          >
            UNDO
          </button>
          <span className="text-xs text-white">Undo</span>
        </Container2>
        <Menu label="Likes" count={result.like} testid="like-count" />
        <Menu label="Nopes" count={result.nope} testid="nope-count" />
        <Menu
          label="Superlike"
          count={result.superlike}
          testid="superlike-count"
        />
      </Footer>
    </Container>
  );
};

export default Home;
