import { InjectionToken } from '@angular/core';
import { DEFAULT_SETTINGS } from './models/default-settings';
import { NgEssentialsServicesFullSettings } from './models/full-settings.model';
import { buildFullSettings } from './builders/build-full-settings';

export const NG_ESSENTIALS_SERVICES =
  new InjectionToken<NgEssentialsServicesFullSettings>(
    'NG_ESSENTIALS_SERVICES',
    {
      providedIn: 'root',
      factory: () => buildFullSettings(DEFAULT_SETTINGS),
    }
  );
