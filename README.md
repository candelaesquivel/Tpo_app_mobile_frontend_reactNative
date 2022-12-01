## Install steps

In order to test this branch, is recommended clone the repository in a clean folder and change to
dev_without_expo branch. After that just follow the steps below.


Run in command line the following commands

1. `npm install --save --force`
2. `npm start --reset cache`
3. `npx react-native run-android`

## Dev only instructions:

### To run the linter

```bash
npm run lint
```

If you want to build the apk file in debug mode, execute the following commands in your root folder:
1. `mkdir android\app\src\main\assets`
1. `npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`
1. `cd android`
2. `./gradlew assembleDebug` or `./gradlew assembleRelease`

You will find the apk file in `android/app/build/outputs/apk/debug/app-debug.apk` if you built the debug apk or `android\app\build\outputs\apk\release`

Enjoy your app
