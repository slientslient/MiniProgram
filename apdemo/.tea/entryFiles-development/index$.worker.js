require('./config$');

function success() {
require('../..//app');
require('../../node_modules/mini-antui/es/tabs/index');
require('../../node_modules/mini-antui/es/tabs/tab-content/index');
require('../../pages/index/index');
require('../../pages/tab/tab');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
