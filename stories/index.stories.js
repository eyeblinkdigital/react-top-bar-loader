import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import TopBarLoader from '../src'
import Introduction from '../demo/introduction'
import '../demo/styles.css'
import '../demo/minigram.css'

const styles = {
  textAlign: 'center',
}
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>

storiesOf('Top bar loader for React', module).add('Introduction', () => (
  <Introduction />
))

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .add('Beginning from 0%', () => <TopBarLoader goToPercentage={1} />)
  .add('Beginning from 50%', () => (
    <TopBarLoader goToPercentage={50} incrementInterval={500} />
  ))
  .add('Changing starting %', () => {
    const percentageLabel = 'Starting percentage (goToPercentage)'
    const percentageDefaultValue = 1
    const percentageOptions = {
      range: true,
      min: 1,
      max: 99,
      step: 1,
    }
    const goToPercentage = number(
      percentageLabel,
      percentageDefaultValue,
      percentageOptions
    )

    return <TopBarLoader goToPercentage={goToPercentage} />
  })
  .add('Changing interval time', () => {
    const incrementalLabel = 'Control incremental speed (incrementInterval)'
    const incrementalDefaultValue = 500
    const incrementalOptions = {
      range: true,
      min: 5,
      max: 5000,
      step: 5,
    }
    const incrementInterval = number(
      incrementalLabel,
      incrementalDefaultValue,
      incrementalOptions
    )

    return (
      <TopBarLoader goToPercentage={2} incrementInterval={incrementInterval} />
    )
  })
