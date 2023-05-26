


function kiemTraRong(checkInput, idThongBao){
    // check xem input đó có được nhập dữ liệu vào hay không nếu không có thì báo lỗi và trả về một kết quả false , nếu có trả về true 
    if(checkInput){
        document.getElementById(idThongBao).innerHTML="";
        return true;
    } else{
        document.getElementById(idThongBao).innerHTML="please this input inside"
        return false;
    }
}
// function kiemTraTaiKhoan()