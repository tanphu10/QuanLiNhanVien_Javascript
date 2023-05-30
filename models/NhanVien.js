function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLamTrongThang,
  _tongLuong,
  _loaiNhanVien
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucvu = _chucVu;
  this.gioLamTrongThang = _gioLamTrongThang;

  this.tongLuongNhanVien = function () {
    // var chucDanh = document.getElementById("chucvu").value;
    var chucDanh = this.chucvu;

    switch (chucDanh) {
      case "Giám Đốc":
        {
          return 3 * this.luongCoBan;
        }
        break;
      case "Trưởng Phòng":
        {
          return 2 * this.luongCoBan;
        }
        break;
      case "Nhân Viên":
        {
          return 1 * this.luongCoBan;
        }
        break;
    }
    console.log(chucDanh)
  };
  this.xepLoai = function () {
    var tongGioLam = this.gioLamTrongThang;
    if (tongGioLam >= 192) {
      return "xuất sắc";
    } else if (tongGioLam < 192 && tongGioLam >= 176) {
      return "giỏi";
    } else if (tongGioLam < 176 && tongGioLam >= 160) {
      return "khá";
    } else if (tongGioLam < 160) {
      return "cùi bắp";
    }
  };
}
