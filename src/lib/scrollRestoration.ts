const INDEX_SCROLL_KEY = "index-scroll-y";

export type IndexLocationState = {
  restoreScroll?: boolean;
};

export function saveIndexScrollPosition() {
  sessionStorage.setItem(INDEX_SCROLL_KEY, String(window.scrollY));
}

export function clearIndexScrollPosition() {
  sessionStorage.removeItem(INDEX_SCROLL_KEY);
}

export function restoreIndexScrollPosition() {
  const saved = sessionStorage.getItem(INDEX_SCROLL_KEY);
  if (saved === null) return false;

  sessionStorage.removeItem(INDEX_SCROLL_KEY);
  const scrollY = Number(saved);
  window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
  return true;
}
