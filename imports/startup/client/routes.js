import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { Roles } from 'meteor/alanning:roles'
import { Log } from 'meteor/mozfet:meteor-logs'
Log.log(['debug', 'load'], `Loading module ${module.id}.`)

// initialise roles and flowrouter
FlowRouter.wait()
Tracker.autorun(() => {
  if(Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize()
  }
})

// register pathFor helper
Template.registerHelper('pathFor', function() {
  return FlowRouter.path(...arguments)
})

// home
FlowRouter.route('/', {
  name: 'home',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/home/homePage.js')
    BlazeLayout.render('mainLayout', { main: 'homePage' })
  }
})

FlowRouter.route('/terms', {
  name: 'terms',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/terms/termsPage.js')
    BlazeLayout.render('mainLayout', { main: 'termsPage' })
  }
})

FlowRouter.route('/contact', {
  name: 'contact',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/contact/contactPage.js')
    BlazeLayout.render('mainLayout', { main: 'contactPage' })
  }
})

FlowRouter.route('/secure', {
  name: 'secure',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/secure/securePage.js')
    BlazeLayout.render('mainLayout', { main: 'securePage' })
  }
})

FlowRouter.route('/settings', {
  name: 'settings',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/setting/settingsPage.js')
    BlazeLayout.render('mainLayout', { main: 'settingsPage' })
  }
})

FlowRouter.notFound = {
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/notFound/notFoundPage')
    BlazeLayout.render('mainLayout', { main: 'notFoundPage' })
  }
}

// register
FlowRouter.route('/sign-up', {
  name: 'signUp',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/account/signUpPage.js')
    BlazeLayout.render('mainLayout', { main: 'signUpPage' })
  }
})

// sign in
FlowRouter.route('/sign-in', {
  name: 'signIn',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/account/signInPage.js')
    BlazeLayout.render('mainLayout', { main: 'signInPage' })
  }
})

// verify email
FlowRouter.route('/verify-email/:token', {
  name: 'verifyEmail',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/account/verifyEmailPage.js')
    BlazeLayout.render('mainLayout', { main: 'verifyEmailPage' })
  }
})

// forgot password
FlowRouter.route('/forgot-password', {
  name: 'passwordForgot',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/account/passwordForgotPage.js')
    BlazeLayout.render('mainLayout', { main: 'passwordForgotPage' })
  }
})

// reset password
FlowRouter.route('/reset-password/:token', {
  name: 'passwordReset',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/account/passwordResetPage.js')
    BlazeLayout.render('mainLayout', { main: 'passwordResetPage' })
  }
})

// account
// FlowRouter.route('/account', {
//   name: 'account',
//   triggersEnter: [AccountsTemplates.ensureSignedIn],
//   action: async function(params, queryParams) {
//     await import('/imports/ui/layouts/main/mainLayout.js')
//     await import('/imports/ui/pages/setting/settingsPage.js')
//     BlazeLayout.render('mainLayout', { main: 'settingsPage' })
//   }
// })

// not found
FlowRouter.notFound = {
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/main/mainLayout.js')
    await import('/imports/ui/pages/notFound/notFoundPage')
    BlazeLayout.render('mainLayout', { main: 'notFoundPage' })
  }
}
