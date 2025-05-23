// src/types/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    appColor: string
    appBackground: string
  }
}
