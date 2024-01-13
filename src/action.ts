"use server";

import { speak, translate } from "google-translate-api-x";

export async function translateText(prevState: any, formData: FormData) {
  const text: string = formData.get("translatedText") as string;
  const translateTo: string = formData.get("translateTo") as string;
  const translatedText: any = await translate(text, {
    to: translateTo ? translateTo : "en",
  });
  let speech: any;
  if (translatedText.text) {
    speech = await speak(translatedText.text);
  }
  return { translatedText: translatedText.text, speech };
}
