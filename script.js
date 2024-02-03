const scl = 10;
const w = pixels[0][0].length;
const h = pixels[0].length;

const textContainers = [];

const brightText = [
  "&nbsp;",
  "&nbsp;",
  "&nbsp;",
  "&nbsp;",
  "&nbsp;",
  "&nbsp;",
  "&nbsp;",
  "&nbsp;",
  ".",
  ".",
  ".",
  ".",
  ".",
  ".",
  ".",
  ".",
  ":",
  ":",
  ":",
  ":",
  ":",
  ":",
  ":",
  "!",
  "!",
  "!",
  "!",
  "!",
  "!",
  "=",
  "=",
  "=",
  "=",
  "1",
  "1",
  "1",
  "1",
  "1",
  "I",
  "L",
  "T",
  "J",
  "7",
  "C",
  "O",
  "D",
  "Q",
  "$",
  "U",
  "2",
  "Z",
  "V",
  "Y",
  "K",
  "N",
  "X",
  "S",
  "A",
  "H",
  "F",
  "3",
  "P",
  "R",
  "E",
  "B",
  "4",
  "G",
  "5",
  "6",
  "9",
  "8",
  "0",
  "W",
  "M",
  "#",
];

function Init() {
  const R = document.createElement("div");
  const G = document.createElement("div");
  const B = document.createElement("div");

  R.classList.add("text");
  G.classList.add("text");
  B.classList.add("text");

  R.id = "r";
  G.id = "g";
  B.id = "b";

  document.body.append(R);
  document.body.append(G);
  document.body.append(B);

  textContainers[0] = R;
  textContainers[1] = G;
  textContainers[2] = B;
}

function DrawFrame(t) {
  const px = pixels[t];
  let text = ["", "", ""];

  for (let j = 0; j < px.length; j++) {
    for (let i = 0; i < px[0].length; i++) {
      const ri = Math.floor(brightText.length * px[j][i].r / 256);
      const gi = Math.floor(brightText.length * px[j][i].g / 256);
      const bi = Math.floor(brightText.length * px[j][i].b / 256);

      text[0] += brightText[ri];
      text[1] += brightText[gi];
      text[2] += brightText[bi];

      if (brightText[bi] == undefined) console.log("b", bi, px[j][i].b);
    }

    text[0] += "\n";
    text[1] += "\n";
    text[2] += "\n";
  }

  textContainers[0].innerHTML = text[0];
  textContainers[1].innerHTML = text[1];
  textContainers[2].innerHTML = text[2];
}

function adjustColorValue(val, shift) {
  const upper = ((val + 2 ** shift) >> shift) << shift;
  const lower = (val >> shift) << shift;
  return val - lower < upper - val ? lower >> shift : upper >> shift;
}

function Animate() {
  const wait = 200;
  for (let t = 0; t < pixels.length; t++) {
    setTimeout(() => DrawFrame(t), wait * t);
  }
}

setTimeout(Animate, 500);

Init();
