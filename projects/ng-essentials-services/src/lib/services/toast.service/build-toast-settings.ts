import { DEFAULT_SETTINGS } from '../../settings-token/default-settings';
import { NgEssentialsServicesSettings } from '../../settings-token/settings.model';

export const buildToastSettings = (
  settings: NgEssentialsServicesSettings
): { title: string; message: string; success: string; error: string } => {
  const { toast } = settings;
  const title = toast?.title ?? settings.title ?? DEFAULT_SETTINGS.title;
  const message =
    toast?.message ?? settings.message ?? DEFAULT_SETTINGS.message;
  const successMsg = toast?.success ?? DEFAULT_SETTINGS.toast.success;
  const errorMsg = toast?.error ?? DEFAULT_SETTINGS.toast.error;

  return { title, message, success: successMsg, error: errorMsg };
};
