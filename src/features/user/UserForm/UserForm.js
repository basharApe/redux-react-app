import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Row, Col, Divider, Button} from 'antd'
import {reduxForm, Field} from 'redux-form'
import {updateUser} from '../userActions'
import {userFields} from './userFields'

const actions = {
  updateUser,
}
class UserForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateUser(values)
      this.props.onCancel()
    }
  };
  render() {
    const {invalid, submitting, pristine} = this.props
    return (
      <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Row>
          <Col span={24}>
            <Field
              {...userFields.name}
            />
            <Field
              {...userFields.email}
            />
            <Field
              {...userFields.city}
            />
            <Field
              {...userFields.phone}
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <Field
              {...userFields.website}
            />
            <Field
              {...userFields.company}
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <Button
              disabled={invalid || submitting || pristine}
              htmlType="submit"
              type="primary"
            >
                Submit
            </Button>
          </Col>
          <Col span={12}>
            <Button onClick={this.props.onCancel} >
                Cancel
            </Button>
          </Col>
        </Row>
      </Form>

    )
  }
}

const UserReduxForm = reduxForm({
  form: 'userform',
  enableReinitialize: true,
})(UserForm)

const mapState = ({users}, ownProps) => {
  const userId = ownProps.user.id
  let user = {}
  if (userId && users.length > 0) {
    user = users.filter(user => user.id === userId)[0]
  }

  return {
    initialValues: user,
  }
}

export default connect(mapState, actions)(UserReduxForm)
