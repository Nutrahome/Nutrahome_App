- __Create React Native project:__

    ```
    $ npx react-native init yourProjectName
    ```

- __Install libraries:__

    - _React Native Element (UI kit)_
        
        ```
        $ npm install react-native-elements react-native-vector-icons

        $ npx react-native link react-native-vector-icons
        ```
    
    - _React Navigation_

        ```
        $ npm i npm install @react-navigation/native

        $ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

        $ npm i @react-navigation/stack
        
        $ npm install @react-navigation/bottom-tabs

        ```
    
    - _React Native intro slider_

        ```
        $ npm i react-native-app-intro-slider
        ```
    
    - _React Native confirmation code field_

        ```
        $ npm i react-native-confirmation-code-field
        ```

- __Run metro JS bundler (like webpack in web dev)__:

    ```
    $ npx react-native start
    ```

- __Run app:__

    ```
    $ npx react-native run-android
    ```