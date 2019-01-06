# Meteor Fullstack

Setting up a new meteor project with your favorite packages and latest dependancies takes time. Not anymore!

This repository contains an Meteor template application complete with my favorite full stack:

- kadira:flow-router
- kadira:blaze-layout
- Meteor Accounts
- accounts-password
- useraccounts:flow-routing
- alanning:roles
- matb33:collection-hooks
- fourseven:scss
- MaterializeCSS
- Moment.js and durations
- SimpleSchema
- aldeed:autoform
- aldeed:collections2
- mozfet:meteor-logging
- mozfet:access
- mozfet:materialize-icons
- customizable MaterializeCSS color scheme
- settings-development.js
- cross platform scripts for local host start and Galaxy deploy
- cross platform scripts for securing production settings and certificates inside repo with GPG2
- mainLayout including fixed Navigation Bar (footer coming soon)
- Internationalization coming soon...

## Installation

Clone this repo and modify it to suit your needs.
If you are using the secure and unsecure scripts, you first have to install GPG2 first.

## Run

Without using Meteor settings
```
$ meteor
```

If you are using Meteor settings

```
$ meteor npm run start
```

## Deploy

```
$ meteor npm run deploy
```

## Secure

To secure the folder so that no sensitive files are unencrypted locally. While the folder is secured, you cannot deploy to PROD. Note that only encrypted production setting and certificates are added to the repository and unencrypted files are not added to the repository and thus this script must be executed after changing production settings, else risk losing your production settings.
```
$ meteor npm run secure
```

## Unsecure

To unsecure the folder so that sensitive files are locally available decrypted, and ready for deployment.
```js
$ meteor npm run unsecure
```
