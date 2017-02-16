var $ = require('jquery');
var Backbone = require('backbone');

// calling in the created Handlebars templates
var contactForm = require('../../templates/contact_list_form.hbs');
var contactItem = require('../../templates/list_item.hbs');


// View constructor created to intercept the handelbars data and
// append it to the page
var ContactForm = Backbone.View.extend({
  // create a form element <form></form> to encase the handlebars input template
  tagName: 'form',
  // set this element's template
  template: contactForm,
  // our way of adding event handlers/listeners and then directing to the function
  events: {
    // on click of the form-submit button, we will initiate the createContact function
    "click .form-submit": 'createContact'
  },
  //backbone constructor function - event parameter dealing with preventDefault
  createContact: function(event){
    // prevent the default behavior of the browser when the function is invoked
    event.preventDefault();
    // formData is holding the objects entered into the form
    var formData = this.$el.serializeObject();
    console.log(formData);
    // when the submit button is clicked, send the formData to the instance collection
    //if the url is setup to accept incoming data, it will trigger an immediate 'add',
    // request, and sync
    this.collection.create(formData);
  },
  // this.collection.create();

  render: function(){
    // fill this element's html with the template
    this.$el.html(this.template());
    // always return this
    return this;
  },

});

//creating a new view to handle the ul we need to place into the DOM
var ListView = Backbone.View.extend({
  // tagName is converting the free <div> to a <ul>
  tagName: 'ul',
  // this will create the list-group class for possible styling and properties
  className: 'list-group',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContact)
  },

  render: function(){
    return this;
  },

  renderContact: function(contactObject) {
    // create an instance of your ListItemView
    // pass the contactObject to that instance as it's model
    var listItemView = new ListItemView({model: contactObject});
    this.$el.append(listItemView.render().$el);
    // append what you get from the ListItemView render to this element (append the li to the ul)
  }

});


  var ListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: contactItem,

    render: function(){
      // get a shallow copy of the model (get the model's attributes object)
      var context = this.model.toJSON();
      // take this.$el.html and pass in the template; make sure you pass the attributes object into the template
      this.$el.html(this.template(context));
      return this;
    }
  });


$.fn.serializeObject = function() {
 return this.serializeArray().reduce(function(acum, i) {
   acum[i.name] = i.value;
   return acum;
 }, {});
};

module.exports = {
  ContactForm: ContactForm,
  ListView: ListView,
  ListItemView: ListItemView
};
