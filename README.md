# kicknow-client-mobile
A mobile client for kicknow.


## Requirements

(Homebrew)[http://brew.sh/] is the recommended way to install Watchman and Flow.
Install Node.js 4.0 or newer.
- Install nvm with its setup instructions here. Then run nvm install node && nvm
  alias default node, which installs the latest version of Node.js and sets up
  your terminal so you can run it by typing node. With nvm you can install
  multiple versions of Node.js and easily switch between them.

``brew install watchman``. We recommend installing watchman, otherwise you might
hit a node file watching bug.
``brew install flow``, if you want to use flow.


## Android Setup

To write React Native apps for Android, you will need to install the Android SDK (and an Android emulator if you want to work on your app without having to use a physical device). See Android setup guide for instructions on how to set up your Android environment.

### Quick Start
Install the React Native command line tools:

``$ npm install -g react-native-cli``

### To run the Android app:

``$ cd KicknowMobile``
``$ react-native run-android``

Run ``adb logcat *:S ReactNative:V ReactNativeJS:V`` in a terminal to see your
app's logs.

Note: If you are using an Android device, see the Running on Android Device page.

If you run into any issues getting started, see the troubleshooting page.

### Create an Android Virtual Device (AVD)

1. ``./android avd`` to open the AVD Manager
2. click create

### Run an Android Virtual Device (AVD)

1. ``./android avd`` to open the AVD Manager
2. select device
3. click start
