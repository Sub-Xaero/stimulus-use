import { Context, Controller } from 'stimulus'
import { DropzoneOptions, useDropzone } from './use-dropzone'

export class DropzoneComposableController extends Controller {
}

export class DropzoneController extends DropzoneComposableController {

  options!: DropzoneOptions

  constructor(context: Context) {
    super(context)
    requestAnimationFrame(() => {
      const [observe, unobserve] = useDropzone(this, this.options)
      Object.assign(this, { observe, unobserve })
    })
  }

  declare observe: () => void
  declare unobserve: () => void

}
