import i18n from 'mi18n';
import Control from '../control';

class PhoneControl extends Control {
  constructor() {
    const phoneInput = {
      tag: 'input',
      attrs: {
        type: 'tel',
        required: false,
        className: '',
        pattern: '^((\\+|00)\\d{1,3})?[- .]?\\d{3,4}[- .]?\\d{3,4}[- .]?\\d{0,4}$',
        title: i18n.get('phonePattern'),
      },
      config: {
        label: i18n.get('controls.form.input.phone'),
      },
      meta: {
        group: 'common',
        icon: 'phone-receiver',
        id: 'phone-input',
      },
    };
    super(phoneInput);
  }
}

export default PhoneControl;
