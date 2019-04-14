// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import { FlowRouter } from 'meteor/kadira:flow-router'
import AutoFrom from 'meteor/aldeed:autoform'
import { accountPasswordForgotSchema } from
    '/imports/api/schemas/accountPasswordForgotSchema.js'
import './passwordForgotPage.html'

// on rendered
Template.passwordForgotPage.onRendered(() => {
  const instance = Template.instance()
})

// helpers
Template.passwordForgotPage.helpers({

  // form schema
  schema: accountPasswordForgotSchema
})

AutoForm.hooks({
  passwordForgotForm: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      Accounts.forgotPassword(
        {
          email: insertDoc.email
        },
        error => {
          if (error) {
            M.toast({html: i18n.__('GWT.account.passwordForgot.failure')})
          }
          else {
            M.toast({html: i18n.__('GWT.account.passwordForgot.success')})
            FlowRouter.go('home')
          }
        }
      )
      this.done()
      return false
    }
  }
})
