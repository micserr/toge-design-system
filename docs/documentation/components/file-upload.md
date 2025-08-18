---
outline: 'deep'
description: 'The File Upload component provides an intuitive interface for users to upload files through both drag-and-drop and traditional file selection methods. It supports validation for file types and sizes, and provides visual feedback for errors.'
---

# File Upload

The File Upload component provides an intuitive interface for users to upload files through both drag-and-drop and traditional file selection methods. It supports validation for file types and sizes, and provides visual feedback for errors.

## Basic Usage

The File Upload component offers two methods for uploading files:

1. Clicking the "Browse Files" button to open the file selector
2. Dragging and dropping files directly onto the upload area

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
</template>
<script lang="ts" setup>
import { ref } from 'vue';

// Initialize an empty array to store uploaded files
const files1 = ref([]);
</script>
```

:::tip Key Features

- **Validation**: Automatically validates file types and sizes
- **Multiple Files**: Use the `multiple` prop to allow uploading multiple files
- **Feedback**: Provides visual feedback for error states
- **File Management**: Allows replacing or deleting uploaded files
  :::

## Types

The File Upload component supports type for two layout variants:

- `default`: Standard horizontal layout for compact spaces
- `center`: Centered vertical layout with more prominent drop area

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
    <!-- Default layout - horizontal -->
    <spr-file-upload
      v-model="files2"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Default File Upload"
      multiple
    />

    <!-- Center layout - vertical with more prominent drop area -->
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

<script setup>
import { ref } from 'vue';

const files2 = ref([]);
const files3 = ref([]);
</script>
```

:::tip Layout Selection

- Use the `default` layout when space is limited or for inline file uploads
- Use the `center` layout for dedicated upload areas or when you want to emphasize the drag and drop functionality
  :::

## Disabled State

The File Upload component can be disabled to prevent user interaction. When disabled:

- The upload button is non-clickable
- Drag and drop functionality is disabled
- The component displays with muted colors

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
    <!-- Disabled default layout -->
    <spr-file-upload
      v-model="files4"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="Default File Upload"
      multiple
      disabled
    />

    <!-- Disabled center layout -->
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

<script setup>
import { ref } from 'vue';

const files4 = ref([]);
const files5 = ref([]);
</script>
```

:::tip When to Use Disabled State

- During form submission to prevent additional uploads
- When the user doesn't have permission to upload files
- When the system is processing previously uploaded files
  :::

## Error Handling

The File Upload component provides built-in error display functionality to provide users with clear feedback when validation fails. Common validation scenarios include:

- File type not supported
- File size exceeds the maximum allowed
- Other custom validation rules

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
    <!-- File type error example -->
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

    <!-- File size error example -->
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

<script setup>
import { ref } from 'vue';

const files6 = ref([]);
const files7 = ref([]);

// In a real application, you would validate files and update error messages:
const validateFile = (file) => {
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    return 'File type is not supported. It must be a JPG or PNG file.';
  }

  if (file.size > 10 * 1024 * 1024) {
    // 10MB in bytes
    return 'File size should not be greater than 10MB.';
  }

  return null; // No error
};
</script>
```

## Customizing File Type Labels

By default, the component shows a list of supported file types in the upload area. You can customize this text using the `supportedFileTypeLabel` prop.

```vue
<template>
  <!-- Default file type display -->
  <spr-file-upload v-model="files" :file-types="['image/jpeg', 'image/png']" />

  <!-- Custom file type label -->
  <spr-file-upload
    v-model="files"
    :file-types="['image/jpeg', 'image/png']"
    supportedFileTypeLabel="JPG and PNG images only"
  />

  <!-- Hide dropzone label entirely -->
  <spr-file-upload v-model="files" :file-types="['image/jpeg', 'image/png']" :hideDropzoneLabel="true" />
</template>
```

## Managing Uploaded Files

When files are uploaded, they appear in a list below the upload area. Users can:

- **Replace** individual files: Clicking "Replace" opens a file selector to choose a new file
- **Delete** files: Clicking the trash icon removes the file from the list

```vue
<template>
  <spr-file-upload
    v-model="uploadedFiles"
    :file-types="['application/pdf', 'image/jpeg', 'image/png']"
    :max-file-size="10"
    title="Document Upload"
    multiple
  />
</template>

<script setup>
import { ref, watch } from 'vue';

const uploadedFiles = ref([]);

// Example of watching for changes to uploaded files
watch(uploadedFiles, (newFiles) => {
  console.log('Files updated:', newFiles);

  // You can process files here, e.g., start uploading to a server
  // or perform additional validation
});
</script>
```

## API Reference

### Props

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
      <td>Determines the layout style of the file upload component</td>
      <td>'default' | 'center'</td>
      <td>'default'</td>
    </tr>
    <tr>
      <td>title</td>
      <td>The title/label displayed above the file upload component</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>The array of uploaded files, bound with v-model</td>
      <td>File[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>When true, allows uploading multiple files at once</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>When true, disables the file upload functionality</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>maxFileSize</td>
      <td>Maximum allowed file size in megabytes (MB)</td>
      <td>number</td>
      <td>10</td>
    </tr>
    <tr>
      <td>fileTypes</td>
      <td>Array of MIME types allowed for upload (e.g., 'image/jpeg')</td>
      <td>string[]</td>
      <td>All common document and image types</td>
    </tr>
    <tr>
      <td>showError</td>
      <td>When true, displays error messages for invalid files</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>errorMessages</td>
      <td>Array of error messages to display for validation failures</td>
      <td>string[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>hideFilePreviewIcon</td>
      <td>When true, hides the check icon next to uploaded files</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hideDropzoneLabel</td>
      <td>When true, hides the "drop your files to upload" label</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>supportedFileTypeLabel</td>
      <td>Custom text to display for supported file types</td>
      <td>string</td>
      <td>Auto-generated based on fileTypes</td>
    </tr>
  </tbody>
</table>

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>Emitted when files are added, replaced, or removed</td>
      <td>File[]: The updated array of files</td>
    </tr>
  </tbody>
</table>

### Supported File Types

The component supports the following file types by default:

**Documents:**

- `application/pdf` - PDF files
- `application/msword` - MS Word files
- `application/vnd.ms-excel` - MS Excel files
- `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` - XLSX files
- `application/vnd.ms-powerpoint` - MS PowerPoint files
- `text/plain` - Text files
- `text/csv` - CSV files

**Images:**

- `image/apng` - Animated PNG
- `image/avif` - AVIF images
- `image/gif` - GIF images
- `image/jpeg` - JPEG images
- `image/png` - PNG images
- `image/svg+xml` - SVG images
- `image/webp` - WebP images

You can specify a subset of these types using the `fileTypes` prop.

## Product Uses

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
import SprFileUpload from '@/components/file-upload/file-upload.vue';
import SprLogo from "@/components/logo/logo.vue";

const files1 = ref([]);
const files2 = ref([]);
const files3 = ref([]);
const files4 = ref([]);
const files5 = ref([]);
const files6 = ref([]);
const files7 = ref([]);
</script>
