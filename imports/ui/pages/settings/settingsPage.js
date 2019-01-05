// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './settingsPage.html'

// on created
Template.settingsPage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.settingsPage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.settingsPage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.settingsPage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.settingsPage.onDestroyed(() => {
  const instance = Template.instance()
})
