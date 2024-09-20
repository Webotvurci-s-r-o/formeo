import i18n from 'mi18n'
import Control from '../control'

class ConsentCheckboxControl extends Control {
  constructor() {
    const checkboxGroup = {
      tag: 'input',
      attrs: {
        type: 'checkbox',
        required: false,
      },
      config: {
        label: i18n.get('controls.form.consent-checkbox'),
        hideLabel: true,
        disabledAttrs: ['type'],
        'consent-checkbox': {
          panels: {
            options: {
              disabled: [],
              locked: [
                '0'
              ]
            }
          }
        }
      },
      meta: {
        group: 'common',
        icon: 'checkbox',
        id: 'consent-checkbox',
        multiple: true,
        edit: {
          options: false,
        },
      },
      options: [
        {
          label: i18n.get('consent'),
          value: '',
          checked: false,
        }
      ]
    }
    super(checkboxGroup)
  }
}

export default ConsentCheckboxControl
