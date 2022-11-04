import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const dark = '#232323'
const light = '#1F1F1F'

const theme = extendTheme({
  styles: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global: (props: any) => ({
      body: {
        bg: mode(light, dark)(props),
        color: mode('white', 'gray.800')(props),
      },
    }),
  },
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          width: ['auto', 'auto', '95%', '100%'],
          bg: '#1F1F1F',
          color: 'white',
        },
      }),
    },
  },
})

export default theme
