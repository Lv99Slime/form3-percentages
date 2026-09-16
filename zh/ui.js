window.DECK_LANGUAGE="zh";
/* Shared English / Traditional Chinese interface. English remains first. */
window.UI = (() => {
 const strings = {
  "start": [
    "Start Review",
    "開始複習"
  ],
  "previous": [
    "Previous",
    "上一頁"
  ],
  "next": [
    "Next",
    "下一頁"
  ],
  "contents": [
    "Contents",
    "目錄"
  ],
  "home": [
    "Home",
    "封面"
  ],
  "worked": [
    "Worked Example",
    "例題"
  ],
  "show": [
    "Show Solution",
    "顯示解答"
  ],
  "hide": [
    "Hide Solution",
    "隱藏解答"
  ],
  "enlarge": [
    "Enlarge",
    "放大"
  ],
  "close": [
    "Close",
    "關閉"
  ],
  "answer": [
    "Answer",
    "答案"
  ],
  "visual": [
    "Diagram",
    "圖解"
  ],
  "visualError": [
    "Unable to load diagram",
    "無法載入圖解"
  ],
  "sidebar": [
    "Toggle contents",
    "顯示／隱藏目錄"
  ],
  "laser": [
    "Laser pointer (L)",
    "雷射筆"
  ],
  "pen": [
    "Pen (P)",
    "畫筆"
  ],
  "erase": [
    "Eraser",
    "橡皮擦"
  ],
  "clear": [
    "Clear drawing (C)",
    "清除筆跡"
  ],
  "full": [
    "Full screen",
    "全螢幕"
  ],
  "red": [
    "Red",
    "紅"
  ],
  "blue": [
    "Blue",
    "藍"
  ],
  "green": [
    "Green",
    "綠"
  ],
  "yellow": [
    "Yellow",
    "黃"
  ],
  "black": [
    "Black",
    "黑"
  ],
  "step": [
    "Step",
    "步驟"
  ],
  "drag": [
    "Drag the slider",
    "拖動滑桿"
  ],
  "chapter": [
    "Chapter",
    "章"
  ],
  "page": [
    "Page",
    "頁"
  ],
  "hint": [
    "Use arrow keys or Contents. Space: next page.",
    "方向鍵或目錄翻頁；空白鍵：下一頁。"
  ],
  "mathError": [
    "Formula service unavailable. Check your internet connection and reload.",
    "公式服務未能載入，請檢查網絡後重新整理。"
  ],
  "fullError": [
    "Full screen is unavailable in this browser.",
    "此瀏覽器未能進入全螢幕。"
  ]
};
 const language = window.DECK_LANGUAGE;
 const t = key => language === 'en' ? strings[key][0] : language === 'zh' ? strings[key][1] : strings[key].join(" / ");
 const chapter = n => language === 'en' ? `Chapter ${n}` : language === 'zh' ? `第 ${n} 章` : `Chapter ${n} / 第 ${n} 章`;
 const apply = () => {
 document.querySelectorAll("[data-ui]").forEach(el => el.textContent = t(el.dataset.ui));
 document.querySelectorAll("[data-ui-title]").forEach(el => { el.title = t(el.dataset.uiTitle); el.setAttribute("aria-label", el.title); });
 };
 return {t, chapter, apply};
})();
