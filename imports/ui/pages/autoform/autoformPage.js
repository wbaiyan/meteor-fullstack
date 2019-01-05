// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './autoformPage.html'

// on created
Template.autoformPage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.autoformPage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.autoformPage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.autoformPage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.autoformPage.onDestroyed(() => {
  const instance = Template.instance()
})
