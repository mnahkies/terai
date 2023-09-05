// Types
import type { Observable } from '@legendapp/state'
import type {
  Locale,
  Dictionary,
  ImportedDictionaries
} from '@rewordlabs/types'

export type State = {
  locale: Locale
  dictionary: Dictionary
}

export type ObservableState = Observable<State>

export type SetupOptions = {
  locale: Locale
  dictionaries: ImportedDictionaries
}