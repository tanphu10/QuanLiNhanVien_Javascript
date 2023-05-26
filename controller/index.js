var arr = [];
getStorage();
renderGiaoDien();
function renderGiaoDien() {
  var content = "";
  for (i = 0; i < arr.length; i++) {
    var nhanVienUuTu = new NhanVien;
    var nhanVienitem = arr[i];
    Object.assign(nhanVienUuTu,nhanVienitem)
    content += `<tr>
   <td>${nhanVienUuTu.taiKhoan}</td>
   <td>${nhanVienUuTu.hoTen}</td>
   <td>${nhanVienUuTu.email}</td>
   <td>${nhanVienUuTu.ngayLam}</td>
   <td>${nhanVienUuTu.chucvu}</td>
   <td>${nhanVienUuTu.tongLuongNhanVien()}</td>
   <td>${nhanVienUuTu.xepLoai()}</td>
   <td class="display: flex; justifycontent: space between">
   <button class="btn btn-success " onclick="xoaNhanvien('${
     nhanVienUuTu.taiKhoan
   }')">
   <i class="fa-solid fa-trash"></i>
   </button>
   <button class="btn btn-warning " onclick="editNhanVien('${
     nhanVienUuTu.taiKhoan
   }')" data-toggle="modal"
   data-target="#myModal">
   <i class="fa-solid fa-pen-fancy"></i></i>
   </button></td>
 </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// thêm nhân viên vào mảng
document.getElementById("btnThemNV").onclick = function () {
  var nhanVienUuTu = layGiaTriInput();
  if(nhanVienUuTu){
  arr.push(nhanVienUuTu);
  console.log(nhanVienUuTu);
  saveStorage(arr);
  renderGiaoDien();
  ganGiaTriVaoInput("", "", "", "", "", "", "", "", "");
}
};

// // để xóa được nhân viên
function xoaNhanvien(taiKhoan) {
  // các bước xóa được nhân viên
  /*
bước 1. dom tới nút xóa nhân viên
xác định được cái unique của nhân viên không bị trùng
chạy vòng lặp for 
*/
  var index = timNhanVien(taiKhoan);

  if (index != -1) {
    arr.splice(index, 1);
  }
  renderGiaoDien();
}

// chỉnh sửa thông tin nhân viên
function editNhanVien(taiKhoan) {
  // document.getElementById("myModal").style.display="inline"
  /* bước 1 khi nhấn cập nhập thông tin sinh viên thì nó sẽ có được tài khoản của vị trí đó cho chạy vòng lặp để tìm được vị trí index
   */
  var index = timNhanVien(taiKhoan);
  var nhanVien = arr[index];
  // console.log(index);
  ganGiaTriVaoInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucvu,
    nhanVien.gioLamTrongThang
  );
  //   renderGiaoDien();
  // document.getElementById("tknv").readOnly = true;
  document.getElementById("email").readOnly = true;
}



// update thông tin nhân viên 
document.getElementById("btnCapNhat").onclick = function (taiKhoan) {

  /*
trình tự làm bài : 
chạy vòng lặp tìm được index trong mảng , sau đó gán index = giá trị đã cập nhập
*/
  //   var nhanVienUpdate = ;
  var updateNhanVien= layGiaTriInput();
  var index = timNhanVien(updateNhanVien.taiKhoan);
  arr[index] = updateNhanVien;
  console.log(arr[index]);
  renderGiaoDien();
  ganGiaTriChoInput("", "", "", "", "", "", "", "", "");
  // sau khi tìm ra được vị trí index thì làm ntn
};
