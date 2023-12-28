import { Omni } from '@pansy/omni';
import adapterAxios from '@pansy/omni-adapter-axios';

export const omni = new Omni({
  requestAdapter: adapterAxios,
});
