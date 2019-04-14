import { Template } from 'meteor/templating'
import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'
import { accountUpdateSchema } from '/imports/api/schemas/accountUpdateSchema.js'
import './accountPage.html'

// helpers
Template.accountPage.helpers({

	// create doc for form
	doc() {

		// safe assignment
		const result = {}
		const user = Meteor.users.findOne(Meteor.userId())

		// if user exists
		if(user) {

			// email
			const email = user.emails?_.first(user.emails).address:user.profile.email
			if(email) {
				result.email = email
			}

			// username
			if(user.username) {
				result.username = user.username
			}

			// firstname
			if(user.profile && user.profile.firstname) {
				result.firstname = user.profile.firstname;
			}

			// lastname
			if(user.profile && user.profile.lastname) {
				result.lastname = user.profile.lastname;
			}

			// language
			if(user.profile && user.profile.language) {
				result.language = user.profile.language;
			}

			// country
			if(user.profile && user.profile.country) {
				result.country = user.profile.country;
			}
		}
		return result;
	},

	// form schema
	schema: accountUpdateSchema
})

AutoForm.hooks({
	updateAccount: {
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			Meteor.call('updateAccount', insertDoc, (error, result) => {
				if(error) {
					M.toast({html: i18n.__('GWT.account.update.failure')})
				}
				else {
					M.toast({html: i18n.__('GWT.account.update.success')})
				}
			});
			this.done();
			return false;
		}
	},
})
