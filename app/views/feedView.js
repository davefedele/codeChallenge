var app = app || {};

app.FeedView = Backbone.View.extend({
  id: 'feedView',

  initialize: function(params) {
    // this.render();
    // this.collection.on("add", this.renderItem, this);
  },

  render: function() {
    // this.$el.children().remove();
    $('.feedBody').prepend(this.el);
    this.collection.forEach(this.renderItem, this);
    return this;
  },

  addItem: function(){
    var newItem = new app.Item();
    this.collection.add(newItem);
    
  },

  renderItem: function(Item){
    var ItemView = new app.ItemView({model: Item});
    $('#song  View').append(ItemView.render());
  }

});
