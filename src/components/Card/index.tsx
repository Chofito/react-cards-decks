import { useState } from 'react';
import { PanInfo, motion } from 'framer-motion';
import styled from 'styled-components';

// Material Dark Card
const CardContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: grab;
  height: 430px;
  width: 300px;
  background: #282c34;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
`;

const Card: React.FC<any> = ({ card, removeCard, lock }) => {
  const [leaveX, setLeaveX] = useState(0);
  const [leaveY, setLeaveY] = useState(0);

  const onDragEnd = (_e: any, info: PanInfo) => {
    if (info.offset.y < -100) {
      setLeaveY(-2000);
      removeCard(card, 'superlike');
      return;
    }

    if (info.offset.y > 100) {
      setLeaveY(2000);
      removeCard(card, 'superlike');
      return;
    }

    if (info.offset.x > 100) {
      setLeaveX(1000);
      removeCard(card, 'like');
    }

    if (info.offset.x < -100) {
      setLeaveX(-1000);
      removeCard(card, 'nope');
    }
  };

  return (
    <CardContainer
      drag={lock}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={onDragEnd}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: 1.05,
        rotate: `${card.name.length % 2 === 0 ? 6 : -6}deg`,
      }}
      exit={{
        x: leaveX,
        y: leaveY,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
    >
      <Emoji label={card.name} emoji={card.emoji} />
      <Title title={card.name} color={card.color} />
      <button>Hola</button>
    </CardContainer>
  );
};

/**
 * a11y friendly component for emojis
 * @reference https://devyarns.com/accessible-emojis
 */
const Emoji: React.FC<{ emoji: string; label: string }> = ({
  emoji,
  label,
}) => {
  return (
    <span role="img" aria-label={label}>
      {emoji}
    </span>
  );
};

const Title: React.FC<{ title: string; color: string }> = ({
  title,
  color,
}) => {
  return <span style={{ color }}>{title}</span>;
};

export default Card;
