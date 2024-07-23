// 현재 슬라이드 인덱스를 저장하는 변수
let currentIndex = 0;

// 모든 슬라이드 요소를 선택하여 배열로 저장
const slides = document.querySelectorAll('.slide');

// 슬라이드의 총 개수
const totalSlides = slides.length;

// '다음' 버튼 클릭 시 이벤트 리스너
document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentIndex + 1); // 현재 인덱스에서 1을 더해 다음 슬라이드 표시
});

// '이전' 버튼 클릭 시 이벤트 리스너
document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentIndex - 1); // 현재 인덱스에서 1을 빼서 이전 슬라이드 표시
});

// 슬라이드를 표시하는 함수
function showSlide(index) {
    // 인덱스가 총 슬라이드 개수보다 크면 처음 슬라이드로 돌아감
    if (index >= totalSlides) {
        currentIndex = 0;
    // 인덱스가 0보다 작으면 마지막 슬라이드로 이동
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    // 그렇지 않으면 해당 인덱스로 이동
    } else {
        currentIndex = index;
    }

    // 슬라이드 컨테이너를 이동시켜 현재 슬라이드를 표시
    const offset = -currentIndex * 100; // 현재 슬라이드 위치에 따라 이동 거리 계산
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // 슬라이드 이동
}
