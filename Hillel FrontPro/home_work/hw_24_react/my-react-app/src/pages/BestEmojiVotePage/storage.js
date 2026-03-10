import { STORAGE_KEY, EMOJIS } from "./emojis";

export function getDefaultVotes() {
  // { grin: 0, smile: 0, ... }
  return Object.fromEntries(EMOJIS.map((e) => [e.id, 0]));
}

export function loadVotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultVotes();

    const parsed = JSON.parse(raw);
    const defaults = getDefaultVotes();

    // Мягкая валидация: берём только наши ключи, всё остальное игнорим
    for (const key of Object.keys(defaults)) {
      const v = parsed?.[key];
      defaults[key] = Number.isFinite(v) && v >= 0 ? v : 0;
    }

    return defaults;
  } catch {
    return getDefaultVotes();
  }
}

export function saveVotes(votes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

export function clearVotes() {
  localStorage.removeItem(STORAGE_KEY);
}