import i18n from 'mi18n'
import Control from '../control'

class CustomHtmlControl extends Control {
  constructor() {
    const paragraphConfig = {
      tag: 'div',
      tagEditor: 'textarea',
      attrs: {
        className: 'custom-html',
      },
      config: {
        label: i18n.get('controls.html.html'),
        hideLabel: true,
        editableContent: true,
      },
      meta: {
        group: 'html',
        icon: 'textarea',
        id: 'custom-html',
      },
      // eslint-disable-next-line
      content:
        'zde si doplňte libovolné html...',
    }
    super(paragraphConfig)
  }
}

export default CustomHtmlControl
