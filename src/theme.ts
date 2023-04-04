import { MantineThemeOverride } from "@mantine/core"

export const theme: MantineThemeOverride = {
  primaryColor:  'gray',
  fontFamily: "'Inter', sans-serif",
  components: {
    Drawer: {
      defaultProps: {
        zIndex: 220,
        position: 'right',
      }
    }
  }
}
