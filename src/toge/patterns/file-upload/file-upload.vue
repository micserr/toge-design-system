<template>
  <div>
    <div
      :class="dropzoneClasses"
      :aria-disabled="props.disabled || undefined"
      @dragover.prevent="!props.disabled && (isDragOver = true)"
      @dragleave.prevent="isDragOver = false"
      @drop.prevent="handleDrop"
    >
      <div :class="inputAreaClasses">
        <label
          class="spr-flex spr-items-center spr-gap-size-spacing-3xs spr-cursor-pointer"
          :class="{ 'spr-cursor-not-allowed': props.disabled }"
        >
          <Icon icon="ph:upload-simple" class="spr-h-5 spr-w-5 spr-flex-none" />
          <div v-if="!props.hideDropzoneLabel" :class="sublabelClasses">
            <span class="spr-body-sm-regular-medium">{{ props.title || 'Click to upload' }}</span>
            <span class="spr-body-xs-regular">or drag and drop</span>
          </div>
          <input
            type="file"
            class="spr-hidden"
            :multiple="props.multiple"
            :accept="props.fileTypes?.join(',')"
            :disabled="props.disabled"
            @change="handleFileInput"
          />
        </label>
      </div>
      <span
        v-if="props.showSupportedFileTypeLabel && !props.hideDropzoneLabel"
        class="spr-body-xs-regular spr-text-color-supporting spr-mt-size-spacing-3xs"
      >
        {{ props.supportedFileTypeLabel || (props.fileTypes?.join(', ') ?? '') }}
      </span>
    </div>

    <div v-if="model.length > 0" :class="fileListClasses">
      <div
        v-for="(file, index) in model"
        :key="index"
        class="spr-flex spr-items-center spr-justify-between spr-gap-size-spacing-3xs"
      >
        <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs spr-min-w-0">
          <Icon v-if="!props.hideFilePreviewIcon" icon="ph:file" class="spr-flex-none" />
          <span class="spr-body-sm-regular spr-truncate">{{ file.name }}</span>
        </div>
        <button type="button" class="spr-flex-none" aria-label="Remove file" @click="removeFile(index)">
          <Icon icon="ph:x" />
        </button>
      </div>
    </div>

    <div v-if="props.showProgress" class="spr-mt-size-spacing-3xs">
      <div class="spr-h-1 spr-w-full spr-rounded-full spr-background-color-surface spr-overflow-hidden">
        <div
          class="spr-h-full spr-background-color-brand-base spr-transition-all"
          :style="{ width: `${props.progressValue}%` }"
        />
      </div>
    </div>

    <div v-if="props.showError && props.errorMessages?.length" class="spr-mt-size-spacing-3xs">
      <p
        v-for="(msg, i) in props.errorMessages"
        :key="i"
        class="spr-body-xs-regular spr-text-color-danger-base"
      >{{ msg }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { FileUploadProps, FileUploadEmits } from './file-upload.types'
import { useFileUploadState } from './file-upload.state'
import {
  getDropzoneClasses,
  getDropzoneInputClasses,
  getDropzoneSublabelClasses,
  getFileListClasses,
} from './file-upload.styles'

const props = withDefaults(defineProps<FileUploadProps>(), {
  type: 'default',
  disabled: false,
  multiple: false,
  maxFileSize: 10485760,
  fileTypes: () => ['image/*', 'application/pdf'],
  showError: false,
  errorMessages: () => [],
  hideFilePreviewIcon: false,
  hideDropzoneLabel: false,
  showSupportedFileTypeLabel: true,
  showProgress: false,
  progressValue: 0,
})

const emit = defineEmits<FileUploadEmits>()

const model = defineModel<File[]>({ default: () => [] })

const { isDragOver } = useFileUploadState()

const styleState = computed(() => ({
  type: props.type!,
  isDragOver: isDragOver.value,
  disabled: props.disabled!,
  showError: props.showError!,
}))

const dropzoneClasses = computed(() => getDropzoneClasses(styleState.value))
const inputAreaClasses = computed(() => getDropzoneInputClasses(styleState.value))
const sublabelClasses = computed(() => getDropzoneSublabelClasses(styleState.value))
const fileListClasses = computed(() => getFileListClasses(styleState.value))

function validateAndAdd(files: FileList) {
  const errors: string[] = []
  const valid: File[] = []
  Array.from(files).forEach((file) => {
    if (file.size > props.maxFileSize!) {
      errors.push(`${file.name} exceeds the maximum file size.`)
    } else {
      valid.push(file)
    }
  })
  if (valid.length) model.value = props.multiple ? [...model.value, ...valid] : valid
  if (errors.length) emit('validation-error', errors)
}

function handleFileInput(evt: Event) {
  const input = evt.target as HTMLInputElement
  if (input.files) validateAndAdd(input.files)
}

function handleDrop(evt: DragEvent) {
  isDragOver.value = false
  if (props.disabled || !evt.dataTransfer?.files) return
  validateAndAdd(evt.dataTransfer.files)
}

function removeFile(index: number) {
  model.value = model.value.filter((_, i) => i !== index)
}
</script>
