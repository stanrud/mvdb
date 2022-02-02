# MVDB - a music videos database as a test project


![image description](https://github.com/stanrud/mvdb/blob/main/images/1.jpg)

### Before you start

***MVDB*** requires a couple of previous steps to start with the installation. 

- You will need to have [npm](https://www.npmjs.com/) to install the application dependencies. If you don't have it, please follow [these](https://www.npmjs.com/get-npm) steps to install it.
- You will need to belong to an Apple organization development team for this project in order to run the application on iOS. 
- Also, this is a React Native project, so you must install React Native. Follow [these](https://reactnative.dev/docs/environment-setup) steps to do it.

### Installation

1. Clone the repo locally:

```sh
git clone https://github.com/stanrud/mvdb.git
```

2. Navigate into project
```sh
cd MVDB
```

3. Install dependencies
```sh
npm install
```

4. Configurate iOS project
```sh
cd ios && pod install && cd ..
```

### Run application

##### iOS #####
Run application
```sh
npm run ios
```
OR
1. Open application in xcode
```sh
cd ios
open MVDB.xcworkspace
```

2. Configure signing on project target
- Tap on MVDB project
- Tap Signing & Capabilities tab
- Tap on MVDB target
- On Team field, choose the development team from your apple account

3. Run the application: Product -> Run or just the play button

##### Android #####

1. Connect the device to your computer
2. Run application
```sh
npm run android
```

### Run tests
1. Navigate into main project folder
2. Execute tests
```sh
npm run test
```