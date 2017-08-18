import _extends from 'babel-runtime/helpers/extends';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, META, useKeyOnly } from '../../lib';
import Segment from '../../elements/Segment/Segment';

/**
 * A tab pane holds the content of a tab.
 */
function TabPane(props) {
  var children = props.children,
      className = props.className,
      loading = props.loading;


  var classes = cx(useKeyOnly(loading, 'loading'), 'active tab', className);
  var rest = getUnhandledProps(TabPane, props);
  var ElementType = getElementType(TabPane, props);

  var calculatedDefaultProps = {};
  if (ElementType === Segment) {
    calculatedDefaultProps.attached = 'bottom';
  }

  return React.createElement(
    ElementType,
    _extends({}, calculatedDefaultProps, rest, { className: classes }),
    children
  );
}

TabPane.handledProps = ['as', 'children', 'className', 'loading'];
TabPane._meta = {
  name: 'TabPane',
  parent: 'Tab',
  type: META.TYPES.MODULE
};

TabPane.defaultProps = {
  as: Segment
};

process.env.NODE_ENV !== "production" ? TabPane.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Tab.Pane can display a loading indicator. */
  loading: PropTypes.bool
} : void 0;

TabPane.create = createShorthandFactory(TabPane, function (children) {
  return { children: children };
});

export default TabPane;