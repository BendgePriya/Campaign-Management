import React, { Component } from 'react';
import { css } from 'emotion';

class DeleteConfirmation extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
    this.onCancelClicked = this.onCancelClicked.bind(this);
    this.node = null;
  }

  UNSAFE_componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClickOutside = () => {
    this.props.toggleDeleteConfirmModal()
  };

  handleClick = e => {
    if (this.node !== null && this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };

  onCancelClicked() {
    this.props.toggleDeleteConfirmModal()
  }

  onDeleteClicked() {
    this.props.onConfirmed(this.props.selected);
    this.props.toggleDeleteConfirmModal()
  }

  render() {
    return (
      <div className={modalClass}>
        <section className={modalMain} ref={node => (this.node = node)}>
          <div className={titleContainer}>
            <span className={title}>{this.props.title}</span>
          </div>
          <div className={subTitleContainer}>{this.props.message}</div>
          <div className={btn}>
            <div className={cancleBtn} onClick={this.onCancelClicked}>
              CANCEL
            </div>
            <div className={deleteButton} onClick={this.onDeleteClicked}>
              DELETE
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const modalClass = css({
  position: 'absolute',
  zIndex: 1,
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)'
});

const modalMain = css({
  position: 'fixed',
  background: 'white',
  width: '364px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  borderRadius: '4px',
  boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.18)'
});

const titleContainer = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '48px'
});

const subTitleContainer = css({
  padding: '0px 16px 16px 16px'
});

const title = css({
  paddingLeft: '16px',
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontWeight: 600,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.5,
  letterSpacing: 'normal',
  color: '#112138'
});

const btn = css({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '364px',
  height: '56px',
  borderRadius: '2px',
  backgroundColor: '#fafbfc'
});

const cancleBtn = css({
  width: '50%',
  padding: '16px',
  border: 'solid 1px #ebecf0',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '700',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.5,
  letterSpacing: '1px',
  textAlign: 'center',
  color: '#c1c7d0',
  cursor: 'pointer'
});

const deleteButton = css({
  border: 'solid 1px #ebecf0',
  width: '50%',
  padding: '16px',
  fontFamily: 'Open Sans',
  fontSize: '14px',
  fontWeight: '700',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.5,
  letterSpacing: '1px',
  textAlign: 'center',
  color: '#0151cb',
  cursor: 'pointer'
});

export default DeleteConfirmation;