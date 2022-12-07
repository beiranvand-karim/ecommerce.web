import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { FilteringConfigurations } from '../../injectables';

const AlignCheckBoxAndLabel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;

  @media (max-width: 705px) {
    justify-content: center;
  }
`;

const PositionInputCheckBoxInMiddleWideScreen = styled.div`
  max-width: 1280px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const InputCheckBox = styled.input`
  margin: 0;
`;

const LabelStyled = styled.label`
  color: rgb(0, 131, 138);
  font-weight: 700;
  margin-left: 8px;
`;

export const FiltersSection = ({ filterArticlesByPriceAmount }) => {
  const { DIVIDING_PRICE_AMOUNT } = useContext(FilteringConfigurations);

  return (
    <PositionInputCheckBoxInMiddleWideScreen>
      <AlignCheckBoxAndLabel>
        <InputCheckBox
          type="checkbox"
          id="filter"
          onClick={(event) =>
            filterArticlesByPriceAmount(event.target.checked, DIVIDING_PRICE_AMOUNT)
          }
        />
        <LabelStyled htmlFor="filter">Cheaper than {DIVIDING_PRICE_AMOUNT} kr</LabelStyled>
      </AlignCheckBoxAndLabel>
    </PositionInputCheckBoxInMiddleWideScreen>
  );
};

FiltersSection.propTypes = {
  filterArticlesByPriceAmount: PropTypes.func
};
