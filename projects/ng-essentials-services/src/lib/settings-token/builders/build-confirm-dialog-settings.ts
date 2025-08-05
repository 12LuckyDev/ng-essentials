import { DEFAULT_SETTINGS } from '../../settings-token/models/default-settings';
import { NgEssentialsServicesSettings } from '../../settings-token/models/settings.model';

export const buildConfirmDialogSettings = (
  settings: NgEssentialsServicesSettings
): { title: string; message: string } => {
  const { confirm } = settings;
  const title = confirm?.title ?? settings.title ?? DEFAULT_SETTINGS.title;
  const message =
    confirm?.message ?? settings.message ?? DEFAULT_SETTINGS.message;

  return { title, message };
};
