import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flame } from '../../assets';

const SoldTodayValueAndDescribingText = styled.span`
  font-size: 12px;
  color: rgb(64, 64, 64);
  font-weight: 700;
`;

const AlignSoldTodayTextToFlameIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const SoldTodayVisualization = ({ soldToday }) => {
  return (
    <AlignSoldTodayTextToFlameIcon>
      <Flame />
      <SoldTodayValueAndDescribingText>{soldToday} sålda idag</SoldTodayValueAndDescribingText>
    </AlignSoldTodayTextToFlameIcon>
  );
};

SoldTodayVisualization.propTypes = {
  soldToday: PropTypes.number
};
