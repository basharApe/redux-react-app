import React, {Component} from 'react'
import {get} from 'lodash'
import Card from '../../../app/components/card/card'


class UserListItem extends Component {
  handleDoubleClick = (updateUser, user) => () => {
    updateUser(user)()
  }
  render() {
    const {user, updateUser} = this.props
    return (
      <div onDoubleClick={this.handleDoubleClick(updateUser, user)}>
        <Card title={user.name || 'No name'}>
          {user.email && <p>{get(user, 'email')}</p>}
          {user.address && <p>{get(user.address, 'city')}</p>}
          {user.phone && <p>{get(user, 'phone')}</p>}
          {user.website && <p>{get(user, 'website')}</p>}
          {user.company && <p>{get(user.company, 'name')}</p>}
        </Card>
      </div>
    )
  }
}

export default UserListItem
