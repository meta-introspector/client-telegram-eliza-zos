import { TelegramClient } from "./telegramClient";
import { validateTelegramConfig } from "./environment";

export const TelegramClientInterface = {
    name: 'telegram',
    config: {},
    start: async (runtime: any) => {
        const telegramConfig =  await validateTelegramConfig(runtime);

        const tg = new TelegramClient(
            runtime,
            telegramConfig.TELEGRAM_BOT_TOKEN
        );

        await tg.start();

        console.log(
            `✅ Telegram client successfully started for character ${runtime.character.name}`
        );
        return tg as any;
    },
    stop: async (_runtime: any) => {
        console.warn("Telegram client does not support stopping yet");
    },
};
export default TelegramClientInterface;
