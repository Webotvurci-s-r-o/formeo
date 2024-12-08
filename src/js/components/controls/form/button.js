import i18n from 'mi18n'
import Control from '../control'

class ButtonControl extends Control {
  constructor() {
    const buttonConfig = {
      tag: 'button',
      attrs: {
        className: [{ label: i18n.get('className.grouped'), value: 'f-btn-group' }, { label: i18n.get('className.ungrouped'), value: 'f-field-group' }],
      },
      config: {
        label: i18n.get('controls.form.button'),
        hideLabel: true,
      },
      meta: {
        group: 'common',
        icon: 'button',
        id: 'button',
      },
      options: [
        {
          label: i18n.get('button'),
          type: ['button', 'reset'].map((buttonType, index) => ({
            label: i18n.get(`type.${buttonType}`),
            value: buttonType,
          })),
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
        },
      ],
    }
    super(buttonConfig)
  }
}

export default ButtonControl
