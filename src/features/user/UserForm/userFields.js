import {generateKeys} from '../../../app/common/util/utils'
import {TextField} from '../../../app/common/form'

const userFields = generateKeys({

  name: {
    name: 'name',
    label: 'Full name',
    placeholder: 'Enter full name',
    component: TextField,
    required: true,
    validate: v => (v ? '' : 'Required'),
  },
  email: {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email address',
    component: TextField,
    validate: v => {
      if (!v) {
        return 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)) {
        return 'Invalid email address'
      }
      return ''
    },
  },
  city: {
    name: 'address.city',
    label: 'City',
    placeholder: 'Enter city name',
    component: TextField,
    required: true,
    validate: v => (v ? '' : 'Required'),
  },
  phone: {
    name: 'phone',
    label: 'Phone number',
    placeholder: 'Enter phone number',
    component: TextField,
    required: true,
    validate: v => (v ? '' : 'Required'),
  },
  website: {
    name: 'website',
    label: 'Website',
    placeholder: 'Enter website URL',
    component: TextField,
  },
  company: {
    name: 'company.name',
    label: 'Company',
    placeholder: 'Enter company name',
    component: TextField,
  },
})

export {userFields}
