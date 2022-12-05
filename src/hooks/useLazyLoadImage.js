import { useState } from 'react';

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = url;
    img.onload = () => resolve();
    img.onerror = () => {
      reject(new Error('failed to load the image'));
    };
  });
};

export const useLazyLoadImage = () => {
  const [resolutionSuccessful, setResolutionSuccessful] = useState(null);

  const load = async (url) => {
    try {
      await loadImage(url);
      setResolutionSuccessful(true);
    } catch (e) {
      /**
       * Images fails to load, log them to sentry, kibana ...
       * for example:
       * log({type: 'error', message: 'failed to load the image', data: {url})
       */
      setResolutionSuccessful(false);
    }
  };

  return [load, { setResolutionSuccessful, resolutionSuccessful }];
};
