import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import { sv } from 'date-fns/locale';
import PropTypes from 'prop-types';

import { Truck } from '../assets/articles';

const ExpectedDeliveryDateFormatted = styled.div`
  font-style: normal;
  color: rgb(0, 131, 138);
  font-weight: 700;
  font-size: 12px;
  margin-left: 4px;
`;

const AlignDateToTruck = styled.div`
  display: flex;
  align-items: center;
`;

const capitalizeFirstLetter = (input) =>
  typeof input?.charAt(0) === 'string' ? input.charAt(0).toUpperCase() + input.substring(1) : input;

const removeLastCharacter = (input) =>
  input?.charAt(input.length - 1) === '.' ? input.substring(0, input.length - 1) : input;

export const ExpectedDeliveryDatePresentation = ({ expectedDeliveryDate }) => {
  const formattedExpectedDeliveryDate = format(parseISO(expectedDeliveryDate), 'EEEE, d MMM', {
    locale: sv
  });

  return (
    <AlignDateToTruck>
      <Truck />
      <ExpectedDeliveryDateFormatted>
        {capitalizeFirstLetter(removeLastCharacter(formattedExpectedDeliveryDate))}
      </ExpectedDeliveryDateFormatted>
    </AlignDateToTruck>
  );
};

ExpectedDeliveryDatePresentation.propTypes = {
  expectedDeliveryDate: PropTypes.string
};
