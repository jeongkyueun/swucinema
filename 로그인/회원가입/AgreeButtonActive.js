document.addEventListener('DOMContentLoaded', function () {
    const chkAll = document.getElementById('chkAll');
    const chkboxes = document.querySelectorAll('.chk');
    const optionalChkboxes = document.querySelectorAll('.optional-chk');
    const agreeButton = document.querySelector('.fpmgBt2');
    const disagreeButton = document.getElementById('disagreeBtn');
    const joinForm = document.getElementById('joinForm');

    // 모든 개별 체크박스를 검사하여 모두 체크되었는지 확인하는 함수
    function checkAllBoxes() {
        let allChecked = true;
        chkboxes.forEach(function (chkbox) {
            if (!chkbox.checked) {
                allChecked = false;
            }
        });
        agreeButton.disabled = !allChecked;

        //체크박스가 모두 체크되었는지 확인하여 클래스 추가
        if (allChecked) {
            agreeButton.classList.add('active');
        } else {
            agreeButton.classList.remove('active');
        }
    }

    // chkAll 체크박스 클릭 시 모든 개별 체크박스의 상태를 변경
    chkAll.addEventListener('click', function () {
        const allChecked = chkAll.checked;
        chkboxes.forEach(function (chkbox) {
            chkbox.checked = allChecked;
        });
        optionalChkboxes.forEach(function (chkbox) {
            chkbox.checked = allChecked;
        });
        checkAllBoxes();
    });

    // 개별 체크박스 클릭 시 chkAll 체크박스의 상태를 업데이트하고 '동의' 버튼 활성화 상태를 확인
    chkboxes.forEach(function (chkbox) {
        chkbox.addEventListener('click', function () {
            chkAll.checked = Array.from(chkboxes).every(function (chk) {
                return chk.checked;
            }) && Array.from(optionalChkboxes).every(function (chk) {
                return chk.checked;
            });
            checkAllBoxes();
        });
    });

    // 선택 사항 체크박스 클릭 시 상태 업데이트
    optionalChkboxes.forEach(function (chkbox) {
        chkbox.addEventListener('click', function () {
            chkAll.checked = Array.from(chkboxes).every(function (chk) {
                return chk.checked;
            }) && Array.from(optionalChkboxes).every(function (chk) {
                return chk.checked;
            });
        });
    });

    // 동의 버튼 클릭 시 폼 제출
    agreeButton.addEventListener('click', function () {
        if (!agreeButton.disabled) {
            joinForm.submit();
        }
    });

     // 비동의 버튼 클릭 시 경고 메시지 표시
    disagreeButton.addEventListener('click', function () {
        alert('필수 약관에 동의하지 않으면 회원가입을 완료할 수 없습니다.');
    });

    // 페이지 로드 시 초기 상태 확인
    checkAllBoxes();
});
