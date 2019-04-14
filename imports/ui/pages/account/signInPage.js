// imports
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import AutoFrom from 'meteor/aldeed:autoform'
import '/imports/ui/components/account/signInFormEmailPassword.js'
import '/imports/ui/components/account/signInThirdParty.js'
import './signInPage.html'

Template.signInPage.events({
  // on click sign out
  'click .js-sign-out-button'(event, instance) {
    Meteor.logout(error => {
      if (error) {
        M.toast({html: i18n.__('GWT.account.signOut.failure')})
        Log.log(['error', 'account'], `Sign out error.`, error)
      }
      else {
        M.toast({html: i18n.__('GWT.account.signOut.success')})
        M.toast({html: 'Sign out succesfull.'})
      }
    })
  }
})
