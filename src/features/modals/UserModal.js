import React, {Component} from 'react'
import {Modal} from 'antd'
import {connect} from 'react-redux'
import UserForm from '../user/UserForm/UserForm'
import {closeModal} from './modalActions'

const actions = {closeModal}

class UserModal extends Component {
  render() {
    const {user} = this.props
    return (
      <Modal
        size="mini"
        visible
        onCancel={this.props.closeModal}
        footer=""
      >
        <UserForm user={user} onCancel={this.props.closeModal} />
      </Modal>
    )
  }
}

export default connect(null, actions)(UserModal)
