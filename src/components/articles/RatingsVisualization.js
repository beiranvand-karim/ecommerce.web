import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Star } from '../../assets';

const AverageRatingValue = styled.span`
  font-size: 12px;
  margin-left: 4px;
`;

const AlignRatingValueToStars = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingsVisualization = ({ averageRating }) => {
  const roundedAverageRating = Math.round(averageRating);

  return (
    <AlignRatingValueToStars>
      <Star filled={roundedAverageRating > 0} />
      <Star filled={roundedAverageRating > 1} />
      <Star filled={roundedAverageRating > 2} />
      <Star filled={roundedAverageRating > 3} />
      <Star filled={roundedAverageRating > 4} />
      <AverageRatingValue>{averageRating}</AverageRatingValue>
    </AlignRatingValueToStars>
  );
};

RatingsVisualization.propTypes = {
  averageRating: PropTypes.number
};
