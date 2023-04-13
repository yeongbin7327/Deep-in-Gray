
// checkbox 전체선택, 전체해제
function checkAll(checkAll){
    let checkboxes = document.getElementsByName("checkbox");

    checkboxes.forEach((checkbox)=>{
        checkbox.checked=checkAll.checked;
    })
}

// 선택한 checkbox 삭제하기
function deleteSelectedRow(){       
   let tbody = document.getElementById("tbody");
   let boxs =  tbody.querySelectorAll("input[type='checkbox']");         
 
   for( let i=boxs.length; i>0 ; i--){
       let checkbox = boxs[i-1];
       if(checkbox.checked) {
        let tr = checkbox.parentElement.parentElement;
        tbody.removeChild(tr);                 
     }
   }
   cartPrice();
   cartPriceall();
   trPrice();
   trAllPrice();
}

// 위 아래 버튼으로 제품 수량 변경
function upper_count(){
    let item_numberdiv = document.getElementById("item_number_2"); //input 부분 불러오기
    let item_numbervalue = parseInt(item_numberdiv.value); //불러온 값을 int값으로 바꾸기
    item_numbervalue = item_numbervalue + 1; //누를 때마다 수량 추가
    item_numberdiv.value= item_numbervalue; //input에 값 넣기
    }    
function lower_count(){
    let item_numberdiv = document.getElementById("item_number_2");
    let item_numbervalue = parseInt(item_numberdiv.value);
    item_numbervalue = item_numbervalue - 1;
    if (item_numbervalue < 0) {alert("0이하의 값은 선택할 수 없습니다."); item_numbervalue = 0;}
    item_numberdiv.value= item_numbervalue; }


// 수량 변경으로 인한 합계 금액 변경(1)
function allPrice() {
    let item_numberdiv = document.getElementById("item_number_2"); //input
    let goods_price = document.getElementById("goods_price"); //상품 가격
    let allpricediv= document.getElementById("mulgoodsprice"); //한 상품의 총 가격
    let goods_pricevalue = parseInt(goods_price.innerHTML);
    let item_numbervalue = parseInt(item_numberdiv.value);
    let allprice = goods_pricevalue * item_numbervalue;
    allpricediv.innerHTML= allprice;

    cartPrice();
    cartPriceall();
    trPrice();
    trAllPrice();
}

// 합계 금액 + 배송비(3,000원) = 총 합계 금액 변경(2)
function cartPrice() {
    let mulgoodspricediv= document.getElementById("mulgoodsprice"); //한 상품의 총 가격
    let allgoodspricediv= document.getElementById("allgoodsprice");
    let mulgoodsprice = 0;
    if (mulgoodspricediv == null ) {mulgoodsprice = 0;}
    else {mulgoodsprice = parseInt(mulgoodspricediv.innerHTML);}
    allgoodspricediv.innerHTML = mulgoodsprice;
}

function cartPriceall() {
    let allgoodspricediv= document.getElementById("allgoodsprice");
    let allpricediv= document.getElementById("allprice");
    let allgoodsprice = 0;
    if (allgoodspricediv == null ) {allgoodsprice = 0;}
    else {allgoodsprice =parseInt(allgoodspricediv.innerText);} 
    allpricediv.innerText = allgoodsprice;
}

// 두번째 표에서 총 상품금액(1값과 동일)으로 변경하고 결제예정금액 부분이 (2)와 같은 값으로 변경
function trPrice() {
    let mulgoodspricediv = document.getElementById("mulgoodsprice");
    let trmulprice = document.getElementById("trmulprice");
    let mulgoodsprice = 0;
    if (mulgoodspricediv == null ) {mulgoodsprice = 0;}
    else {mulgoodsprice =parseInt(mulgoodspricediv.innerHTML);} 
    trmulprice.innerHTML = mulgoodsprice; 
} 

function trAllPrice() {
    let allgoodspricediv= document.getElementById("allgoodsprice");
    let trallpricediv= document.getElementById("trallprice");
    let allgoodsprice = 0;
    if (allgoodspricediv == null ) {mulgoodsprice = 0;}
    else {allgoodsprice =parseInt(allgoodspricediv.innerText);}   
    trallprice.innerText = allgoodsprice;
}  

// 삭제 버튼 클릭시 confirm 확인시 해당 tr 삭제
function rowDel(obj){
    if(confirm("선택하신 상품을 삭제하시겠습니까?")){
        let tr = obj.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
        cartPrice();
        cartPriceall();
        trPrice();
        trAllPrice();
    }else{
        return false;
    }
}

//주문하기, 관심상품등록 클릭 로그인 페이지로 이동 alert
function login_btn(){
    alert("로그인 페이지로 이동합니다.")
}

// 장바구니 비우기 클릭시
function empty_cart() {
    let ret = confirm("장바구니를 비우시겠습니까?");
    return ret;
}