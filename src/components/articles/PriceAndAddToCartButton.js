import styled from 'styled-components';
import PropTypes from 'prop-types';

import { AddToBag } from '../../assets';

const FormattedPrice = styled.span`
  font-style: normal;
  font-size: 28px;
  font-weight: 800;
  color: rgb(255, 87, 118);
`;

const CircleAroundTheBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  border: 2px solid rgb(0, 131, 138);
`;

const PriceAndBagAligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  margin-top: 8px;
`;

export const PriceAndAddToCartButton = ({ formattedPrice }) => {
  return (
    <PriceAndBagAligner>
      <FormattedPrice>{formattedPrice}</FormattedPrice>
      <CircleAroundTheBag>
        <AddToBag />
      </CircleAroundTheBag>
    </PriceAndBagAligner>
  );
};

PriceAndAddToCartButton.propTypes = {
  formattedPrice: PropTypes.string
};
