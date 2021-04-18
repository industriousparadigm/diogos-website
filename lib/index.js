import config from 'config';

export const unslugify = (slug) => {
  const result = slug.replace(/\-/g, ' ');
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const capitalize = (str) =>
  typeof str === 'string'
    ? str.charAt(0).toUpperCase().concat(str.slice(1))
    : '';

export const getPageName = (router) =>
  config.menuItems.find(
    (menuItem) => router.pathname.split('/')[1] === menuItem.path.split('/')[1]
  )?.name || '';
