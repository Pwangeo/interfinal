 const titleData = [
      { 
        title: 'Jumping Spider', 
        font: 'Montserrat', 
        scientificName: 'Salticidae Blackwall, 1841', 
        lineHeight: '1.05', 
        fontSize: '10.5rem',
        left: '30%',
        titlefontSize: '10.5rem',
        fontweight:'900'
      },
      { 
        title: 'Ladybug', 
        font: 'Poiret One', 
        scientificName: 'Coccinellidae Latreille, 1807', 
        lineHeight: '1', 
        fontSize: '10rem',
        left: '23%',
        titlefontSize: '10rem',
        fontweight:'400'
      },
      { 
        title: 'Horse-fly', 
        font: 'tomorrow', 
        scientificName: 'Tabanus chrysurus Loew, 1858', 
        lineHeight: '0.9', 
        fontSize: '11.5rem',
        left: '25%',
        titlefontSize: '11.5rem',
        fontweight:'600'
      },
      { 
        title: 'Honey Bee', 
        font: 'lobster', 
        scientificName: 'Apis Linnaeus, 1758', 
        lineHeight: '1.4', 
        fontSize: '11.9rem',
        left: '20%',
        titlefontSize: '11.9rem',
        fontweight:'400'
      },
      { 
        title: 'Dragonfly', 
        font: 'Chonburi', 
        scientificName: 'Odonata Fabricius, 1793', 
        lineHeight: '1.1', 
        fontSize: '10.2rem', 
        left: '25%',
        titlefontSize: '10.2rem',
        fontweight:'400'
      },
    ];
    
    let currentIndex = 0;

    function createCircle() {
      const circle = document.createElement('div');
      circle.classList.add('circle');
      document.body.appendChild(circle);
      setTimeout(() => {
        window.location.href = 'spider.html';
      }, 1500);
    }

 function changeTitle(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % titleData.length; // 순차적으로 다음
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + titleData.length) % titleData.length; // 역순
  }
  const { title, font, scientificName, lineHeight, fontSize, left, titlefontSize, fontweight } = titleData[currentIndex];

  const titleElement = document.getElementById('title');
  titleElement.innerText = title; // 타이틀 텍스트 변경
  titleElement.style.fontFamily = font; // 타이틀 폰트 변경
  titleElement.style.fontSize = titlefontSize;

  const scientificNameElement = document.getElementById('scientific-name');
  scientificNameElement.innerText = scientificName; // scientific name 텍스트 변경
  scientificNameElement.style.fontSize = fontSize; // 폰트 크기 변경
  scientificNameElement.style.lineHeight = lineHeight; // line-height 변경
  scientificNameElement.style.left = left; // left 값 변경

  // body의 폰트 변경
  document.body.style.fontFamily = font; // body 전체 폰트 변경
  document.body.style.fontWeight = fontweight;

  // Jumping Spider 타이틀일 때만 spider.png 이미지 보이기
  const spiderImage = document.querySelector('.spider-image');
  if (title === 'Jumping Spider') {
    spiderImage.style.display = 'block'; // spider 이미지 보이기
  } else {
    spiderImage.style.display = 'none'; // 다른 타이틀일 때 spider 이미지 숨기기
  }

function generateLadybugs() {
  const numLadybugs = Math.floor(Math.random() * 6) + 5; // 5개에서 10개 사이

  // 기존에 있던 ladybug 이미지를 모두 제거 (body에서 제거)
  const existingLadybugs = document.querySelectorAll('.ladybug');
  existingLadybugs.forEach(ladybug => ladybug.remove());

  for (let i = 0; i < numLadybugs; i++) {
    const ladybug = document.createElement('div');
    ladybug.classList.add('ladybug');

    // 무당벌레가 화면 밖에서 들어올 수 있도록 랜덤 시작 위치와 회전 각도 설정
    const randomXStart = Math.random() < 0.5 ? -50 : 100; // 화면 밖에서 시작 (왼쪽 -50% 혹은 오른쪽 100%)
    const randomYStart = Math.random() * 100; // 화면 밖에서 랜덤 Y 위치 설정
    const randomXEnd = Math.floor(Math.random() * 90) + 'vw'; // 0%에서 90% 사이 랜덤 X 위치
    const randomYEnd = Math.floor(Math.random() * 90) + 'vh'; // 0%에서 90% 사이 랜덤 Y 위치
    const randomRotation = Math.floor(Math.random() * 360); // 0°에서 360° 사이 랜덤 회전

    // CSS 변수 설정
    ladybug.style.setProperty('--x-start', randomXStart + '%');
    ladybug.style.setProperty('--y-start', randomYStart + 'vh');
    ladybug.style.setProperty('--x-end', randomXEnd);
    ladybug.style.setProperty('--y-end', randomYEnd);
    ladybug.style.setProperty('--rotate', randomRotation + 'deg');

    // body에 무당벌레 이미지 추가
    document.body.appendChild(ladybug);
  }
}
