<p align="center">
  <h3 align="center">React Top Bar Loader</h3>
  <img src="https://user-images.githubusercontent.com/17708702/56333074-5e8dcb00-61b0-11e9-816e-a6c8e3e7cd78.gif" alt="repo image" width="900" height="200" />
  <h5 align="center"><i>A customizable and tiny top page loader for React</i></h5>
</p>

---

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
|goToPercentage	|The end percentage bar is required to go.|Positive Integer [0 - 100]|-1 (hidden)|
|incrementInterval|The time in milliseconds by which loader should increment gradually.|Positive Integer|500|

### Customizing
The app exposes two classname required for styling this app.
- react-top-bar-loader-container
- react-top-bar-loader-width

You may see the [demo style sheet](https://github.com/eyeblinkdigital/react-top-bar-loader/blob/master/demo/styles.css) inorder to modify as per your needs.
