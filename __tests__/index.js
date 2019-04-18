import React from 'react'
import { shallow } from 'enzyme'

import TopBarLoader from '../src'

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<TopBarLoader />)
  })
})
