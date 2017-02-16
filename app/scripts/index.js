// Requiring in jQ to assist with the process of creating new instances and appending items.
var $ = require('jquery');

// Requiring in the models and views in the controller to further modify
// because all exported items have been called in at once, we can use models.XX and views.XX
// to call on the constructors
var models = require('./models/models.js');
var views = require('./views/views.js');


// DOM READY -- DOM has been loaded and is ready for code to be executed.
  $(function(){
    // creating a child of ContactListCollection
    var contactListCollection = new models.ContactListCollection();
    // create an instance of ContactForm calling on the collection for data
    var contactForm = new views.ContactForm({collection: contactListCollection});
    // creating an instance of the ListView to gather data from the collection to append
    var listView = new views.ListView({collection: contactListCollection});

    // append contactForm to DOM
    $('.contact-input').append(contactForm.render().$el);
    $('.contact-input').append(listView.render().$el);





  });
