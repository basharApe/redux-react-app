import React, {Component} from 'react'
import {sortBy} from 'lodash'
import {Row, Col} from 'antd'
import UserListItem from './UserListItem'

class UserList extends Component {
  render() {
    const {users, deleteUser, updateUser} = this.props
    return (
      <Row gutter={8} type="flex" justify="space-between">
        {sortBy(users, ['id']).map(user => (
          <Col key={user.id} md={8} sm={12} xs={24} style={{marginBottom: 8}}>
            <UserListItem
              user={user}
              deleteUser={deleteUser}
              updateUser={updateUser}
            />
          </Col>
        ))}
      </Row>
    )
  }
}

export default UserList
