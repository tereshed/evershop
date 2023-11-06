const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const {
  setContextValue
} = require('../../../../graphql/services/contextHelper');
const { getSetting } = require('../../../../setting/services/setting');

module.exports = async (request, response, delegate, next) => {
  setContextValue(request, 'pageInfo', {
    title: await getSetting('storeName', 'EverShop'),
    description: await getSetting(
      'storeDescription',
      'My Test'
    ),
    url: buildUrl('homepage')
  });

  next();
};
