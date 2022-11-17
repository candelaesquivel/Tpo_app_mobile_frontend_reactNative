## Install steps

In order to test this branch, is recommended clone the repository in a clean folder and change to
dev_without_expo branch. After that just follow the steps below.


Run in command line the following commands

1. `npm install`
2. `npm start --reset cache`
3. `npx react-native run-android`

## Dev only instructions:

### To run the linter

```bash
npm run lint
```

If you want to build the apk file in debug mode:
1. `cd android`
2. `./gradlew assembleDebug`

You will find the apk file in `android/app/build/outputs/apk/debug/app-debug.apk`

Enjoy your app
