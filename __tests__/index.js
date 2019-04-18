import React from 'react'
import { mount } from 'enzyme'

import TopBarLoader from '../src'

describe('Component basic testing', () => {
  it('renders without crashing', () => {
    mount(<TopBarLoader />)
  })
})

// More tests here
