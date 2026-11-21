const nodes = {
  opening: {
    chapter: "序章 · 一點雨聲",
    text: "雨聲把樓下的夜間車聲磨得很薄。你把早已冷掉的茶推到一旁，報紙上那行小字卻像釘子一樣扎進眼裡：林見安，失聯第七天。照片裡的男子站在他最常等車的公車站牌下，右手袖口被風吹起了一角。",
    location: "【凌晨 01:17　舊城區，楊槐路 28 號】",
    scene: "desk",
    next: "newspaper"
  },
  newspaper: {
    chapter: "序章 · 蝴蝶夾",
    text: "你認得這張臉。林見安住在三樓，清晨常會送來一盒桂花糕；上週還替你收過宅配包裹。他平常很少上報。報紙最下方印著一串舊電話，話筒此刻黑黢黢地放在桌角，彷彿已經等你很久。",
    location: "【凌晨 01:21　住處書房】",
    scene: "desk",
    choices: [
      { text: "先仔細讀讀報紙的角落，找出被裁掉的地址。", next: "clipping" },
      { text: "撥下報紙上的電話號碼。", next: "phone" },
      { text: "去三樓敲林見安的門。", next: "hallway" }
    ]
  },
  clipping: {
    chapter: "序章 · 修正帶",
    text: "報頭下面壓著一層透明膠帶。你借著檯燈翻了翻背面，發現「楊槐路」原本被修正帶塗過。底下露出零星墨跡，像是有人臨時改了地址。電話旁邊畫著一個小小的折角，和報紙上的版面格格不入。",
    location: "【凌晨 01:24　住處書房．報紙背面】",
    scene: "clipping",
    choices: [
      { text: "記下露出的墨跡，再撥通電話。", next: "phone" },
      { text: "把報紙塞進外套，去三樓看看。", next: "hallway" }
    ]
  },
  phone: {
    chapter: "序章 · 等待",
    text: "撥號聲響了六遍。第七遍時，隔壁牆上傳來一聲輕響。電話那頭仍舊沒有人接，但你聽見自己家門廊裡傳來熟悉的滴水聲——雨天沒有人會把雨從樓梯間帶進來。接著，門縫下滑出一張白色紙條。",
    location: "【凌晨 01:29　住處玄關】",
    scene: "note",
    choices: [
      { text: "先查看門縫裡的紙條。", next: "note" },
      { text: "屏住呼吸，等牆外的腳步聲過去。", next: "hallway" }
    ]
  },
  hallway: {
    chapter: "序章 · 樓梯",
    text: "樓梯間比想像中冷。三樓平台上的地板蠟早已磨舊，林家的門下沒有燈光。門把手微微晃了一下，彷彿只要碰一下就會開。你抬頭看向消防標誌——箭頭指向隔壁；林家門牌旁貼著一張新貼紙：請勿在雨夜敲門。",
    location: "【凌晨 01:34　楊槐路公寓．三樓】",
    scene: "hallway",
    choices: [
      { text: "轉開門把手。", next: "inside" },
      { text: "沿著貼紙上的箭頭走向消防通道。", next: "escape" }
    ]
  },
  note: {
    chapter: "序章 · 白紙",
    text: "紙條只寫了一行：「別等雨停。雨停以後，我不在樓上。」字跡很輕，像是怕墨跡被人聽見。背面還留著兩個小時前的水漬，還有一個地址：楊槐路 28 號，二樓。",
    location: "【凌晨 01:32　住處玄關．紙條背面】",
    scene: "note",
    choices: [
      { text: "拿著紙條去三樓確認。", next: "hallway" },
      { text: "從窗戶望向樓下的街道。", next: "street" }
    ]
  },
  inside: {
    chapter: "第一幕 · 空房間",
    text: "門沒有鎖。客廳只剩下一個空杯、幾雙晾乾的拖鞋，和一盆葉尖發黃的薄荷。窗臺上放著一台沒來得及關機的收音機，正在播氣象預報：此後一週都不會放晴。你忽然聽見身後傳來茶水沸騰的聲音——可是林家沒有開火。",
    location: "【凌晨 01:38　林宅．客廳】",
    scene: "room",
    choices: [
      { text: "關掉收音機，循著聲音找廚房。", next: "kitchen" },
      { text: "回到自己家，報警並帶走報紙。", next: "ending" }
    ]
  },
  escape: {
    chapter: "第一幕 · 消防通道",
    text: "消防門在你身後輕輕合上，雨立刻在鐵欄杆上敲得更響。樓梯往下只到一樓，往上卻多出一層你沒印象的四樓。四樓盡頭的窗戶透出一盞燈。燈下站著一個人，正在把報紙一張張折成紙船。",
    location: "【凌晨 01:41　楊槐路公寓．消防通道】",
    scene: "hallway",
    choices: [
      { text: "繼續上樓。", next: "kitchen" },
      { text: "把紙條塞進門縫，原路回家。", next: "ending" }
    ]
  },
  street: {
    chapter: "序章 · 街燈",
    text: "街燈在雨裡晃成一圈圈黃霧。一名外送員停在楊槐路口，低頭看了看手機，又抬頭望向樓上。停在路邊的腳踏車後座綁著一個綠色保溫袋，袋口露出一張與報紙相同的折角。",
    location: "【凌晨 01:44　楊槐路口】",
    scene: "street",
    choices: [
      { text: "下樓跟上外送員。", next: "kitchen" },
      { text: "關上窗，等到天亮。", next: "ending" }
    ]
  },
  kitchen: {
    chapter: "第一幕 · 還有熱氣",
    text: "廚房裡的水壺蓋已經旋緊，爐火卻是冷的。你找到林見安的通訊錄；最後一頁畫著一座橋，橋下寫著一個名字：陳棲。今天凌晨還有一筆紀錄，只有三個字：「她還在」。窗外的雨突然停了一瞬。",
    location: "【凌晨 01:49　林宅．廚房】",
    scene: "kitchen",
    choices: [
      { text: "撥通陳棲的電話。", next: "ending" },
      { text: "沿著通訊錄上的橋走過去。", next: "ending" },
      { text: "守在林見安的客廳，等天亮。", next: "ending" }
    ]
  },
  ending: {
    chapter: "第一幕 · 尚未落幕",
    text: "檯燈芯裡剩下的油快燒盡了。窗外，雨又開始細細地下。你把報紙、紙條和通訊錄放在桌上，才發現三張紙的折痕拼成一條路——終點寫著一個地址，和自己家門牌只差了一間。",
    location: "【凌晨 02:03　住處玄關．盡頭】",
    scene: "ending",
    choices: [
      { text: "重新讀一遍今晚發生的事。", next: "opening" }
    ]
  }
};

const narrative = document.querySelector("#narrative");
const choices = document.querySelector("#choices");
const continueButton = document.querySelector("#continueButton");
const chapter = document.querySelector("#chapter");
const storyCopy = document.querySelector("#storyCopy");
const soundButton = document.querySelector("#soundButton");
const locationLabel = document.querySelector("#location");
const sceneArt = document.querySelector("#sceneArt");
let current = "opening";

const sceneTemplates = {
  desk: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <defs>
        <linearGradient id="desk-wall" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#37413f"/><stop offset=".7" stop-color="#202725"/><stop offset="1" stop-color="#111615"/></linearGradient>
        <radialGradient id="desk-light"><stop stop-color="#edcf91" stop-opacity=".65"/><stop offset=".5" stop-color="#b49760" stop-opacity=".18"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#desk-wall)"/>
      <ellipse cx="610" cy="650" rx="720" ry="380" fill="url(#desk-light)"/>
      <rect x="106" y="630" width="760" height="34" fill="#171917"/><rect x="150" y="664" width="30" height="236" fill="#151816"/><rect x="790" y="664" width="30" height="236" fill="#151816"/>
      <g transform="translate(380 552) rotate(-3)">
        <rect width="390" height="250" rx="4" fill="#bab8a7"/><rect x="22" y="22" width="346" height="34" fill="#54584f"/><text x="195" y="46" text-anchor="middle" fill="#dedcca" font-size="22" font-family="serif">東城晚報</text>
        <rect x="30" y="78" width="218" height="13" fill="#7d8072"/><rect x="30" y="103" width="218" height="8" fill="#929487"/><rect x="30" y="123" width="218" height="8" fill="#929487"/>
        <rect x="268" y="78" width="100" height="150" fill="#76796b"/><text x="318" y="112" text-anchor="middle" fill="#e2e0d3" font-size="16" font-family="serif">失聯者</text><text x="318" y="142" text-anchor="middle" fill="#e2e0d3" font-size="20" font-family="serif">林見安</text>
      </g>
      <g transform="translate(178 540)"><ellipse cx="70" cy="96" rx="115" ry="18" fill="#171916"/><rect x="64" y="0" width="14" height="98" fill="#74674e"/><path d="M0 28Q70-28 140 28L122 48Q70 5 18 48Z" fill="#927d50"/><ellipse cx="70" cy="30" rx="70" ry="20" fill="#cbb579"/></g>
      <g transform="translate(760 590)"><ellipse cx="0" cy="0" rx="42" ry="13" fill="#656961"/><path d="M-38-2l8 64q30 18 60 0l8-64Z" fill="#85877b"/><path d="M38 12q50 0 43 32-7 26-43 16" fill="none" stroke="#85877b" stroke-width="10"/></g>
      <g transform="translate(890 140)"><rect width="600" height="490" fill="#10191d" stroke="#151918" stroke-width="18"/><rect x="18" y="18" width="564" height="454" fill="#1c292c"/><line x1="300" y1="18" x2="300" y2="472" stroke="#151b1c" stroke-width="16"/><line x1="18" y1="240" x2="582" y2="240" stroke="#151b1c" stroke-width="15"/><g stroke="#8ca0a1" stroke-width="3" opacity=".25" class="rain-line"><path d="M60 20l-28 120M140 30l-38 150M230 15l-35 130M420 20l-38 155M510 50l-31 130M540 180l-40 150"/></g></g>
    </svg>`,
  clipping: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <rect width="1600" height="900" fill="#242a28"/><rect x="0" y="0" width="1600" height="900" fill="#c7a968" opacity=".07"/>
      <ellipse cx="800" cy="760" rx="620" ry="300" fill="#d0ad70" opacity=".12"/>
      <g transform="translate(380 145) rotate(-2)">
        <rect width="840" height="610" rx="8" fill="#c1bfaa"/><rect x="54" y="52" width="732" height="84" fill="#62665c"/><text x="420" y="112" text-anchor="middle" fill="#e2e0d2" font-size="52" font-family="serif">東城晚報</text>
        <rect x="68" y="178" width="430" height="22" fill="#777a6e"/><rect x="68" y="218" width="430" height="14" fill="#8d907f"/><rect x="68" y="248" width="430" height="14" fill="#8d907f"/>
        <rect x="530" y="178" width="250" height="336" fill="#76796a"/><text x="655" y="236" text-anchor="middle" fill="#e2e0d3" font-size="28" font-family="serif">失聯者</text><text x="655" y="292" text-anchor="middle" fill="#e2e0d3" font-size="34" font-family="serif">林見安</text>
        <rect x="68" y="292" width="430" height="14" fill="#8d907f"/><rect x="68" y="322" width="430" height="14" fill="#8d907f"/><rect x="68" y="352" width="430" height="14" fill="#8d907f"/>
        <rect x="530" y="178" width="250" height="24" fill="#b5a99a" opacity=".6"/><path d="M550 560q40-180 140-118t128 118" fill="none" stroke="#6b4d42" stroke-width="18" opacity=".48"/>
      </g>
      <circle cx="1180" cy="590" r="88" fill="#1a1d1b" opacity=".7"/><circle cx="1180" cy="590" r="58" fill="#d0b27d" opacity=".25"/>
    </svg>`,
  note: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <rect width="1600" height="900" fill="#1d2422"/><rect x="0" y="0" width="1600" height="900" fill="#a7b0aa" opacity=".04"/>
      <rect x="270" y="90" width="1060" height="700" rx="12" fill="#252b29" stroke="#111514" stroke-width="22"/>
      <rect x="320" y="140" width="960" height="600" fill="#252d2b"/><rect x="700" y="140" width="18" height="600" fill="#171b1a"/><rect x="320" y="430" width="960" height="16" fill="#171b1a"/>
      <g transform="translate(760 320)"><rect width="430" height="300" rx="6" fill="#c5c1ac"/><path d="M38 70h354M38 115h280M38 160h330M38 205h220" stroke="#77796e" stroke-width="12"/><text x="215" y="272" text-anchor="middle" fill="#64665c" font-size="28" font-family="serif">楊槐路 28 號，二樓</text></g>
      <g transform="translate(250 500)"><ellipse cx="210" cy="260" rx="300" ry="55" fill="#101311"/><rect x="0" y="0" width="420" height="260" rx="22" fill="#1e2522"/><rect x="35" y="35" width="350" height="190" rx="18" fill="#343d39"/></g>
    </svg>`,
  hallway: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <defs><linearGradient id="hall" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#303936"/><stop offset="1" stop-color="#151918"/></linearGradient></defs>
      <rect width="1600" height="900" fill="url(#hall)"/><polygon points="420,900 1180,900 1010,180 590,180" fill="#1a201e"/>
      <g fill="#454c48"><rect x="0" y="0" width="210" height="900"/><rect x="1390" y="0" width="210" height="900"/><rect x="210" y="0" width="1180" height="30"/></g>
      <polygon points="590,180 1010,180 1180,900 420,900" fill="#252c29"/>
      <rect x="635" y="260" width="330" height="470" rx="4" fill="#151917" stroke="#46504c" stroke-width="16"/>
      <rect x="675" y="300" width="250" height="430" fill="#202724"/><circle cx="875" cy="520" r="14" fill="#a99a75"/>
      <rect x="690" y="242" width="220" height="46" fill="#b2b09f"/><text x="800" y="273" text-anchor="middle" fill="#333833" font-size="24" font-family="serif">三樓 307</text>
      <g transform="translate(710 670)"><rect width="180" height="150" fill="#8d8a78" opacity=".14"/><text x="90" y="82" text-anchor="middle" fill="#d8d2bd" font-size="20" font-family="serif">請勿在雨夜敲門</text></g>
      <g class="rain-line" stroke="#9cacaa" stroke-width="4" opacity=".16"><path d="M230 80l-60 230M390 40l-75 280M1270 70l-65 240M1430 30l-80 300"/></g>
    </svg>`,
  room: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <rect width="1600" height="900" fill="#262c29"/><rect y="700" width="1600" height="200" fill="#171c1a"/>
      <rect x="960" y="120" width="470" height="450" fill="#172127" stroke="#111615" stroke-width="18"/><rect x="978" y="138" width="434" height="414" fill="#1e2b2e"/>
      <g fill="#2e3936"><rect x="1050" y="410" width="70" height="142"/><rect x="1140" y="350" width="48" height="202"/><rect x="1230" y="390" width="110" height="162"/></g>
      <rect x="200" y="520" width="560" height="32" fill="#171916"/><rect x="230" y="552" width="28" height="348" fill="#141614"/><rect x="700" y="552" width="28" height="348" fill="#141614"/>
      <g transform="translate(410 430)"><rect width="210" height="260" rx="8" fill="#6e7a72"/><ellipse cx="105" cy="50" rx="130" ry="32" fill="#839087"/><rect x="20" y="48" width="170" height="190" rx="5" fill="#69756e"/></g>
      <g transform="translate(680 590)"><path d="M0 0h160l-20 180H20Z" fill="#77705b"/><rect x="-15" y="-30" width="190" height="30" rx="5" fill="#8f8468"/></g>
      <g transform="translate(930 620)"><rect width="160" height="210" rx="70" fill="#222724"/><rect x="-25" y="180" width="210" height="24" rx="12" fill="#171b19"/></g>
    </svg>`,
  kitchen: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <rect width="1600" height="900" fill="#343936"/><rect y="660" width="1600" height="240" fill="#1a201d"/>
      <rect x="180" y="150" width="540" height="510" fill="#252a27" stroke="#161a18" stroke-width="18"/><rect x="220" y="190" width="460" height="430" fill="#303735"/>
      <rect x="760" y="540" width="650" height="35" fill="#171916"/><rect x="760" y="575" width="650" height="210" fill="#1d221f"/><rect x="790" y="600" width="590" height="160" fill="#292f2c"/>
      <g transform="translate(980 430)"><ellipse cx="110" cy="112" rx="120" ry="20" fill="#171916"/><path d="M20 110l20 140q70 20 140 0l20-140Z" fill="#83887c"/><ellipse cx="110" cy="110" rx="68" ry="12" fill="#4a504b"/><path d="M200 130q85 0 70 58-12 40-70 28" fill="none" stroke="#83887c" stroke-width="16"/></g>
      <g transform="translate(1120 190)"><rect width="260" height="220" fill="#b1b0a0" opacity=".12"/><text x="130" y="70" text-anchor="middle" fill="#d6d1bd" font-size="26" font-family="serif">通訊錄</text><path d="M40 100h180M40 145h130M40 190h155" stroke="#bab6a4" stroke-width="10" opacity=".5"/></g>
    </svg>`,
  street: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <defs><linearGradient id="street-bg" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#172129"/><stop offset="1" stop-color="#0e1415"/></linearGradient></defs>
      <rect width="1600" height="900" fill="url(#street-bg)"/><rect y="650" width="1600" height="250" fill="#111616"/>
      <g fill="#2b3433"><rect x="120" y="210" width="240" height="440"/><rect x="430" y="130" width="260" height="520"/><rect x="980" y="250" width="290" height="400"/><rect x="1340" y="100" width="180" height="550"/></g>
      <g fill="#b3a36f" opacity=".45"><rect x="155" y="280" width="24" height="22"/><rect x="480" y="210" width="28" height="25"/><rect x="1040" y="330" width="26" height="24"/><rect x="1380" y="180" width="22" height="24"/></g>
      <g transform="translate(720 590)" class="slow-float"><circle cx="0" cy="80" r="62" fill="#17201e"/><circle cx="0" cy="-20" r="36" fill="#73796f"/><rect x="-38" y="10" width="76" height="150" rx="30" fill="#48564f"/><rect x="38" y="120" width="180" height="28" rx="14" fill="#26302d"/><rect x="150" y="72" width="120" height="80" rx="10" fill="#7b8d80"/></g>
      <g class="rain-line" stroke="#9cacaa" stroke-width="4" opacity=".22"><path d="M90 20l-50 180M300 40l-70 230M560 20l-55 210M820 30l-60 220M1120 10l-70 260M1420 50l-65 230"/></g>
    </svg>`,
  ending: () => `
    <svg viewBox="0 0 1600 900" role="presentation">
      <rect width="1600" height="900" fill="#1b211f"/><ellipse cx="800" cy="760" rx="650" ry="260" fill="#b99b62" opacity=".12"/>
      <g transform="translate(300 150)"><rect width="1000" height="560" rx="8" fill="#1d2421" stroke="#111513" stroke-width="20"/><rect x="50" y="50" width="900" height="460" fill="#252d29"/>
      <g transform="translate(260 220) rotate(-8)"><rect width="480" height="320" fill="#c1bea9"/><path d="M45 70h390M45 120h300M45 170h350M45 220h240" stroke="#858779" stroke-width="14"/></g>
      <g transform="translate(420 280)"><path d="M0 120L150 40l150 80-150 80Z" fill="#b8b4a1" opacity=".9"/><text x="150" y="72" text-anchor="middle" fill="#55584f" font-size="22" font-family="serif">終點：舊地址</text></g></g>
      <g class="slow-float" transform="translate(1220 650)"><ellipse cx="0" cy="90" rx="110" ry="20" fill="#101310"/><circle cx="0" cy="0" r="45" fill="#7c806e"/><rect x="-42" y="30" width="84" height="150" rx="35" fill="#4a514b"/></g>
    </svg>`
};

function render() {
  const node = nodes[current];
  chapter.textContent = node.chapter;
  narrative.textContent = node.text;
  locationLabel.textContent = node.location || "【時間未定　地點未知】";
  sceneArt.dataset.changing = "true";
  sceneArt.innerHTML = sceneTemplates[node.scene]?.() || sceneTemplates.desk();
  requestAnimationFrame(() => {
    sceneArt.dataset.changing = "false";
  });
  choices.replaceChildren();
  continueButton.hidden = !node.next;

  if (node.choices) {
    node.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.innerHTML = `<span class="choice-number">0${index + 1}</span><span class="choice-text"></span>`;
      button.querySelector(".choice-text").textContent = choice.text;
      button.addEventListener("click", () => choose(choice.next));
      choices.append(button);
    });
  }

  narrative.style.animation = "none";
  void narrative.offsetWidth;
  narrative.style.animation = "";
  storyCopy.scrollTop = 0;
}

function choose(next) {
  current = next;
  render();
  const firstChoice = choices.querySelector("button");
  if (firstChoice) firstChoice.focus({ preventScroll: true });
  else continueButton.focus({ preventScroll: true });
}

function continueStory() {
  const next = nodes[current].next;
  if (next) choose(next);
}

continueButton.addEventListener("click", continueStory);

document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  if (event.code === "Space" && event.target.tagName !== "BUTTON") {
    event.preventDefault();
    continueStory();
  }
  if (/^[1-3]$/.test(event.key) && nodes[current].choices) {
    const choice = nodes[current].choices[Number(event.key) - 1];
    if (choice) choose(choice.next);
  }
});

soundButton.addEventListener("click", () => {
  const enabled = soundButton.getAttribute("aria-pressed") === "true";
  soundButton.setAttribute("aria-pressed", String(!enabled));
  soundButton.setAttribute("aria-label", enabled ? "開啟雨聲" : "關閉雨聲");
});

render();
