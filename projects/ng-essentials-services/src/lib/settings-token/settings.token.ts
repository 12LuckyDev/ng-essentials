import { InjectionToken } from '@angular/core';
import { DEFAULT_SETTINGS } from './default-settings';
import { NgEssentialsServicesSettings } from './settings.model';

export const NG_ESSENTIALS_SERVICES =
  new InjectionToken<NgEssentialsServicesSettings>('NG_ESSENTIALS_SERVICES', {
    providedIn: 'root',
    factory: () => DEFAULT_SETTINGS,
  });
