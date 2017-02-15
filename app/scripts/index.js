var $ = require('jquery');

// REQUIRE MODELS AND VIEWS
var models = require('./models/models.js');
var views = require('./views/views.js');


// DOM READY
  $(function(){

    var contactListCollection = new models.ContactListCollection();
    // create an instance of ContactForm
    var contactForm = new views.ContactForm({collection: contactListCollection});

    var listView = new views.ListView({collection: contactListCollection});

    // append contactForm to DOM
    $('.contact-input').append(contactForm.render().$el);
    $('.contact-input').append(listView.render().$el);





  });
