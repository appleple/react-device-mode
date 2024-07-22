import { useContext } from 'react';
import DeviceModeContext from './context';

export default function useDeviceModeStore() {
  return useContext(DeviceModeContext);
}
