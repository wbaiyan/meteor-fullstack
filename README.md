# Meteor Fullstack

Setting up a new Meteor production ready project from scratch on a new machine takes lots of time, up to several days of troubleshooting. Not anymore!

Meteor Fullstack is a template application includes all the boilerplate and setup ready to use and include cross-platform scripts to make it fast and easy to customise, secure, manage and deploy your app.

We also include all the detailed steps needed to setup an DEV environment on a Mac from scratch, getting you ready to code and deploy in less than 1 hour on a new machine.

Special features built in and ready to rock:
- Full Stack, Cross Platform, Responsive, Easy to Use
- Material Design User Interface
- Customizable MaterializeCSS color scheme
- Meteor settings: settings-development.js and encrypted settings-production.js inside the repository
- Dynamic importing of view dependancies per client route for optimised download speeds
- CDN fronted media for web loads, local media for devices, for optimised download speeds
- Seach Engine Optimization using Prerender.io
- Password based User Accounts
- Mailgun integration for sending email validation and password reset notifications
- Mailchimp integration for building email lists when new users register
- Braintree Payment Gateway integration for accepting Credit Cards and PayPal
- - [ ] In-app purchases on iOS and Android using app store payment mechanisms (coming soon)
- - [ ] Digital Products, Subscription Products and Invoices (coming soon)
- - [ ] Admin Panel with cross platform logging and monitoring (coming soon)
- Cross platform development scripts for local host start and Galaxy deploy
- Cross platform development scripts for securing production settings and certificates inside repo with GPG2
- Blaze MaterializeCSS layout including fixed Navigation Bar (footer coming soon)
- Mobile configuration for iOS and Android applications
- Splash Screens, Icons, and Screenshot examples for iOS and Android for submission to App Stores
- - [ ] Internationalization (coming soon)

This repository contains an Meteor template application with a powerful stack of packages, configured and ready to rock and roll:
- meteor-base
- standard-minifier-css
- standard-minifier-js
- es5-shim
- ecmascript
- mongo
- allow-deny
- email
- mobile-experience
- tracker
- dynamic-import
- blaze-html-templates
- kadira:flow-router
- kadira:blaze-layout
- Meteor Accounts
- accounts-password
- useraccounts:flow-routing
- alanning:roles
- zodiase:material-design-icons-fonts
- matb33:collection-hooks
- fourseven:scss
- MaterializeCSS
- Moment.js and durations
- SimpleSchema
- aldeed:autoform
- aldeed:collections2
- aldeed:template-extension
- mozfet:meteor-logging
- mozfet:access
- mozfet:materialize-icons
- mozfet:meteor-logs
- mozfet:dynaview
- mozfet:materialize-toast
- mozfet:autoform-materialize
- mozfet:autoform-materialize-modals

Meteor Fullstack always try to make use of the latest versions of dependancies and build tools, however due to out of syunc development sicles and historic dependancies the tools do not always play well together. The lastest versions that have been found to work for Cross Platform development on an Apple Mac DEV environment is:
- MacOS Mojave v10.14.2
- Xcode v
- Cocoa Pods v
- Brew v
- Gradle v
- Oracle JDK v8u192
- Android Studio v3.21
- Meteor v

- [ ] Create a customise project script that collects settings and update meteor, cordova, and mobile configs, build script, and npm deploy script with:
- project name
- project folder
- server url
- andriod
  - generate keystore
  - generate certificates
- mailgun settings
- mailchimp settings
- braintree settings

## Installation

Clone this repo and modify it to suit your needs.
If you are using the secure and unsecure scripts, you first have to install GPG2.

## Run in DEV Environment

Without using Meteor settings
```
$ meteor
```

If you are using Meteor settings

```
$ meteor npm run start
```

## Deploy to Galaxy STAGE/PROD Environments

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
```
$ meteor npm run unsecure
```

## Mobile Testing

- [ ] Create a script to sync and bump the versions in mobile-config.js and package.json
Before running or publishing mobile apps, ensure the version number has been updated in mobile-config.js.

### Run on iOS with Simulator in DEV Environment

> ** Prerequisite ** Requires an Apple Mac computer

1. Open App Store on your Mac and install Xcode, start Xcode and accept licence and components.

2. in project folder:
```
$ sudo gem install cocoapods
$ pod setup
$ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
$ meteor add-platform ios
```

3. Run on iOS Simulator in DEV environment
```
$ meteor npm run ios
```
This will cause Xcode to pop up with your project loaded. Select an simulator in the Xcode project and click run.

### Run on iOS Local Device in DEV Environment

> ** Prerequisite ** Requires Apple developer account

1. [Register iOS App ID](https://developer.apple.com/account/ios/identifier/bundle)

2. [Add iOS Certificate](https://developer.apple.com/account/ios/certificate/create) for iOS App Development

3. [Add Device](https://developer.apple.com/account/ios/device/create). To get your device UDID, open iTunes, select the device and click on its serial number.

4. Connect iOS device to your Mac and unlock it.

5. Start Xcode and add developer account to Xcode:
Toolbar Menu > Preferences > Accounts > Add Apple ID

6.
```
$ meteor npm run ios
```
This will cause Xcode to open up with your project loaded.

7. Enable In-App Purchase in the project capabilities.

8. Select the device in the Xcode project and click run.

### Run on Android with Simulator in DEV Environment

1. Install [Java Development Kit 8u192](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Do not install JDK 9, 10 or 11, it does not work with Meteor/Cordova yet.

2. Install [Android Studio](https://developer.android.com/studio/), start Android Studio and run the setup wizard.

3. Install Gradle

on Mac
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install gradle
```

4. Set ```ANDROID_HOME``` and add the tools directories to your ```PATH```. This [article](https://www.dev2qa.com/how-to-set-android-sdk-path-in-windows-and-mac/) shows how to set Android SDK path in Windows and Mac.

on Mac
```
$ cd ~
$ nano .bash_profile
export ANDROID_HOME=/Users/<USERNAME>/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH/:$ANDROID_HOME/platform-tools
$ source .bash_profile
```

5. Open Android Studio SDK Manager and select SDK Platforms tab. Install Android API Level 26. Select SDK Tools tab and ensure Android SDK Platform-tools (latest) and Android SDK Build-tools (latest) are installed.

6. The Meteor guide advises against using Android simulators. If you sill want to give it a go you can [create an Android Virtual Device](https://developer.android.com/studio/run/managing-avds)

It seems that you have to create a project before the Android Studio toolbar is shown. Once the toolbar is shown, it can take some time before the AVD Manager item is shown in the Tools menu.

It used to be possible to start AVD Manager from the command line in older versions of Android Studio, but it does not seem to work anymore.

7. in project folder:
```
$ meteor add-platform android
```

8. connect your android device to your computer

9. in project folder:
```
$ meteor npm run android
```

10. if this is the first time using this device for development with this computer, a popup will open on the device, asking you to Allow USB debugging. Click on OK.

## Deploy to Galaxy

1. Before deploying to Galaxy, make sure to update the deploy script in package.json with your project URL.

2. In the project folder:
```
$ npm run deploy
```

## Publish Mobile Apps

### Build and Sign

1. Customise ```/imports/scripts/build.js``` for your project environment.
```js
//------------------------------------------------------------------------------
// Customise this section for your project
//------------------------------------------------------------------------------
// define project name, which is the name of the folder containing this project
var project_name = 'meteor-fullstack';

// defined server address
var server_address = 'https://www.meteor-fullstack.com';

// define projects folder that contains this project and will contain the build folder
var dir_projects = '~/projects';
//------------------------------------------------------------------------------
```

2. Build and Sign APK
```
$ meteor npm run build
```

###

## Workflow

1. Change code
2. Bump version
3. Test Web
4. Test Mobile Simulator
5. Test Mobile Device
if hot push only
6. Deploy to Galaxy
else
6. Publish Mobile Apps to App Store and Play Store
7. Once apps are approved, Deploy to Galaxy
8. Release apps on App Store and Play Store
