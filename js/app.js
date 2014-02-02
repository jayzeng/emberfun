App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

// Index => id="index"
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.Controller.extend({
    init: function() {
        this.set('name', localStorage.name);
    },
    // All events are recommended to wraped in the actions block
    actions: {
        saveName: function(val) {
            localStorage.name = val;
        }
    }
});
