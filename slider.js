// 버튼 넘길 시에 나올 사진 배열
let imgNames = ["./img/slideimg.jpeg",
    "./img/slideimg.jpeg",
    "./img/slideimg.jpeg"
];

// 이미지 배열의 인덱스 값
let index = 0;
// 다음 이미지 함수 값         
function nextImg() {
    index++;
    if (index >= imgNames.length)
        index = 0;

    let gallery = document.querySelector(".gallery");
    gallery.style.backgroundImage = "url('" + imgNames[index] + "')";
    gallery.style.backgroundPosition = "center";
    gallery.style.backgroundSize = "cover";

    // 갤러리 사진 넘어갈 때 흐르듯 넘어가게 하는 효과
    gallery.animate({
        transform: [
            'translateX(1200px)',
            'translateX(0px)'
        ]
    },
        {
            duration: 500               // 위 효과 0.5초간 지속
        });
}

// 전 이미지 함수 값
function prevImg() {
    index--;
    if (index <= 0)
        index = imgNames.length - 1;

    let gallery = document.querySelector(".gallery");
    gallery.style.backgroundImage = "url('" + imgNames[index] + "')";
    gallery.style.backgroundPosition = "center"
    gallery.style.backgroundSize = "cover";

    // 갤러리 사진 전으로 넘어갈 때 흐르듯 넘어가게 하는 효과
    gallery.animate({
        transform: [
            'translateX(-1200px)',
            'translateX(0px)'
        ]
    },
        {
            duration: 500
        });
}