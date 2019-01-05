// custom account template navigation button using aldeed:template-extension
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import './atNavButton.html'

Template.customAtNavButton.replaces('atNavButton')

Template.atNavButton.helpers({
	signedIn: function () {
		return Meteor.userId()?true:false
	}
})

Template.atNavButton.events({
	'click #at-nav-button'(event, template) {
		FlowRouter.go('home')
	}
})
