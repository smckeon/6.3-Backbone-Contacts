var $ = require('jquery');
var Backbone = require('backbone');

// form template
var contactForm = require('../../templates/contact_list_form.hbs');
var contactItem = require('../../templates/list_item.hbs');



var ContactForm = Backbone.View.extend({
  // create a form element <form></form>
  tagName: 'form',
  // set this element's template
  template: contactForm,

  events: {
    "click .form-submit": 'createContact'
  },

  createContact: function(event){
    event.preventDefault();
    var formData = this.$el.serializeObject();
    console.log(formData);
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



var ListView = Backbone.View.extend({
  tagName: 'ul',
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
