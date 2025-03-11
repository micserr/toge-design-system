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
        <icon icon="ph:cloud-arrow-up" width="28px" height="28px"/>
        <spr-button size="small" tone="neutral" variant="secondary" @click="clickInitialInputFile" :disabled="props.disabled">Browse Files</spr-button>
        <label class="spr-body-sm-regular"> 
          or drop your files to upload
        </label>
      </div>
      <div v-if="props.showError" class="spr-grid spr-content-center spr-text-center spr-body-xs-regular spr-text-color-danger-base">
        <label v-for="(error, index) in props.errorMessages" :key="index">{{ error }}</label>
      </div>
      <div v-else :class="fileUploadClasses.sublabelClasses">
        <label>Supports: {{ supportedFileTypeLabel }} </label>
        <label>{{ props. maxFileSize }}MB maximum file size</label>
      </div>
    </div>
    <div v-else :class="fileUploadClasses.fileListClasses">
      <input 
        ref="listInputFileRef" 
        type="file" 
        multiple="false" 
        :accept="props.fileTypes.join(',')"
        hidden 
        @change="replaceFile"/>
      <div  v-for="(file, index) in modelValue" :id="index+''" class="spr-flex">
        <div class="spr-flex-auto spr-flex spr-gap-size-spacing-5xs spr-items-center">
          <icon icon="ph:check-circle-fill" width="16px" height="16px" class="spr-text-color-brand-base"/>
          <label class="spr-body-sm-regular">{{ file.name }}</label>
        </div>
        <div class="spr-w-fit spr-flex spr-gap-size-spacing-5xs">
          <spr-button size="small" tone="neutral" variant="secondary" @click="clickListInputFile(index)">Replace</spr-button>
          <spr-button size="small" tone="danger" variant="secondary" @click="deleteFile(index)"><icon icon="ph:trash"/></spr-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fileUploadEmitTypes, fileUploadPropTypes } from './file-upload';
import { useFileUpload } from './use-file-upload';
import SprButton from '../button/button.vue';
import { Icon } from '@iconify/vue';

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
