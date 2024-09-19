import i18n from 'mi18n'
import Control from '../control'

class SubmitControl extends Control {
  constructor() {
    const buttonConfig = {
      tag: 'button',
      attrs: {
        className: [{ label: 'grouped', value: 'f-btn-group' }, { label: 'ungrouped', value: 'f-field-group' }],
      },
      config: {
        label: i18n.get('controls.form.submit'),
        hideLabel: true,
      },
      meta: {
        group: 'common',
        icon: 'button',
        id: 'submit',
      },
      options: [
        {
          label: i18n.get('submit'),
          type: [
            {
              label: 'submit',
              value: 'submit',
              selected: true,
            },
            {
              label: 'button',
              value: 'button',
            },
            {
              label: 'reset',
              value: 'reset',
            },
          ],
          className: [
            {
              label: 'default',
              value: '',
              selected: true,
            },
            {
              label: 'primary',
              value: 'primary',
            },
            {
              label: 'danger',
              value: 'error',
            },
            {
              label: 'success',
              value: 'success',
            },
            {
              label: 'warning',
              value: 'warning',
            },
          ],
        }
      ],
    }
    super(buttonConfig)
  }
}

export default SubmitControl
