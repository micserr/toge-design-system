export type FileUploadType = 'default' | 'center'

export interface FileUploadProps {
  type?: FileUploadType
  title?: string
  disabled?: boolean
  multiple?: boolean
  maxFileSize?: number
  fileTypes?: string[]
  showError?: boolean
  errorMessages?: string[]
  hideFilePreviewIcon?: boolean
  hideDropzoneLabel?: boolean
  showSupportedFileTypeLabel?: boolean
  supportedFileTypeLabel?: string
  showProgress?: boolean
  progressValue?: number
}

export interface FileUploadEmits {
  (e: 'validation-error', errors: string[]): void
}
