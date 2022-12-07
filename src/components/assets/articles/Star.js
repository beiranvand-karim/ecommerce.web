import PropTypes from 'prop-types';

export const Star = ({ filled }) => {
  const fill = filled ? 'hsla(43, 100%, 66%, 1)' : 'hsla(0, 0%, 94%, 1)';

  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className="sc-ksBlkl lkQPWj"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} d="m6 6 2-4 2 4 4 .333L11.333 10 12 14l-4-2-4 2 .667-4L2 6.333 6 6Z"></path>
    </svg>
  );
};

Star.propTypes = {
  filled: PropTypes.bool
};
