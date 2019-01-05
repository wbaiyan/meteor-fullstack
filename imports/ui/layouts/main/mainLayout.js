import 'hammerjs'
import 'materialize-css/dist/js/materialize.js'
import { Log } from 'meteor/mozfet:meteor-logs'
import '/imports/ui/components/navbar/navbar.js'
import './mainLayout.html'
import 'meteor/mozfet:dynaview'
Log.log(['debug', 'load'], `Loading module ${module.id}.`)
