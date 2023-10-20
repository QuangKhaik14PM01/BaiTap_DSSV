var dssv = [];

var dataJson =localStorage.getItem('dssv_local')
if(dataJson!=null){
var result =JSON.parse(dataJson);

// convert 1 array chưa object kh có method trở thành 1 array chứa object có method
// map() ~ convert
dssv=result.map(function(item){
  return new SinhVien(item.ma,item.ten,item.emal,item.matkhau,item.toan,item.van)
});

renderDssv(dssv);
}
// thêm
function themSV() {
  
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value*1;
  var _van = document.getElementById("txtDiemVan").value*1;


  var sv =new SinhVien( _ma, _ten, _email, _matKhau, _toan, _van);
  // masinhvien
  var isValid=kiemTraMaSv(sv.ma,dssv) && kiemTraDoDai(sv.ma,'spanMaSV',4,6);
  //matKhau
  isValid=isValid & kiemTraDoDai(sv.matKhau,'spanMatKhau',6 ,10);
  //email
  isValid=isValid & kiemEmail(sv.email);
  //diemtoan
  isValid=isValid & kiemDiemToan();
  //diemvan
  isValid=isValid & kiemDiemVan();
  //tenSV
  isValid=isValid & kiemTenSV();
  if(isValid){
    
    dssv.push(sv);
   
    var dataJson=JSON.stringify(dssv);
    localStorage.setItem('dssv_local',dataJson);
  renderDssv(dssv);
  
  }


}
// xóa
function xoaSV(id){

var viTri=dssv.findIndex(function(item){

return item.ma==id
});
dssv.splice(viTri,1);
renderDssv(dssv);


}


// sửa
function suaSV(id){

 var viTri =dssv.findIndex(function(item){

  return item.ma==id;
});
var sv =dssv[viTri];


document.getElementById("txtMaSV").value=sv.ma;
document.getElementById("txtTenSV").value=sv.ten;
document.getElementById("txtEmail").value=sv.email;
document.getElementById("txtPass").value=sv.matKhau;
document.getElementById("txtDiemToan").value=sv.toan;
document.getElementById("txtDiemVan").value=sv.van;
}
// cập nhật

function capNhat(){

  var _ma = document.getElementById("txtMaSV").value;
    var viTri = timViTriSinhVien(_ma);
  
  
    var sv = layThongTinSinhVienTuForm();
    dssv[viTri] = sv;

    var dataJson = JSON.stringify(dssv);
    localStorage.setItem('dssv_local', dataJson);

    renderDssv(dssv);
    resetForm();

}

function timViTriSinhVien(maSV) {
  return dssv.findIndex(function (item) {
      
     
return item.ma == maSV;
  });
}

// Hàm lấy thông tin sinh viên từ form và trả về đối tượng SinhVien
function layThongTinSinhVienTuForm() {
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _van = document.getElementById("txtDiemVan").value * 1;

  

return new SinhVien(_ma, _ten, _email, _matKhau, _toan, _van);
}

// reset
function resetForm() {

  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemVan").value = "";
}
// search
function timKiem(){
  var tuKhoa = document.getElementById("txtSearch").value.toLowerCase();
    
   
  var ketQuaTimKiem = dssv.filter(function (sv) {
          return sv.ten.toLowerCase().includes(tuKhoa);
      });
  
      renderDssv(ketQuaTimKiem);
}