import React, {PureComponent} from 'react'
import {Form} from 'antd'
import {BaseComponentWrapper} from './BaseComponent.style'
const FormItem = Form.Item
export default function createComponent(UiComponent, mapProps) {
  class InputComponent extends PureComponent {
    getRenderedComponent() {
      return this.componentRef
    }

    initComponentRef = r => {
      this.componentRef = r
    };

    render() {
      const {
        label,
        labelCol,
        wrapperCol, help, extra,
        validateStatus,
        hasFeedback = true,
        colon,
        required,
        ...rest
      } = mapProps(
        this.props
      )

      return (
        <BaseComponentWrapper>
          <FormItem
            label={label}
            ref={this.initComponentRef}
            wrapperCol={wrapperCol}
            labelCol={labelCol}
            help={help}
            hasFeedback={hasFeedback}
            extra={extra}
            validateStatus={validateStatus}
            colon={colon}
            required={required}
          >
            <UiComponent {...rest} />
          </FormItem>
        </BaseComponentWrapper>
      )
    }
  }
  return InputComponent
}
