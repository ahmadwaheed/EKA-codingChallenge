'use strict';
var bookshelf = require('./bookshelf.js');
require('./loginInfo.js');

var profileInfo = bookshelf.Model.extend({
  tableName: 'profileInfo', 
  userName_id: function() {
    return this.belongsTo('loginInfo');
  }
});

module.exports = bookshelf.model('profileInfo', profileInfo);