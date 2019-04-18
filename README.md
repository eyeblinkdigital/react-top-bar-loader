# react-top-bar-loader
A customizable and tiny top page loader for react

### Usage

Install with yarn or npm

```yarn add react-top-bar-loader```

Import component

```import TopBarLoader from 'react-top-bar-loader'```

Pass the props

```<TopBarLoader goToPercentage={50} incrementInterval={500}/>```

### Options
|   Propname|   Description|Type   |Default   |
|---|---|---|---|
|goToPercentage	|The end percentage bar is required to go.	|Positive Integer [0 - 100]	|-1 (hidden)   |
|incrementInterval	|The time in milliseconds by which loader should increment gradually|	Positive Integer|	500     |

### Customizing
The app exposes two classname required for styling this app.
- react-top-bar-loader-container
- react-top-bar-loader-width

You may see the [demo style sheet](https://github.com/eyeblinkdigital/react-top-bar-loader/blob/master/demo/styles.css) inorder to modify as per your needs.
