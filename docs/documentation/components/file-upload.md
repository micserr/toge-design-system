---
outline: 'deep'
---

# File Upload

Input component to upload files.

## Basic Usage

This file upload component can be triggered via the button upload or dragging and dropping the files to the drop zone.

<div>
  <spr-file-upload 
    v-model="files1"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Attachments"
  />
</div>

```vue
<template>
  <div>
    <spr-file-upload
      v-model="files1"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Attachments"
      multiple
    />
  </div>
  <template>
    <script lang="ts" setup>
      import { ref } from 'vue';
      import SprFileUpload from '@/components/file-upload/file-upload.vue';

      const files1 = ref([]);
    </script></template
  >
</template>
```

## Type

There are two types for file upload: `default` and `center`.

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload 
    v-model="files2"
    type="default"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Default File Upload"
    multiple
  />
  <spr-file-upload 
    v-model="files3"
    type="center"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Center File Upload"
    multiple
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <spr-file-upload
      v-model="files2"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Default File Upload"
      multiple
    />
    <spr-file-upload
      v-model="files3"
      type="center"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Center File Upload"
      multiple
    />
  </div>
</template>
```

## Disabled

When the file upload component is disabled, it will prevent users from triggering the upload button and dragging & dropping files.

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload 
    v-model="files4"
    type="default"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Default File Upload"
    multiple
    disabled
  />
  <spr-file-upload 
    v-model="files5"
    type="center"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Center File Upload"
    multiple
    disabled
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <spr-file-upload
      v-model="files4"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Default File Upload"
      multiple
      disabled
    />
    <spr-file-upload
      v-model="files5"
      type="center"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Center File Upload"
      multiple
      disabled
    />
  </div>
</template>
```

## Error

For client-side validation of the file upload, we can show the error message as follows:

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload 
    v-model="files6"
    type="default"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Default File Upload"
    multiple
    :show-error="true"
    :error-messages="['File type is not supported. It must be a JPG or PNG file.']"
  />
  <spr-file-upload 
    v-model="files7"
    type="center"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="Center File Upload"
    multiple
    :show-error="true"
    :error-messages="['File size should not be greater than 10MB.']"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <spr-file-upload
      v-model="files6"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Default File Upload"
      multiple
      :show-error="true"
      :error-messages="['File type is not supported. It must be a JPG or PNG file.']"
    />
    <spr-file-upload
      v-model="files7"
      type="center"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Center File Upload"
      multiple
      :show-error="true"
      :error-messages="['File size should not be greater than 10MB.']"
    />
  </div>
</template>
```

## API Reference

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>Component size of the file upload</td>
      <td>'default' | 'center' </td>
      <td>'default'</td>
    </tr>
    <tr>
      <td>title</td>
      <td>The title label of the file upload component.</td>
      <td>String</td>
      <td></td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>Flag to enable multiple file uploading.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Flag to disable file uploading.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>The array of files.</td>
      <td>File[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>maxFileSize</td>
      <td>The maximum file size in MB allowed for file uploading.</td>
      <td>Number</td>
      <td>10</td>
    </tr>
    <tr>
      <td>fileTypes</td>
      <td>Array of file types allowed for file uploading.</td>
      <td>String[]</td>
      <td>['application/pdf','application/msword','application/vnd.ms-excel','application/vnd.ms-powerpoint','text/plain','text/csv','image/apng','image/avif','image/gif','image/jpeg','image/png','image/svg+xml','image/webp']</td>
    </tr>
    <tr>
      <td>showError</td>
      <td>Flag to display the error message.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>errorMessages</td>
      <td>Array of error messages to display.</td>
      <td>String[]</td>
      <td>[]</td>
    </tr>
  </tbody>
</table>

<script lang="ts" setup>
import { ref } from 'vue';
import SprFileUpload from '@/components/file-upload/file-upload.vue';

const files1 = ref([]);
const files2 = ref([]);
const files3 = ref([]);
const files4 = ref([]);
const files5 = ref([]);
const files6 = ref([]);
const files7 = ref([]);
</script>
