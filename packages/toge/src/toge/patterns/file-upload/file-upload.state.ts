import { ref } from 'vue'

export function useFileUploadState() {
  const isDragOver = ref(false)
  return { isDragOver }
}
