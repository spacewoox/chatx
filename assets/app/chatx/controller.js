import Ember from 'ember';

export default Ember.Controller.extend({

  sortedMessageList: Ember.computed('model.@each', function() {
    return this.get('model').toArray().reverse().slice(0, 10).reverse();
  }),

  init() {
    setInterval(() => {
      this.send('refresh');
    }, 2000);
  },

  save() {
    this.get('store').createRecord('message', {
      message: this.get('userInputs')
    })
    .save()
    .then(() => {
      this.set('userInputs', '');
    })
    .catch(() => {
      console.log('could not submit the message');
    });
  },

  actions: {
    save() {
      if (this.get('userInputs') !== '') {
        this.save();
      }
    }
  }
});
