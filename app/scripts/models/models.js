// Loading in Backbone to create the models and collections.
var Backbone = require('backbone');
  // Creating a model constructor for our collection to grab from.
  var ContactList = Backbone.Model.extend({
    // Because the tiny lasagna server does not grab objects by 'id', we need to
    //modify the attribute to the given server configuration - as _id
    idAttribute: '_id'
  });
  //Creating a collection to gather information in the form of object lists. extend allows the user //to pass raw properties and classProperties to the collection constructor.
  var ContactListCollection = Backbone.Collection.extend({
    // model allows us the access the ContactList model constructor.
    model: ContactList,
    // the url is where we will fetch, add, remove, sync, get, etc from the collection and server
    url: 'https://tiny-lasagna-server.herokuapp.com/collections/smckeon'

  });
  //module.exports gives us the ability to take the created constructors from the models page
  // and interact with them within the views and controller pages.
  module.exports = {
    ContactList: ContactList,
    ContactListCollection: ContactListCollection
  };
