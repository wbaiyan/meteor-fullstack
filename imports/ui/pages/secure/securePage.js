// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './securePage.html'

// on created
Template.fullstackSecurePage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.fullstackSecurePage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.fullstackSecurePage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.fullstackSecurePage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.fullstackSecurePage.onDestroyed(() => {
  const instance = Template.instance()
})
