import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', key: 'tab1', content: 'Tab 1 Content' },
  { menuItem: 'Tab 2', key: 'tab2', content: 'Tab 2 Content' },
  { menuItem: 'Tab 3', key: 'tab3', content: 'Tab 3 Content' },
]

const TabExampleBasicAll = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabExampleBasicAll
