const BASE = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

export async function tgSend(
  chatId: string,
  text: string,
  parseMode: "Markdown" | "HTML" = "Markdown"
) {
  const res = await fetch(`${BASE}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: parseMode,
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok)
    throw new Error(`Telegram sendMessage ${res.status} ${await res.text()}`);
}
