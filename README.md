# How to take Screenshots with fastlane using React Native

## Setup
Follow the setup guide on [fastlanes website](https://docs.fastlane.tools/getting-started/ios/screenshots/)

# Further actions
1) Open xCode -> Product -> Scheme -> Edit Sceme
2) (optional) In all windows, select (Release) as build configuration (not needed, but helps you avoid yellow box warnings during screenshots)
3) Make sure Executable is set to your app
4) Under "Build" - De-select "parallelize build"
5) Under "Build" - Make sure "Test" and "Run" is selected for the test target. 
5) Close the Schema Window
6) Select your root project -> Select your UI Test Target -> Build Phases -> expand "Target dependencies"
7) Add "React" as a target dependency. 
8) Change the test target's iOS development target from iOS 13.4 to iOS 9.0.

Setup your screenshot procedure (see below) - and run `fastlane snapshot`. 

# Tip
If you have not already done so, move your Fastlane files into `/fastlane` folder, fastlane will automatically look for supported files here, and helps you keep your project organized. 

# How to write screenshot procedure. 
Give the elements you want to tap a `testID="<yourID>"`

Ex.
```jsx
<TouchableOpacity testID="BTN2" onPress={() => {}}>
  <Text>Touch me</Text>
</TouchableOpacity>
```

(HARD) In your testfile, where you normally record - You can try the recorder, but be very carefull of the points your touching - Its very picky that way. 

(EASIER) I think its easier to be explicit about it - TouchableOpacity seems to allways show up in "otherElements" no matter how deep its nested: 
```swift
// Helps us not to continue before react has compiled its stuff and actually loaded the application
XCUIApplication().otherElements["BTN2"].waitForExistence(timeout: 30) 
 //Take the screenshot and give it a name of "01Launch"
snapshot("01Launch")
// Tap the element with testID="BTN2"
XCUIApplication().otherElements["BTN2"].tap()
snapshot("02BTN2State")
// Wait 1 second before continuing
sleep(1)
XCUIApplication().otherElements["BTN1"].tap()
snapshot("03BTN1State")
```

## Testing tips: 
Dynamic content? Set your `testID=´MyContent_${index}´`



# To be figgured out
* Fastlane complains about not installed languages and defaults to system default. 
* Simulator gets erased everytime, makes it hard to use asyncStorage and setting up testdata. (even if `erase_simluator = false`)

# Contribute
If you find anything worthy of a mention, submit a PR or create an issue. 
