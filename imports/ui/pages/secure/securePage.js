// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './securePage.html'

// on created
Template.securePage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.securePage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.securePage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.securePage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.securePage.onDestroyed(() => {
  const instance = Template.instance()
})
