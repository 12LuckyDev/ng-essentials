import { NgEssentialsServicesFullSettings } from '../models/full-settings.model';
import { NgEssentialsServicesSettings } from '../models/settings.model';
import { buildConfirmDialogSettings } from './build-confirm-dialog-settings';
import { buildInfoDialogSettings } from './build-info-dialog-settings';
import { buildToastSettings } from './build-toast-settings';

export const buildFullSettings = (
  settings: NgEssentialsServicesSettings
): NgEssentialsServicesFullSettings => ({
  info: buildInfoDialogSettings(settings),
  confirm: buildConfirmDialogSettings(settings),
  toast: buildToastSettings(settings),
});
