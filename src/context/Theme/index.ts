import { createContext } from 'react';
import ThemeEnum from 'src/enums/Theme';

export default createContext({
  theme: ThemeEnum.Light,
});
