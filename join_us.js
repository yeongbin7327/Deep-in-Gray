
// 유효성 체크
function check(){
    let frm = document.frm;
    let userId = frm.userId;
    let userPw = frm.userPw;
    let userPwC = frm.userPwC;
    let userName = frm.userName;
    let userPn = frm.userPn;
    let userPn2 = frm.userPn2;
    let userEmail = frm.userEmail;

    if(userId.value == ""){
        alert("아이디를 입력하세요.");
        userId.focus();
    }
    else if(userPw.value == ""){
        alert("비밀번호를 입력하세요.");
        userPw.focus();
    }
    else if(userPwC.value == ""){
        alert("비밀번호 확인을 입력해주세요.");
        userPwC.focus();
    }
    else if((userPw.value != userPwC.value)){
        alert("비밀번호가 일치하지 않습니다.");
        userPwC.focus();
    }
    else if(userName.value == ""){
        alert("이름을 입력해주세요.");
        userName.focus();
    }    
    else if(userPn.value == ""){
        alert("휴대폰 번호를 입력하세요.");
        userPn.focus();
    }
    else if(userPn2.value == ""){
        alert("휴대폰 번호 뒷자리를 입력하세요.");
        userPn2.focus();
    }
    else if(userEmail.value == ""){
        alert("이메일을 입력하세요.");
        userEmail.focus();
    }else{
        alert("회원가입 완료!");
        frm.submit();  // index로 이동하도록 함수 추가
    }
}

// 체크박스 클릭했을 때 전체 다 클릭 되는 함수
function checkAll(checkAll){
    let checkboxes = document.getElementsByName("checkbox");

    checkboxes.forEach((checkbox)=>{
        checkbox.checked=checkAll.checked;
    })
}   

// 동의박스 3개 펼쳐지는 함수
let openBox = true;
function doDisplay(){
    let con = document.getElementById("scroll_box1");
    if(con.style.display=='none'){
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}
function doDisplay2(){
    let con = document.getElementById("scroll_box2");
    if(con.style.display=='none'){
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}
function doDisplay3(){
    let con = document.getElementById("scroll_box3");
    if(con.style.display=='none'){
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}