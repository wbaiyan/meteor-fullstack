// imports
import SimpleSchema from 'simpl-schema'
import 'meteor/aldeed:collection2-core'
import { Tracker } from 'meteor/tracker'

// extend simple schema with autoform options
SimpleSchema.extendOptions(['autoform'])

// export schema
export const schema = new SimpleSchema({

  _id: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },

  ownerId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },

  firstName: {
    type: String
  }

}, {tracker: Tracker})
