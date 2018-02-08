'use strict';
var bookshelf = require('./bookshelf');
require('./profileInfo.js');

var loginInfo = bookshelf.Model.extend({
  tableName: 'loginInfo',
  userName_id: function() {
    return this.hasOne('profileInfo');
  }
});

module.exports = bookshelf.model('loginInfo', loginInfo);

