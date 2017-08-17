import React from 'react'
import { List, Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', key: 'tab1', content: 'This is massive tab', size: 'massive' },
  { menuItem: 'Tab 2', key: 'tab2', content: 'This tab has a center aligned text', textAlign: 'center' },
  { menuItem: 'Tab 3', key: 'tab3', content: (
    <div>
      <p>This tab has a complex content</p>

      <List>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    </div>
  ) },
]

const TabExampleContentShorthand = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabExampleContentShorthand
