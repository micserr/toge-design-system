import classNames from 'classnames'
import type { FileUploadType } from './file-upload.types'

export interface FileUploadStyleState {
  type: FileUploadType
  isDragOver: boolean
  disabled: boolean
  showError: boolean
}

export function getDropzoneClasses(s: FileUploadStyleState): string {
  return classNames(
    'spr:rounded-border-radius-xl spr:mt-size-spacing-3xs spr:flex',
    {
      'spr:min-w-[56px] spr:py-size-spacing-2xs spr:px-size-spacing-xs': s.type !== 'center',
      'spr:min-h-[160px] spr:p-size-spacing-xs spr:flex-col spr:justify-center spr:items-center':
        s.type === 'center',
      'spr:border spr:border-solid spr-border-color-brand-base spr-background-color-single-active':
        s.isDragOver && !s.disabled,
      'file-upload-wrapper': !s.isDragOver && !s.showError,
      'file-upload-wrapper-error': !s.isDragOver && s.showError,
      'spr-border-color-base spr-background-color-surface': !s.disabled && !s.showError && !s.isDragOver,
      'spr-border-color-danger-base spr-background-color-danger-weak': !s.disabled && s.showError && !s.isDragOver,
      'spr-border-color-disabled spr-background-color-disabled': s.disabled,
      'spr:cursor-not-allowed': s.disabled && s.isDragOver,
    },
  )
}

export function getDropzoneInputClasses(s: FileUploadStyleState): string {
  return classNames('spr:flex spr:items-center spr:gap-size-spacing-3xs', {
    'spr:flex-auto': s.type !== 'center',
    'spr:mb-size-spacing-xs': s.type === 'center',
    'spr-text-color-strong': !s.disabled,
    'spr-text-color-disabled': s.disabled,
  })
}

export function getDropzoneSublabelClasses(s: FileUploadStyleState): string {
  return classNames('spr:grid spr:content-center spr-body-xs-regular', {
    'spr:w-fit': s.type !== 'center',
    'spr-text-color-base': !s.disabled,
    'spr-text-color-disabled': s.disabled,
  })
}

export function getFileListClasses(s: FileUploadStyleState): string {
  return classNames(
    'spr:rounded-border-radius-xl',
    'spr:border spr:border-solid spr-border-color-weak spr-background-color',
    'spr:mt-size-spacing-3xs spr:px-size-spacing-xs spr:py-size-spacing-2xs',
    'spr:flex spr:flex-col spr:gap-size-spacing-xs',
    {
      'spr:min-h-[160px] spr:justify-center': s.type === 'center',
      'spr-text-color-strong': !s.disabled,
      'spr-text-color-disabled': s.disabled,
    },
  )
}
