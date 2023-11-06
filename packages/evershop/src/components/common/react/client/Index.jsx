/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-import-module-exports */
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import Area from '@components/common/Area';
import { App } from '@components/common/react/client/Client';
import { HotReload } from '@components/common/react/client/HotReload';
import TagManager from 'react-gtm-module';

// eslint-disable-next-line import/no-unresolved
const hot = require('webpack-hot-middleware/client?path=/eHot&reload=true&overlay=true');

// Tag Manager Initialization
const tagManagerArgs = {
  gtmId: 'GTM-PW2DKHPW'
}

TagManager.initialize(tagManagerArgs)

/** render */
ReactDOM.render(
  <App>
    <HotReload hot={hot} />
  </App>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
