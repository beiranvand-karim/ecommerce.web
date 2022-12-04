import PropTypes, { arrayOf, shape } from 'prop-types';

export const articleType = PropTypes.shape({
  articleId: PropTypes.string,
  articleUrl: PropTypes.string,
  images: arrayOf(
    shape({
      cloudinaryId: PropTypes.string,
      url: PropTypes.string
    })
  ),
  oldPrice: shape({
    formatted: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
  }),
  price: shape({
    formatted: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
  }),
  productId: PropTypes.string,
  shippingTimeMax: PropTypes.string,
  shippingTimeMin: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  averageRating: PropTypes.string,
  expectedDeliveryDate: PropTypes.string
});
