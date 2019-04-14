// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import AutoFrom from 'meteor/aldeed:autoform'
import { accountSignInSchema } from '/imports/api/schemas/accountSignInSchema.js'
import '/imports/api/cdn'
import './signInFormEmailPassword.html'

// set autoform template
AutoForm.setDefaultTemplate('materialize')

AutoForm.hooks({
  signInFormEmailPassword: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      Meteor.loginWithPassword(insertDoc.email, insertDoc.password, (error) => {
        if (error) {
          M.toast({html: i18n.__('GWT.account.signIn.failure')})
        }
        else {
          M.toast({html: i18n.__('GWT.account.signIn.success')})
        }
      })
      this.done()
      return false
    }
  }
})

// on created
Template.signInFormEmailPassword.onCreated(() => {
  const instance = Template.instance()
})

// on rendered
Template.signInFormEmailPassword.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.signInFormEmailPassword.helpers({

  // form schema
  schema: accountSignInSchema
})

// events
Template.signInFormEmailPassword.events({
  'click .js-account-sign-in-button-biocryptology'(event) {
    event.preventDefault()
    Meteor.loginWithBiocryptology(error => {
      if (error) {
        Toast.show(['account'], 'account-toast-signin-failure')
      }
      else {
        Toast.show(['account'], 'account-toast-signin-success')
        if (FlowRouter.current().route.name === 'signin') {
          FlowRouter.go('home')
        }
      }
    })
  }
})
