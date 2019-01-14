App.info({
  id: 'com.expertbox.fullstack',
  name: 'Meteor Fullstack',
  description: 'Meteor Fullstack is a template application includes all the boilerplate and setup ready to use and scripts to make it easy to customise and get it production ready in minutes.',
  author: 'The Expert Box B.V.',
  email: 'info@expertbox.com',
  version: '0.0.3',
  website: 'http://expertbox.com'
});

App.icons({

  // iOS 4.5.3
  'app_store': 'resources/1024x1024.png',                     // 1024x1024
  'iphone_2x': 'resources/120x120.png',                       // 120x120
  'iphone_3x': 'resources/180x180.png',                       // 180x180
  'ipad_2x': 'resources/152x152.png',                         // 152x152
  'ipad_pro': 'resources/167x167.png',                        // 167x167
  'ios_settings_2x': 'resources/58x58.png',                   // 58x58
  'ios_settings_3x': 'resources/87x87.png',                   // 87x87
  'ios_spotlight_2x': 'resources/80x80.png',                  // 80x80
  'ios_spotlight_3x': 'resources/120x120.png',                // 120x120
  'ios_notification_2x': 'resources/40x40.png',               // 40x40
  'ios_notification_3x': 'resources/60x60.png',               // 60x60

  // iOS Legacy
  'ipad': 'resources/76x76.png',                              // 76x76
  'ios_settings': 'resources/29x29.png',                      // 29x29
  'ios_spotlight': 'resources/40x40.png',                     // 40x40
  'ios_notification': 'resources/20x20.png',                  // 20x20
  'iphone_legacy': 'resources/57x57.png',                     // 57x57
  'iphone_legacy_2x': 'resources/114x114.png',                // 114x114
  'ipad_spotlight_legacy': 'resources/50x50.png',             // 50x50
  'ipad_spotlight_legacy_2x': 'resources/100x100.png',        // 100x100
  'ipad_app_legacy': 'resources/72x72.png',                   // 72x72
  'ipad_app_legacy_2x': 'resources/144x144.png',              // 144x144

  // Android 6.3.0
  'android_mdpi': 'resources/48x48.png',                      // 48x48
  'android_hdpi': 'resources/72x72.png',                      // 72x72
  'android_xhdpi': 'resources/96x96.png',                     // 96x96
  'android_xxhdpi': 'resources/144x144.png',                  // 144x144
  'android_xxxhdpi': 'resources/192x192.png'                  // 192x192
});

App.launchScreens({

  // iOS 4.5.3
  'iphone5': 'resources/640x1136.png',                        // 640x1136
  'iphone6': 'resources/750x1334.png',                        // 750x1334
  'iphone6p_portrait': 'resources/1242x2208.png',             // 1242x2208
  'iphone6p_landscape': 'resources/2208x1242.png',            // 2208x1242
  'iphoneX_portrait': 'resources/1125x2436.png',              // 1125x2436
  'iphoneX_landscape': 'resources/2436x1125.png',             // 2436x1125
  'ipad_portrait_2x': 'resources/1536x2048.png',              // 1536x2048
  'ipad_landscape_2x': 'resources/2048x1536.png',             // 2048x1536

  // Not yet supported in Xcode 9 or Cordova iOS 4.5.3
  // 'ipad_portrait_pro_10_5': 'resources/1668x2224.png',
  // 'ipad_landscape_pro_10_5': 'resources/2224x1668.png',
  // 'ipad_portrait_pro_12_9': 'resources/2048x2732.png',
  // 'ipad_landscape_pro_12_9': 'resources/2732x2048.png',

  // iOS Legacy
  // 'iphone': 'resources/320x480.png',                          // 320x480
  'iphone_2x': 'resources/640x960.png',                       // 640x960
  'ipad_portrait': 'resources/768x1024.png',                  // 768x1024
  'ipad_landscape': 'resources/1024x768.png',                 // 1024x768

  // Android 6.3.0
  'android_mdpi_portrait': 'resources/320x480.png',           // 320x480
  'android_mdpi_landscape': 'resources/480x320.png',          // 480x320
  'android_hdpi_portrait': 'resources/480x800.png',           // 480x800
  'android_hdpi_landscape': 'resources/800x480.png',          // 800x480
  'android_xhdpi_portrait': 'resources/720x1280.png',         // 720x1280
  'android_xhdpi_landscape': 'resources/1280x720.png',        // 1280x720
  'android_xxhdpi_portrait': 'resources/960x1600.png',        // 960x1600
  'android_xxhdpi_landscape': 'resources/1600x960.png',       // 1600x960
  'android_xxxhdpi_portrait': 'resources/1280x1920.png',      // 1280x1920
  'android_xxxhdpi_landscape': 'resources/1920x1280.png'      // 1920x1280
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Set Status Bar preferences
App.setPreference('StatusBarOverlaysWebView', false);

/*
// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});

// Add custom tags for a particular PhoneGap/Cordova plugin
// to the end of generated config.xml.
// Universal Links is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);
*/
