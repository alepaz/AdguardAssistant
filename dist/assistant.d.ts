declare module "asurvio-assistant-fork" {
    interface Callback {
        (ruleText: string): void
    }

    interface Assistant {
        start: (element: HTMLElement | null, callback: Callback) => void,
        close: () => void,
    }

    export function dsOneAssistant(): Assistant;
}
