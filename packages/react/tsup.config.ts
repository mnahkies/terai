import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/client', 'src/server'],
  format: ['esm', 'cjs'],
  minify: false,
  shims: true,
  sourcemap: true,
  splitting: false
})
