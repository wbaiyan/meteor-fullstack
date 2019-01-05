// imports
import { Mongo } from 'meteor/mongo'
import 'meteor/aldeed:collection2-core'
import { schema } from '/imports/api/schemas/settings.js'

// export settings collection
export const settings = Mongo.Collection('settings')

// attach schema to collection
settings.attachSchema(schema)

// before a setting is inserted
settings.before.insert(function (userId, doc) {

	//set owner
	doc.ownerId = doc.ownerId?doc.ownerId:userId;
})
