import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    controller.set('model', model);
  },

  model() {
    return this.store.findAll('message');
  },

  actions: {
    refresh() {
      this.refresh();
    }
  }
});
