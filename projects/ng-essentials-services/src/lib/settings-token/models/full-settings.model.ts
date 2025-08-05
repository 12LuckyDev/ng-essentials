import { DialogSettings } from './dialog-settings.model';
import { ToastSettings } from './toast-settings.model';

export interface NgEssentialsServicesFullSettings {
  toast: ToastSettings;
  info: DialogSettings;
  confirm: DialogSettings;
}
