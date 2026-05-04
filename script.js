function login() {
  const userId = document.getElementById("userId").value;
  const userPw = document.getElementById("userPw").value;

  if (userId.trim() === "" || userPw.trim() === "") {
    alert("아이디와 비밀번호를 입력해주세요.");
    return;
  }

  // 로그인 기능은 아직 실제 서버가 없으니까
  // 일단 다음 화면으로 넘어가도록 설정
  location.href = "survey.html";
}

function skipLogin() {
  location.href = "survey.html";
}
