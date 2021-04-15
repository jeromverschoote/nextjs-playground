import { createContext } from 'react';
import ColorSchemeEnum from 'src/enums/ColorScheme';

export default createContext({
  colorScheme: ColorSchemeEnum.Light,
});
