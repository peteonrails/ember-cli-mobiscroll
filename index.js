/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mobiscroll',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/mobiscroll/js/mobiscroll.appframework.js');
    app.import(app.bowerDirectory + '/mobiscroll/js/mobiscroll.core.js');
    app.import(app.bowerDirectory + '/mobiscroll/js/mobiscroll.datetime.js');
    app.import(app.bowerDirectory + '/mobiscroll/js/mobiscroll.datetimebase.js');
    app.import(app.bowerDirectory + '/mobiscroll/js/mobiscroll.scroller.js');
    app.import(app.bowerDirectory + '/mobiscroll/css/mobiscroll.appframework.css');
    app.import(app.bowerDirectory + '/mobiscroll/css/mobiscroll.core.css');
    app.import(app.bowerDirectory + '/mobiscroll/css/mobiscroll.datetime.css');
    app.import(app.bowerDirectory + '/mobiscroll/css/mobiscroll.datetimebase.css');
    app.import(app.bowerDirectory + '/mobiscroll/css/mobiscroll.scroller.css');
  },
};
