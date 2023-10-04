import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    'src/index.ts',
    'src/core/index.ts',
    'src/core/server/index.ts',
    'src/core/client/index.ts'
  ],
  format: ['esm', 'cjs'],
  minify: true,
  shims: true,
  sourcemap: true,
  splitting: true
})
