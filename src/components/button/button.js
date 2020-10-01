import React from 'react';
import Icon from 'react-fa';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export default class Button extends React.Component {
  static propTypes = {
    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.string,
    buttonClickCallback: () => {},
    btnClassName: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    iconStyle: PropTypes.object,
    disabled: PropTypes.bool
  };

  static defaultProps = {};

  render() {
    const {
      buttonContainerStyle,
      btnClassName,
      text,
      icon,
      iconStyle,
      disabled
    } = this.props;
    return (
      <div className={buttonContainerStyle}>
        <button
          className={
            defaultButtonClass +
            ' ' +
            btnClassName +
            (disabled ? ' ' + disabledStyle : '')
          }
          onClick={this._buttonClick}
        >
          {text ? (
            <span className={spanClass + ' ' + this.props.buttonTextStyle}>
              {text}
            </span>
          ) : icon ? (
            <Icon name={icon} className="icon" style={iconStyle} />
          ) : null}
        </button>
      </div>
    );
  }

  _buttonClick = () => {
    this.props.buttonClickCallback();
  };
}

const defaultButtonClass = css({
  backgroundColor: 'transparent',
  border: 'none',
  fontFamily: 'Open Sans',
  color: '#ffffff',
  position: 'relative',
  margin: 0,
  minWidth: '64px',
  padding: '12px 12px 12px 12px',
  display: 'inline-block',
  overflow: 'hidden',
  willChange: 'box-shadow',
  transition:
    'box-shadow 0.15s cubic-bezier(0.4, 0, 1, 1),background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),color 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  outline: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  textAlign: 'center',
  verticalAlign: 'middle',
  textTransform: 'uppercase',
  '&:hover': {
    fontWeight: 'bolder',
  },
  '&:active': {
    fontWeight: 'bolder'
  },
  '&:focus': {
    fontWeight: 'bolder',
  }
});

const disabledStyle = css({
  backgroundColor: '#b2d4ff',
  border: 'solid 2px #b2d4ff',
  '&:hover': {
    backgroundColor: '#b2d4ff',
    border: 'solid 2px #b2d4ff'
  },
  '&:active': {
    backgroundColor: '#b2d4ff',
    border: 'solid 2px #b2d4ff'
  },
  '&:focus': {
    backgroundColor: '#b2d4ff',
    border: 'solid 2px #b2d4ff'
  }
});

const spanClass = css({
  color: '#ffffff',
  fontSize: '14px',
  letterSpacing: '1px',
  lineHeight: '21px'
});