// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import { FlowRouter } from 'meteor/kadira:flow-router'
import AutoFrom from 'meteor/aldeed:autoform'
import '/imports/api/cdn'
import { accountSignUpSchema } from '/imports/api/schemas/accountSignUpSchema'
import './signUpPage.html'

// helpers
Template.signUpPage.helpers({

  // form schema
  schema: accountSignUpSchema
})

AutoForm.hooks({
  signUpForm: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {

      Meteor.call('accounts.create', insertDoc, (error, result) => {
        if (error) {
          M.toast({html: i18n.__('account.signUp.failure')})
        }
        else {
          M.toast({html: i18n.__('account.signUp.success')})
          if (FlowRouter.current().route.name === 'signUp') {
            FlowRouter.go('home')
          }
        }
      })
      this.done()
      return false
    }
  }
})
