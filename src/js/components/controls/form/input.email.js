import i18n from 'mi18n';
import Control from '../control';

class EmailControl extends Control {
  constructor() {
    const emailInput = {
      tag: 'input',
      attrs: {
        required: true,
        type: 'email',
        className: '',
      },
      config: {
        label: i18n.get('controls.form.input.email'),
      },
      meta: {
        group: 'common',
        icon: '@',
        id: 'email-input',
      },
    };
    super(emailInput);
  }
}

export default EmailControl;
