import _extends from 'babel-runtime/helpers/extends';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

/**
 * A statistic can contain a label to help provide context for the presented value.
 */
function StatisticLabel(props) {
  var children = props.children,
      className = props.className,
      label = props.label;

  var classes = cx('label', className);
  var rest = getUnhandledProps(StatisticLabel, props);
  var ElementType = getElementType(StatisticLabel, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    childrenUtils.isNil(children) ? label : children
  );
}

StatisticLabel.handledProps = ['as', 'children', 'className', 'label'];
StatisticLabel._meta = {
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META.TYPES.VIEW
};

StatisticLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  label: customPropTypes.contentShorthand
} : {};

export default StatisticLabel;