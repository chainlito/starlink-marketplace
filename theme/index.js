import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
const styles = {
  global: props => ({
    body: {
      color: mode('gray.100', 'black')(props),
      bg: 'transparent',
    },
  }),
};
const colors = {
}
const components = {
};

const theme = extendTheme({
  components,
  styles,
  colors
});

export default theme;