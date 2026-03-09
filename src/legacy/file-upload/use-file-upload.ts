import { ref, computed, ComputedRef } from 'vue';
import { useDropZone, useVModel } from '@vueuse/core';

import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { FileUploadEmitTypes, FileUploadPropTypes } from './file-upload';

interface FileUploadClasses {
  wrapperClasses: string;
  inputClasses: string;
  sublabelClasses: string;
  fileListClasses: string;
}

export const useFileUpload = (props: FileUploadPropTypes, emit: SetupContext<FileUploadEmitTypes>['emit']) => {
  const fileUploadRef = ref<HTMLElement | null>(null);
  // Hidden input file in initial display of file upload component
  const initialInputFileRef = ref<HTMLInputElement | null>(null);
  // Hidden shared input file in file list. Used for replace function.
  const listInputFileRef = ref<HTMLInputElement | null>(null);
  const fileArray = useVModel(props, 'modelValue', emit);
  const validationErrors = ref<string[]>([]);

  // Shared file change event for input file and drag & drop
  const onFileChangeHandler = (files: File[] | Event | null) => {
    if (props.disabled || files === null) return;

    let filesToValidate: File[] = [];

    // For input file event
    if(files instanceof Event) {
      const target = files.target as HTMLInputElement;
      const fileList = target.files;
      filesToValidate = fileList ? Array.from(fileList) : [];
    }
    // For drag and drop event
    else {
      filesToValidate = files;
    }

    // Validate file types
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    filesToValidate.forEach((file) => {
      if (props.fileTypes.includes(file.type)) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    // Update file array with valid files only
    fileArray.value = validFiles;

    // Emit validation errors if any invalid files were found
    if (invalidFiles.length > 0) {
      const errorMessage = invalidFiles.length === 1
        ? `File "${invalidFiles[0]}" is not a supported file type.`
        : `Files ${invalidFiles.map(name => `"${name}"`).join(', ')} are not supported file types.`;
      
      validationErrors.value = [errorMessage];
      emit('validation-error', validationErrors.value);
    } else {
      validationErrors.value = [];
      emit('validation-error', []);
    }
  }

  const onDropZoneOver = ( _files: File[] | null , event: DragEvent) => {
    if (props.disabled) {
      event.dataTransfer!.dropEffect = 'none'; // Update the cursor to 'not-allowed' on drop over
    }
  }

  const { isOverDropZone } = useDropZone(fileUploadRef, {
    onDrop: onFileChangeHandler,
    onOver: onDropZoneOver,
    multiple: props.multiple,
    dataTypes: props.fileTypes,
    preventDefaultForUnhandled: false,
  })

  const fileUploadClasses: ComputedRef<FileUploadClasses> = computed(() => {
    const wrapperClasses = classNames(
      'spr-rounded-border-radius-xl spr-mt-size-spacing-3xs spr-flex',
      {
        'spr-min-w-[56px] spr-py-size-spacing-2xs spr-px-size-spacing-xs': props.type !== 'center',
        'spr-min-h-[160px] spr-p-size-spacing-xs spr-flex-col spr-justify-center spr-items-center': props.type === 'center',
        'spr-border spr-border-solid spr-border-color-brand-base spr-background-color-single-active': isOverDropZone.value && !props.disabled,
        'file-upload_wrapper': !isOverDropZone.value && !props.showError,
        'file-upload_wrapper-error': !isOverDropZone.value && props.showError,
        'spr-border-color-base spr-background-color-surface': !props.disabled && !props.showError,
        'spr-border-color-danger-base spr-background-color-danger-weak': !props.disabled && props.showError,
        'spr-border-color-disabled spr-background-color-disabled': props.disabled,
        'spr-cursor-not-allowed file-upload_wrapper': props.disabled && isOverDropZone.value,
      }
    );

    const inputClasses = classNames(
      'spr-flex spr-items-center spr-gap-size-spacing-3xs',
      {
        'spr-flex-auto ': props.type !== 'center',
        'spr-mb-size-spacing-xs': props.type === 'center',
        'spr-text-color-strong': !props.disabled,
        'spr-text-color-disabled': props.disabled,
      }
    );

    const sublabelClasses = classNames(
      'spr-grid spr-content-center spr-body-xs-regular',
      {
        'spr-w-fit ': props.type !== 'center',
        'spr-text-color-base': !props.disabled,
        'spr-text-color-disabled': props.disabled,
      }
    );

    const fileListClasses = classNames(
      'spr-rounded-border-radius-xl',
      'spr-border spr-border-solid spr-border-color-weak spr-background-color',
      'spr-mt-size-spacing-3xs spr-px-size-spacing-xs spr-py-size-spacing-2xs',
      'spr-flex spr-flex-col spr-gap-size-spacing-xs',
      {
        'spr-min-h-[160px] spr-justify-center': props.type === 'center',
        'spr-text-color-strong': !props.disabled,
        'spr-text-color-disabled': props.disabled,
      }
    );

    return { 
      wrapperClasses, 
      inputClasses, 
      sublabelClasses,
      fileListClasses
    };
  });

  const deleteFile = (fileIndex: number) => {
    fileArray.value.splice(fileIndex, 1);
  };

  // Button function to trigger input file on initial display
  const clickInitialInputFile = () => {
    if (initialInputFileRef.value === null) return;

    initialInputFileRef.value.click();
  };

  const tempFileIndex = ref<number | null>(null);
  // Button function to trigger input file on file list
  const clickListInputFile = (fileIndex: number) => {
    if (listInputFileRef.value === null) return;

    listInputFileRef.value.click();
    tempFileIndex.value = fileIndex;
  };

  const replaceFile = (event: Event,) => {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length <= 0) return;
    if (tempFileIndex.value === null) return;

    fileArray.value[tempFileIndex.value] = target.files[0];
    tempFileIndex.value = null;
  }

  // Sublabel for supported file types
  const supportedFileTypeLabel = computed(() => {
    if (props.supportedFileTypeLabel) return props.supportedFileTypeLabel
    if (!props.fileTypes) return "";
  
    const parsedFileTypes = props.fileTypes.map((fileType) => {
      switch (fileType) {
        case 'application/msword':
          return "MS WORD";
        case 'application/vnd.ms-excel':
          return "MS EXCEL";
        case 'application/vnd.ms-powerpoint':
          return "MS PPT";
        case 'text/plain':
          return "TXT";
        case 'image/svg+xml':
          return "SVG";
        default:
          return fileType.split('/')[1].toUpperCase();
      };
    });

    return parsedFileTypes.join(', ');
  });

  const iconMap = computed(() => {
    return {
      'application/msword': 'ph:file-word-fill',
      'application/vnd.ms-excel': 'ph:file-excel-fill',
      'application/vnd.ms-powerpoint': 'ph:file-ppt-fill',
      'application/pdf': 'ph:file-pdf-fill',
      'text/plain': 'ph:file-text-fill',
      'image/svg+xml': 'ph:file-svg-fill',
      'image/png': 'ph:file-png-fill',
      'image/jpeg': 'ph:file-jpeg-fill',
      'image/jpg': 'ph:file-jpg-fill',
      'image/gif': 'ph:file-gif-fill',
      'image/webp': 'ph:file-webp-fill',
      'image/tiff': 'ph:file-tiff-fill',
      'image/bmp': 'ph:file-bmp-fill',
      'image/ico': 'ph:file-ico-fill',
      'image/heic': 'ph:file-heic-fill',
      'image/heif': 'ph:file-heif-fill',
      'image/heif-sequence': 'ph:file-heif-sequence-fill',
      'image/heic-sequence': 'ph:file-heic-sequence-fill',
    }
  });

  return {
    fileUploadRef,
    initialInputFileRef,
    listInputFileRef,
    fileUploadClasses,
    onFileChangeHandler,
    deleteFile,
    clickInitialInputFile,
    clickListInputFile,
    replaceFile,
    supportedFileTypeLabel,
    iconMap,
    validationErrors
  };
};
