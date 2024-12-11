import i18n from 'mi18n'
import Control from '../control'

class DatetimeControl extends Control {
  constructor() {
    const dateInput = {
      tag: 'input',
      attrs: {
        type: 'datetime-local',
        required: false,
        className: '',
      },
      config: {
        label: i18n.get('controls.form.input.datetime'),
      },
      meta: {
        group: 'common',
        icon: 'calendar',
        id: 'datetime-input',
      },
    }
    super(dateInput)
  }
}

export default DatetimeControl
