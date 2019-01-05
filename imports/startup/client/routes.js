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

FlowRouter.route('/autoform/basic', {
  name: 'autoformBasic',
  action: async function(params, queryParams) {
    await import('/imports/ui/layouts/basic/basicLayout.js')
    await import('/imports/ui/pages/autoformBasic/autoformBasicPage.js')
    BlazeLayout.render('basicLayout', { main: 'autoformBasicPage' })
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

AccountsTemplates.configureRoute('changePwd')
AccountsTemplates.configureRoute('forgotPwd')
AccountsTemplates.configureRoute('resetPwd')
AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('signUp')
AccountsTemplates.configureRoute('verifyEmail')
