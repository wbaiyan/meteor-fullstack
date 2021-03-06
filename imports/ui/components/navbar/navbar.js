// imports
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Log } from 'meteor/mozfet:meteor-logs'
import 'meteor/mozfet:materialize-icons'
import './navbar.html'
Log.log(['debug', 'load'], `Loading module ${module.id}.`)

// on created
Template.navbar.onCreated(function () {
  const instance = Template.instance()
  instance.state = {
    activePage: new ReactiveVar('home')
  }
})

// on rendered
Template.navbar.onRendered(() => {
  const instance = Template.instance()

  // init navbar
  $(".sidenav").sidenav()

  // init dropdown button
  const dropdownElement = $(".dropdown-trigger").get(0)
  instance.state.dropdownInstance = M.Dropdown.init(dropdownElement,
      {constrainWidth: false})

  instance.autorun(() => {
    FlowRouter.watchPathChange()
    const routeName = FlowRouter.current().route.name
    Log.log(['debug', 'route'], `Route changed to ${routeName}.`)
    instance.state.activePage.set(routeName)
	})
})

// helpers
Template.navbar.helpers({
	activePage() {
    const instance = Template.instance()
		return instance.state.activePage
	},
})

// on destroyed
Template.navbar.onDestroyed(() => {
  const instance = Template.instance()
  instance.state.dropdownInstance.destroy()
})

// navbar item helpers
Template.navbarItem.helpers({
	active() {
    const instance = Template.instance()
		const activePageName = instance.data.activePage.get()
		const pageName = instance.data.pageName
		let result = activePageName === pageName?'active':''
		return result
	}
})
