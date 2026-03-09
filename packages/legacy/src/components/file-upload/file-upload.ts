import type { PropType, ExtractPropTypes } from 'vue';

export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

const FILE_UPLOAD_TYPE = ['default', 'center'] as const;

const FILE_UPLOAD_DOCUMENT_TYPE = [
  'application/pdf',
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'text/plain',
  'text/csv'
];
const FILE_UPLOAD_IMAGE_TYPE = [
  'image/apng',
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/webp'
];
const FILE_UPLOAD_VALID_TYPE = [...FILE_UPLOAD_IMAGE_TYPE, ...FILE_UPLOAD_DOCUMENT_TYPE];

export const fileUploadPropTypes = {
  /**
   * @description Media upload type
   */
  type: {
    type: String as PropType<(typeof FILE_UPLOAD_TYPE)[number]>,
    validator: (value: (typeof FILE_UPLOAD_TYPE)[number]) => FILE_UPLOAD_TYPE.includes(value),
    default: 'default',
  },
  title: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Array<File>,
    required: true,
    default: [],
  },
  maxFileSize: {
    type: Number,
    default: 10, // 10MB
  },
  fileTypes: {
    type: Array as PropType<(typeof FILE_UPLOAD_VALID_TYPE)>,
    validator: (fileTypes: (typeof FILE_UPLOAD_VALID_TYPE)) => fileTypes.every(fileType => FILE_UPLOAD_VALID_TYPE.includes(fileType)),
    default: () => [...FILE_UPLOAD_VALID_TYPE], // If null, accept all file types
  },
  showError: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array as PropType<string[]>,
    default: [],
  },
  hideFilePreviewIcon: {
    type: Boolean,
    default: false,
  },
  hideDropzoneLabel: {
    type: Boolean,
    default: false,
  },
  showSupportedFileTypeLabel: {
    type: Boolean,
    default: true,
  },
  supportedFileTypeLabel: {
    type: String,
    default: null,
  },
  showProgress: {
    type: Boolean,
    default: false,
  },
  progressValue: {
    type: Number,
    default: 0,
  },
};

export const fileUploadEmitTypes = {
  'update:modelValue': () => true,
  'validation-error': () => true,
}

export type FileUploadPropTypes = ExtractPropTypes<typeof fileUploadPropTypes>;
export type FileUploadEmitTypes = typeof fileUploadEmitTypes;
export type FileUploadType = FileUploadPropTypes['type'];
