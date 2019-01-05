// imports
import { Template } from 'meteor/templating'
import { Log } from 'meteor/mozfet:meteor-logs'
import './homePage.html'
Log.log(['debug', 'load'], `Loading module ${module.id}.`)

// on created
Template.fullstackHomePage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.fullstackHomePage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.fullstackHomePage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.fullstackHomePage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.fullstackHomePage.onDestroyed(() => {
  const instance = Template.instance()
})
