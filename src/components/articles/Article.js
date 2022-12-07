import styled from 'styled-components';
import { useEffect } from 'react';

import { ExpectedDeliveryDatePresentation } from './ExpectedDeliveryDatePresentation';
import { PriceAndAddToCartButton } from './PriceAndAddToCartButton';
import { SoldTodayVisualization } from './SoldTodayVisualization';
import { RatingsVisualization } from './RatingsVisualization';
import { grayPlaceholderImage } from '../../assets';
import { useLazyLoadImage } from '../../hooks';
import { articleType } from '../../types';

const CreateGridGapBetweenArticles = styled.div`
  padding: 8px;

  @media (min-width: 0px) {
    width: 50%;
  }

  @media (min-width: 769px) {
    width: 33.333%;
  }

  @media (min-width: 1049px) {
    width: 25%;
  }

  @media (min-width: 1280px) {
    width: 20%;
  }
`;

const ArticleCrust = styled.div`
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 8%) 0 2px 4px;
  transition: all 0.3s ease-in-out 0s;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const VisualizedTextualInformationBox = styled.div`
  padding: 0 8px 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 4px;
  flex-grow: 1;
`;

const StackInnerElementsWithGap = styled.div`
  display: grid;
  row-gap: 4px;
  align-content: space-between;
  margin-top: auto;
`;

const ArticleCoverImage = styled.img`
  max-width: 240px;
  max-height: 240px;
  object-fit: cover;
`;

export const Article = ({ article }) => {
  const { averageRating, expectedDeliveryDate, price, title } = article;
  const formattedPrice = price.formatted;
  const [loadImage, { resolutionSuccessful }] = useLazyLoadImage();

  // this is hard coded because the article does not return sold today value from the API
  const soldToday = 12;

  useEffect(() => {
    loadImage(article.images[0].url);
  }, []);

  return (
    <>
      {typeof resolutionSuccessful === 'boolean' && (
        <CreateGridGapBetweenArticles>
          <ArticleCrust>
            <ArticleCoverImage
              src={resolutionSuccessful ? article.images[0].url : grayPlaceholderImage}
              alt={title}
            />
            <VisualizedTextualInformationBox>
              {formattedPrice && <PriceAndAddToCartButton formattedPrice={formattedPrice} />}
              {title && <TitleText>{title}</TitleText>}
              <StackInnerElementsWithGap>
                {averageRating && <RatingsVisualization averageRating={averageRating} />}
                {soldToday && <SoldTodayVisualization soldToday={12} />}
                {expectedDeliveryDate && (
                  <ExpectedDeliveryDatePresentation expectedDeliveryDate={expectedDeliveryDate} />
                )}
              </StackInnerElementsWithGap>
            </VisualizedTextualInformationBox>
          </ArticleCrust>
        </CreateGridGapBetweenArticles>
      )}
    </>
  );
};

Article.propTypes = {
  article: articleType
};
