import { Provider } from '@angular/core';

import { buildFullSettings } from './builders/build-full-settings';
import { NgEssentialsServicesSettings } from './models/settings.model';
import { NG_ESSENTIALS_SERVICES } from './settings.token';
import { DEFAULT_SETTINGS } from './models/default-settings';

export function provideNgEssentialsServices(
  config?: NgEssentialsServicesSettings
): Provider {
  return {
    provide: NG_ESSENTIALS_SERVICES,
    useFactory: () => buildFullSettings(config ?? DEFAULT_SETTINGS),
  };
}
