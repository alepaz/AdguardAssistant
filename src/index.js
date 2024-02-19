import { adguardAssistantMini, adguardAssistantExtended } from './embedded';
import { isMobile } from './helpers';

export const dsOneAssistant = isMobile(navigator.userAgent)
    ? adguardAssistantMini
    : adguardAssistantExtended;
