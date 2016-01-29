import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import isNil from 'lodash/isNil';

import style from './style.scss';
import {COMPONENT_SIZES} from '../../util/constants';
import joinObjects from '../../util/join-objects';

export default class Switch extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    size: PropTypes.oneOf(COMPONENT_SIZES),
    style: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  handleInputRef = (inputRef) => this.inputRef = inputRef;

  handleLabelClick = (event) => {
    const {id, checked, onChange} = this.props;

    if (!id) {
      if (isNil(checked)) {
        this.inputRef.click();
      } else if (onChange) {
        onChange(event);
      }
    }
  };

  handleInputChange = (event) => {
    const {id, onChange} = this.props;

    if (id && onChange) {
      onChange(event);
    }
  };

  getClassNames = () => {
    const {size} = this.props;

    return joinObjects(style, {
      switch: true,
      [size]: COMPONENT_SIZES.includes(size)
    });
  };

  render() {
    const {className, id, style: stylesWtf} = this.props;

    return (
      <div className={cx(className, this.getClassNames())} style={stylesWtf}>
        <input
          {...this.props}
          className={style['switch-input']}
          onChange={this.handleInputChange}
          ref={this.handleInputRef}
          size={null}
          type='checkbox'
        />
        <label
          className={style['switch-paddle']}
          htmlFor={id}
          onClick={this.handleLabelClick}
        />
      </div>
    );
  }
}