document.addEventListener("DOMContentLoaded", function () { //DOMContentLoaded 이벤트 리스너 : 문서가 완전히 로드된 후에만 코드 실행
    const inputs = document.querySelectorAll(".userInput input");
    const emailSelect = document.getElementById("mail_Select");
    const button = document.getElementById("join_button");

    function validateForm() {
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") { //input 요소를 순회하며 값이 비어있는지 확인
                allFilled = false; //하나라도 비어있다면 allFilled를 false로 설정
            }
        });

        if (emailSelect.value === "이메일 선택") {
            allFilled = false; //이메일이 선택되지 않았으면 allFilled를 false로 설정
        }

        button.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener("input", validateForm);
    });

    emailSelect.addEventListener("change", validateForm);

    validateForm();
})