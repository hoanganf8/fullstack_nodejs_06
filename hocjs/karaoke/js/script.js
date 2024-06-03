import { lyric } from "./lyric.js";

const lyricObj = JSON.parse(lyric).data.sentences;

const audio = document.querySelector("audio");
const karaokeInner = document.querySelector(".karaoke-inner");

let requestId;

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
console.log(lyricObj);
let currentIndex;
const handleKaraoke = () => {
  const currentTime = audio.currentTime * 1000;
  handleChangeColorKaraoke(currentTime);
  const index = lyricObj.findIndex(({ words }) => {
    const firstWord = words[0];
    const lastWord = words[words.length - 1];
    return (
      currentTime >= firstWord.startTime && currentTime <= lastWord.endTime
    );
  });

  if (index !== -1 && index !== currentIndex) {
    if (index === 0) {
      const output = `<p>${getSentence(0)}</p>
        <p>${getSentence(1)}</p>
        `;
      karaokeInner.innerHTML = output;
    } else {
      //Khi từ câu thứ 2 trở đi
      /*
      index = 1 ==> Ẩn dòng 1 --> Hiển thị câu có index = 2
      index = 2 ==> Ẩn dòng 2 --> Hiển thị câu có index = 3
      index = 3 ==> Ẩn dòng 1 --> Hiển thị câu có index = 4
      index = 4 ==> Ẩn dòng 2 --> Hiển thị câu có index = 5 
      */
      setTimeout(() => {
        if (index % 2 !== 0) {
          nextSentence(karaokeInner.children[0], getSentence(index + 1));
        } else {
          nextSentence(karaokeInner.children[1], getSentence(index + 1));
        }
      }, 500);
    }

    currentIndex = index;
  }

  requestId = requestAnimationFrame(handleKaraoke);
};

const getSentence = (index) => {
  return lyricObj[index].words
    .map(
      ({ data, startTime, endTime }) =>
        `<span class="word" data-start-time="${startTime}" data-end-time="${endTime}">${data}<span>${data}</span></span>`
    )
    .join(" ");
};

const nextSentence = (element, sentence) => {
  element.style.transition = `opacity 0.3s ease-in-out`;
  element.style.opacity = 0;
  setTimeout(() => {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 300);
};

/*
    Khi phát nhạc ==> Gọi requestAnimationFrame
    Khi dừng nhạc ==> Gọi cancelAnimationFrame
*/

const handleChangeColorKaraoke = (currentTime) => {
  const wordList = karaokeInner.querySelectorAll(".word");
  if (wordList.length) {
    wordList.forEach((wordEl) => {
      const startTime = wordEl.dataset.startTime;
      const endTime = wordEl.dataset.endTime;
      if (currentTime >= startTime && currentTime <= endTime) {
        const percent =
          ((currentTime - startTime) / (endTime - startTime)) * 100;
        wordEl.children[0].style.width = `${percent}%`;
      }
      if (currentTime > endTime) {
        wordEl.children[0].style.width = `100%`;
      }
    });
  }
};
