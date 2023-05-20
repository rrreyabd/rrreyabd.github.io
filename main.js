const texts = [
  " ",
  "Sorry, the page you are looking for is currently being updated.",
  "Maaf, halaman yang Anda cari sedang dalam proses pembaruan.",
  "죄송합니다. 찾고 계신 페이지는 현재 업데이트 중입니다.",
  "抱歉，您要查找的页面正在更新中.",
];

const typingEffectElement = document.getElementById("typing-effect");
let index = 0;
let textIndex = 0;

function type() {
  if (index < texts[textIndex].length) {
    typingEffectElement.innerHTML += texts[textIndex].charAt(index);
    index++;
    setTimeout(type, 100); // Waktu penundaan antara penambahan setiap huruf (ms)
  } else {
    setTimeout(removeText, 1000); // Menjalankan fungsi removeText setelah 1 detik
  }
}

function removeText() {
  if (index > 0) {
    typingEffectElement.innerHTML = texts[textIndex].slice(0, index - 1);
    index--;
    setTimeout(removeText, 50); // Waktu penundaan antara penghapusan setiap huruf (ms)
  } else {
    index = 0;
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    type();
  }
}

typingEffectElement.style.animation =
  "typing " +
  texts[textIndex].length * 100 +
  "ms steps(" +
  texts[textIndex].length +
  "), blink-caret 1s step-end infinite";
type();
