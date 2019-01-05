// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import './autoformPage.html'

// on created
Template.fullstackAutoformPage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.fullstackAutoformPage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.fullstackAutoformPage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.fullstackAutoformPage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.fullstackAutoformPage.onDestroyed(() => {
  const instance = Template.instance()
})
