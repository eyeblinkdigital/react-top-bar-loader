import React from 'react'

export default class Introduction extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>React top bar loader</h1>
          <h5>A customizable top page loader for React</h5>
        </header>
        <section>
          <h3>Usage</h3>
          <p>
            Install with yarn or npm
            <br />
            <code>{`yarn add react-top-bar-loader`}</code>
            <br />
            Import component
            <br />
            <code>{`import TopBarLoader from 'react-top-bar-loader'`}</code>
            <br />
            Pass the props
            <br />
            <code>{`<TopBarLoader goToPercentage={50} incrementInterval={500}/>`}</code>
          </p>

          <h3>Options</h3>
          <table>
            <thead>
              <tr>
                <th>Prop-name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>goToPercentage</td>
                <td>The end percentage bar is required to go.</td>
                <td>Positive Integer [0 - 100]</td>
                <td>-1 (hidden)</td>
              </tr>
              <tr>
                <td>incrementInterval</td>
                <td>
                  The time in milliseconds by which loader should increment
                  gradually
                </td>
                <td>Positive Integer</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>

          <h3>Customizing</h3>
          <p>
            The app exposes two classnames required for styling this app.
            <ol>
              <li>
                <strong>react-top-bar-loader-container</strong>
              </li>
              <li>
                <strong>react-top-bar-loader-width</strong>
              </li>
            </ol>
            You may see the demo style sheet inorder to modify as per your
            needs. The style sheet is located at{' '}
            <a
              href="https://github.com/eyeblinkdigital/react-top-bar-loader"
              target="_blank"
            >
              demo/styles.css
            </a>
            .If it still doesnt suit you needs, feel free to fork and use
            however you like.
          </p>
        </section>
      </React.Fragment>
    )
  }
}
