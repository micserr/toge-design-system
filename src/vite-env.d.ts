interface ImportMeta { readonly glob: ImportMetaGlob }

interface ImportMetaGlob {
  (pattern: string, options?: { eager?: boolean }): Record<string, () => Promise<unknown>>
  (pattern: string, options?: { eager: true }): Record<string, unknown>
} 
