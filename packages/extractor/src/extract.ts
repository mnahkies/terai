// Dependencies
import { processFile } from './process-file'
import { logger } from '@rosetta.js/logger'
import { runtime } from '@rosetta.js/node'

// Types
import type { TransformerOptions } from '@rosetta.js/transformer'
import type { ExtractedMessages } from '@rosetta.js/types'

type ExtractOptions = TransformerOptions & {
  filesPaths: readonly string[]
}

export async function extract({
  filesPaths,
  ...options
}: ExtractOptions): Promise<ExtractedMessages> {
  const extractedMessages: ExtractedMessages = new Map()

  await Promise.all(
    filesPaths.map(async fileName => {
      try {
        const source = runtime.fs.readFile(fileName)
        const messages = await processFile(source, fileName, options)

        for (const message of messages) {
          extractedMessages.set(message.id, message)
        }
      } catch (e) {
        logger.error('extract', `Error processing file ${fileName} ${e}`)
        return null
      }
    })
  )

  return extractedMessages
}