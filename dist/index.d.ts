declare global {
    interface Window {
        handprint: any;
    }
}
export declare const handprint: {
    identify: (id: string, props?: Record<string, any>, type?: string) => void;
    track: (event_type: string, event_properties?: Record<string, any>) => void;
    on: (event_name: string, callback_fn: (...args: any[]) => void) => void;
    get: () => Promise<unknown>;
    load: (url: string) => void;
};
export default handprint;
