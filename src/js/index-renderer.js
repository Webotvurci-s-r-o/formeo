import Renderer from './renderer'

if (window !== undefined) {
  window.FormeoRenderer = Renderer
}

export const FormeoRenderer = Renderer

export default { FormeoRenderer }
