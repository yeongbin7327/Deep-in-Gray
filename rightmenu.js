				//창을 열고 닫는 데 필요한 boolean값 지정.(처음 none과 block을 인식하지 못함)
				let flag1=false;
				let flag2=false;
				let searchflag=false;
				let shopflag=false;
				
				//로그인창 열고 닫기 
				function login() {
				let login_image =document.getElementById("member") //로그인 이미지 변경을 위해서 불러옴 
				let logindiv=document.getElementById("login_wrap") 
				let logindiv2=document.getElementById("login_wrap2") //한 아이콘으로 2개의 창을 조작해야하기 때문에 2개의 영역을 다루고 있음
				if (flag1==true && flag2 == true ) {
					logindiv.style.display = "none"; //창 닫기
					logindiv2.style.display = "none";
					flag1= false; //닫힌 경우에는 false을 줌
					flag2= false;
					login_image.src ="./img/mem_btnR.png"; //창이 닫힌 경우 원래 아이콘이 뜨도록 유도
					}
				else if (flag1 == false && flag2 == true) {
					logindiv2.style.display = "none"; //창 닫기
					flag2 =false; //닫힌 경우에는 false을 줌
					login_image.src ="./img/mem_btnR.png"; //창이 닫힌 경우 원래 아이콘이 뜨도록 유도
					}
				else if (flag1 == true && flag2 == false) {
					logindiv.style.display = "none"; //위와 동일
					flag1=false;
					login_image.src ="./img/mem_btnR.png";
					}
				else if (flag1 == false && flag2 == false) {
				logindiv.style.display = "block"; //창 열기 
				login_image.src = "./img/top_shbtnX.png"; //창이 열린 경우 창 닫기 아이콘이 뜨도록 유도
				flag1=true; //열린 경우 true를 줌
				}
			}
			//로그인 시 화면을 보여주기 위한 함수
			function login2(){
				let login_image =document.getElementById("member")
				let logindiv=document.getElementById("login_wrap")
				let logindiv2=document.getElementById("login_wrap2")
				if (flag2 == false) {
					logindiv.style.display ="none";
					logindiv2.style.display = "block";
					flag1=false;
					flag2=true;
					login_image.src = "./img/top_shbtnX.png";}
				else {logindiv2.style.display = "none"; let flag2=false; login_image.src ="./mem_btnR.png";}
			}
			
			//로그인 유효성 검사
			function login_check(){
				let id = document.getElementById("login_id"); //아이디 input을 불러옴 
				let password = document.getElementById("login_passwoard"); //패스워스 input을 불러옴
				let login_result = (id.value=="")? "아이디 항목은 필수 입력값입니다" : //아이디가 없을 시
				(password.value=="")? "패스워드 항목은 필수 입력값입니다." : "로그인에 성공하셨습니다."; //비밀번호가 없을 시 : 둘 다 있는 경우
				alert(login_result); }
			
			//검색창 열고 닫기 
			function search() {
				let search_image =document.getElementById("search")
				let searchdiv=document.getElementById("search_wrap")
				if (searchflag == false) {
					searchdiv.style.display = "flex";
					searchflag=true;
					search_image.src = "./img/top_shbtnX.png";}
				else {searchdiv.style.display = "none"; searchflag=false; search_image.src = "./img/search_btnR.png";}
			}
			
			//장바구니창 열고 닫기
			function shopper() {
				let shopper =document.getElementById("shopper"); //장바구니 이미지 변경을 위해 이미지 태그 불러옴
				let shoppernum =document.getElementById("shoppernum") //장바구니 내부 숫자 변경을 위해서 span 태그 불러옴 
				let shopperdiv=document.getElementById("shopping_wrap");
				if (shopflag==false) {
					shopperdiv.style.display = "block";
					shopper.style.background='url("./img/top_shbtnX.png") no-repeat center';
					shopper.innerText=""; //span 태그 변경을 해서 숫자 지우기
					shopflag=true;}
				else {shopperdiv.style.display = "none";
					shopflag=false;
					shopper.innerHTML=0; //span 태그에 값 넣기
					shopper.style.backgroundImage="url(' ./img/shopper_btnR.png')";
					shopper.style.backgroundRepeat="no-repeat";
					shopper.style.backgroundSize='cover';} 
			}