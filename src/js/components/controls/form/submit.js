import i18n from 'mi18n'
import Control from '../control'

class SubmitControl extends Control {
  constructor() {
    const buttonConfig = {
      tag: 'button',
      attrs: {
        className: [{ label: i18n.get('className.grouped'), value: 'f-btn-group' }, { label: i18n.get('className.ungrouped'), value: 'f-field-group' }],
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
              label: i18n.get('type.submit'),
              value: 'submit',
              selected: true,
            },
          ],
          className: [
            {
              label: i18n.get('styles.default'),
              value: '',
              selected: true,
            },
            {
              label: i18n.get('styles.primary'),
              value: 'primary',
            },
            {
              label: i18n.get('styles.danger'),
              value: 'error',
            },
            {
              label: i18n.get('styles.success'),
              value: 'success',
            },
            {
              label: i18n.get('styles.warning'),
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
