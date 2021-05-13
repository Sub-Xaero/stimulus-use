import { StimulusUse, StimulusUseOptions } from '../stimulus-use'
import { DropzoneComposableController } from './dropzone-controller'

export interface DropzoneOptions extends StimulusUseOptions {
}

export class UseDropzone extends StimulusUse {
  controller: DropzoneComposableController
  options: DropzoneOptions
  targetElement: Element

  constructor(controller: DropzoneComposableController, options: DropzoneOptions = {}) {
    super(controller, options)

    this.controller = controller
    this.options = options
    this.targetElement = options.element ?? controller.element

    this.enhanceController()
    this.observe()
  }

  observe = () => {
    // this.targetElement.addEventListener('ondragover', this.dragover)
  }

  unobserve = () => {
    // this.targetElement.removeEventListener('ondragover', this.dragover)
  }

  private enhanceController() {
    const disconnect = () => {
      this.unobserve()
      this.controllerDisconnect()
    }
    Object.assign(this.controller, { disconnect })
  }

  private dragover() {

  }

}

export const useDropzone = (controller: DropzoneComposableController, options: DropzoneOptions = {}) => {
  const observer = new UseDropzone(controller, options)
  return [observer.observe, observer.unobserve]
}
