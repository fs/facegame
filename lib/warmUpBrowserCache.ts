const warmUpBrowserCache = (url: string) => {
  const removeAfter = url.indexOf('?');
  const resultString = url.substring(0, removeAfter);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();
    img.src = resultString;
  });
};

export default warmUpBrowserCache;
