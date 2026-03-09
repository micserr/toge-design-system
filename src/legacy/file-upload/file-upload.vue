<template>
  <div class="media-upload">
    <label v-if="props.title" class="spr-body-md-regular">
      {{ props.title }}
    </label>
    <div v-if="props.modelValue.length <= 0" ref="fileUploadRef" :class="fileUploadClasses.wrapperClasses">
      <div :class="fileUploadClasses.inputClasses">
        <input
          ref="initialInputFileRef"
          type="file"
          hidden
          :multiple="props.multiple"
          :disabled="props.disabled"
          :accept="props.fileTypes.join(',')"
          @change="onFileChangeHandler"
        />
        <icon icon="ph:cloud-arrow-up" width="28px" height="28px" />
        <spr-button
          size="small"
          tone="neutral"
          variant="secondary"
          :disabled="props.disabled"
          @click="clickInitialInputFile"
          >Browse Files</spr-button
        >
        <label v-if="!props.hideDropzoneLabel" class="spr-body-sm-regular">
          {{ 'or drop your ' + (props.multiple ? 'files' : 'file') + ' to upload' }}
        </label>
      </div>
      <div
        v-if="props.showError"
        class="spr-body-xs-regular spr-text-color-danger-base spr-grid spr-content-center spr-text-center"
      >
        <label v-for="(error, index) in props.errorMessages" :key="index">{{ error }}</label>
      </div>
      <div v-else :class="fileUploadClasses.sublabelClasses">
        <label v-if="props.showSupportedFileTypeLabel">Supports: {{ supportedFileTypeLabel }} </label>
        <label>{{ props.maxFileSize }}MB maximum file size</label>
      </div>
    </div>
    <div v-else :class="fileUploadClasses.fileListClasses">
      <input
        ref="listInputFileRef"
        type="file"
        multiple="false"
        :accept="props.fileTypes.join(',')"
        hidden
        @change="replaceFile"
      />
      <div v-for="(file, index) in modelValue" :key="index" class="spr-flex spr-flex-col spr-gap-size-spacing-4xs">
        <div class="spr-flex spr-justify-between spr-gap-2">
          <div
            class="spr-flex spr-flex-auto spr-items-center spr-gap-2 spr-overflow-hidden spr-whitespace-break-spaces spr-break-words"
          >
            <icon
              v-if="!props.hideFilePreviewIcon"
              :icon="iconMap[file.type as keyof typeof iconMap] || 'ph:check-circle-fill'"
              width="20px"
              height="20px"
              class="spr-text-color-brand-base spr-flex-none"
            />
            <label class="spr-body-sm-regular">{{ file ? file.name : '' }}</label>
          </div>
          <div class="spr-flex spr-items-start spr-gap-2 spr-gap-size-spacing-5xs">
            <spr-button
              size="small"
              tone="neutral"
              variant="secondary"
              :disabled="props.disabled"
              @click="clickListInputFile(index)"
              >Replace</spr-button
            >
            <spr-button
              size="small"
              tone="danger"
              variant="secondary"
              :disabled="props.disabled"
              @click="deleteFile(index)"
              ><icon icon="ph:trash"
            /></spr-button>
          </div>
        </div>
        <div
          v-if="props.showError && props.errorMessages[index]"
          class="spr-body-sm-regular spr-text-color-danger-base spr-flex spr-gap-size-spacing-5xs"
        >
          <Icon class="spr-flex-none" icon="ph:warning-circle-fill" width="20px" height="20px" />
          <span class="spr-self-start">{{ props.errorMessages[index] }}</span>
        </div>
      </div>
      <slot name="file-upload-progress-bar">
        <div v-if="props.showProgress" class="spr-flex spr-gap-size-spacing-5xs">
          <spr-progress-bar
            :value="props.progressValue"
            :max="100"
            :color="props.showError ? 'danger' : 'success'"
            size="sm"
            class="spr-w-full"
            :label="false"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

import { fileUploadEmitTypes, fileUploadPropTypes } from './file-upload';
import { useFileUpload } from './use-file-upload';

import SprButton from '../button/button.vue';
import SprProgressBar from '../progress-bar/progress-bar.vue';

const props = defineProps(fileUploadPropTypes);
const emit = defineEmits(fileUploadEmitTypes);

const {
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
} = useFileUpload(props, emit);
</script>

<style lang="scss" scoped>
.file-upload {
  &_wrapper {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23B8C1C0FF' stroke-width='1' stroke-dasharray='8%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

  &_wrapper-error {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23DA2F38FF' stroke-width='1' stroke-dasharray='8%2c6' stroke-dashoffset='16' stroke-linecap='round'/%3e%3c/svg%3e");
  }
}
</style>
