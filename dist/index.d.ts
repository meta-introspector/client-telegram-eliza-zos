declare const TelegramClientInterface: {
    name: string;
    config: {};
    start: (runtime: any) => Promise<any>;
    stop: (_runtime: any) => Promise<void>;
};

export { TelegramClientInterface, TelegramClientInterface as default };
