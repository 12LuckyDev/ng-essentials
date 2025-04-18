import { DEFAULT_SETTINGS } from '../../settings-token/default-settings';
import { NgEssentialsServicesSettings } from '../../settings-token/settings.model';

export const buildInfoDialogSettings = (
  settings: NgEssentialsServicesSettings
): { title: string; message: string } => {
  const { info } = settings;
  const title = info?.title ?? settings.title ?? DEFAULT_SETTINGS.title;
  const message = info?.message ?? settings.message ?? DEFAULT_SETTINGS.message;

  return { title, message };
};
