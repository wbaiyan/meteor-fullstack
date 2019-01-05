// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './notFoundPage.html'

// on created
Template.fullstackNotFoundPage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.fullstackNotFoundPage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.fullstackNotFoundPage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.fullstackNotFoundPage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.fullstackNotFoundPage.onDestroyed(() => {
  const instance = Template.instance()
})
