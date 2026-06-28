import { copyFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

const src = resolve('node_modules/pdfjs-dist/build/pdf.worker.min.mjs')
const dest = resolve('public/pdf.worker.min.mjs')

mkdirSync(resolve('public'), { recursive: true })
copyFileSync(src, dest)
