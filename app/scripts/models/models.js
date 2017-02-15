var Backbone = require('backbone');

  var ContactList = Backbone.Model.extend({
    idAttribute: '_id'
  });

  var ContactListCollection = Backbone.Collection.extend({
    model: ContactList,
    url: 'https://tiny-lasagna-server.herokuapp.com/collections/smckeon'

  });

  module.exports = {
    ContactList: ContactList,
    ContactListCollection: ContactListCollection
  };
