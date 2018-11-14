import React, {Component} from 'react'
import {Row, Col} from 'antd'
import {connect} from 'react-redux'
import {deleteUser} from '../userActions'
import {openModal} from '../../modals/modalActions'
import UserList from '../UserList/UserList'
import LoadingComponent from '../../../app/layout/LoadingComponent'

const mapState = ({users, async}) => ({
  users,
  loading: async.loading,
})

const actions = {
  deleteUser,
  openModal,
}

class UserDashboard extends Component {
  handleDeleteUser = userId => () => {
    this.props.deleteUser(userId)
  };

  handleAddUser = () => {
    this.props.openModal('UserModal')
  }

  handleUpdateUser = (user) => () => {
    this.props.openModal('UserModal', {user})
  }

  render() {
    const {users, loading} = this.props
    if (loading) return <LoadingComponent inverted />

    return (
      <Row style={{padding: 20}}>
        <Col span={24}>
          <UserList
            deleteUser={this.handleDeleteUser}
            addUser={this.handleUpdateUser}
            updateUser={this.handleUpdateUser}
            users={users}
          />
        </Col>
      </Row>
    )
  }
}

export default connect(mapState, actions)(UserDashboard)
