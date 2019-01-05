// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'
import { AutoForm } from 'meteor/aldeed:autoform'
import './autoformBasicPage.html'

// extend simple shema with autoform properties
SimpleSchema.extendOptions(['autoform'])

// on created
Template.autoformBasicPage.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.autoformBasicPage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.autoformBasicPage.helpers({
  doc() {
    return {}
  },
  schema() {
    const instance = Template.instance()
    return new SimpleSchema({
      'basicSelect': {
        type: Number,
        optional: true,
        allowedValues: [0, 1],
        autoform: {
          type: 'select'
        }
      }
    }, {tracker: Tracker})
  },
})

// events
Template.autoformBasicPage.events({

  //on click class
  'click .className'(event, instance) {
  }
})

// on destroyed
Template.autoformBasicPage.onDestroyed(() => {
  const instance = Template.instance()
})
