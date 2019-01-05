// imports
import { Template } from 'meteor/templating'
import { Log } from 'meteor/mozfet:meteor-logs'
import './homePage.html'
Log.log(['debug', 'load'], `Loading module ${module.id}.`)

// on created
Template.homePage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.homePage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.homePage.helpers({
  helper() {
    const instance = Template.instance()
    return 'help'
  }
})

// events
Template.homePage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.homePage.onDestroyed(() => {
  const instance = Template.instance()
})
