function kiemTraRong(checkInput, idThongBao) {
  // check xem input đó có được nhập dữ liệu vào hay không nếu không có thì báo lỗi và trả về một kết quả false , nếu có trả về true
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "please this input inside";
    return false;
  }
}
// function kiemTraTaiKhoan()

function checkName(checkInput, idThongBao) {
  var regexName =/^[a-zA-Z ]+$/;
  if (regexName.test(checkInput)) {
    document.getElementById(idThongBao).innerHTM = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = " please input name ";
    return false;
  }
}

function checkEmail(checkInput, idThongBao) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (regexEmail.test(checkInput)) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "please input form email";
    return false;
  }
}

function checkAccount(checkInput, idThongBao) {
  //    var soNKiSo=0;
  if (checkInput.length >= 4 && checkInput.length <= 6) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "please you must input 4-6 characters";
    return false;
  }
}


function checkPassWord(checkInput,idThongBao){
    var regexPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/ ;
    if(regexPass.test(checkInput)){
        document.getElementById(idThongBao).innerHTML="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML="please you must input password 6-10 charecters( include at least 1 number , 1 uppercase , 1 special charecters"
    }
}


function checkIncome(checkInput,idThongBao){
    if(checkInput>=1000000&& checkInput<=20000000){
        document.getElementById(idThongBao).innerHTML="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML="please Input income basic from 1 milion VND to 20 milion VND";
        return false;
    }
}



function checkPosition(checkInput,idThongBao){
    if(checkInput=="Giám Đốc"||checkInput=="Trưởng Phòng"|| checkInput=="Nhân Viên"){
        document.getElementById(idThongBao).innerHTML="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML="please you only choose 3 option under";
        return false;
    }
}

function checkTime(checkInput,idThongBao){
    if(checkInput>=80&& checkInput<=200){
        document.getElementById(idThongBao).innerHTML="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML="please Input income from 80 to 200 ";
        return false;
    }
}


function checkDateTime(checkInput,idThongBao){
    var regexTime=/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if(regexTime.test(checkInput)){
        document.getElementById(idThongBao).innerHTML="";
        return true;
    }else{
        document.getElementById(idThongBao).innerHTML="please Input exactly dd/mm/yy ";
        return false;
    }
}