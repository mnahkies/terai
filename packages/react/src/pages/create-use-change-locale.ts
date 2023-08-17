import { useRouter } from 'next/router'

export function createUseChangeLocale<LocalesKeys>() {
  return function useChangeLocale() {
    const { push, asPath } = useRouter()

    return function changeLocale(newLocale: LocalesKeys) {
      push(asPath, undefined, {
        locale: newLocale as unknown as string,
        shallow: true
      })
    }
  }
}
