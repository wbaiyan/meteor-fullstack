// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import { FlowRouter } from 'meteor/kadira:flow-router'
import AutoFrom from 'meteor/aldeed:autoform'
import { accountPasswordResetSchema } from '/imports/api/schemas/accountPasswordResetSchema.js'
import './passwordResetPage.html'

// on rendered
Template.passwordResetPage.onRendered(() => {
  const instance = Template.instance()
  Materialize.updateTextFields()
})

// helpers
Template.passwordResetPage.helpers({

  // form schema
  schema: accountPasswordResetSchema
})

AutoForm.hooks({
  passwordResetForm: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {
      const token = FlowRouter.getParam('token')
      Accounts.resetPassword(token, insertDoc.password,
        error => {
          if (error) {
            M.toast({html: i18n.__('account.passwordReset.failure')})
          }
          else {
            M.toast({html: i18n.__('account.passwordReset.success')})
            // FlowRouter.go('home')
          }
        }
      )
      this.done()
      return false
    }
  }
})
