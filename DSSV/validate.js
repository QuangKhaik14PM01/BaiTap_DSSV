function kiemTraMaSv(id, dssv) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (viTri != -1) {
    document.getElementById("spanMaSV").innerHTML =
      "Mã sinh viên đã được sử dụng";
    return false;
  } else {
    // phải clear dòng span để layout trả về mặc định
    document.getElementById("spanMaSV").innerHTML = "";
    return true;
  }
}
function kiemTraDoDai(value, idErr, min, max) {
  var length = value.length;
  if (length > min && length < max) {
    document.getElementById(idErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idErr
    ).innerHTML = `Độ dài phải từ ${min} giá trị đến ${max} giá trị `;
    return false;
  }
}

function kiemEmail(email) {
  // thư viện trong stackoverflow
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = re.test(email);
  if (isValid) {
    document.getElementById("spanEmailSV").innerHTML = "";
    return true;
  }
  document.getElementById("spanEmailSV").innerHTML = "email không hợp lệ";
  return false;
}

function kiemDiemToan() {
  var diemToanInput = document.getElementById("txtDiemToan").value;
  var diemToan = parseFloat(diemToanInput);

  if (isNaN(diemToan) || diemToan.toString() !== diemToanInput) {
      document.getElementById("spanToan").innerText = "Điểm toán phải là một số.";
      return false;
  } else {
      document.getElementById("spanToan").innerText = ""; 
      return true;
  }
}

function kiemDiemVan() {
  var diemVanInput = document.getElementById("txtDiemVan").value;
  var diemVan = parseFloat(diemVanInput);

  if (isNaN(diemVan) || diemVan.toString() !== diemVanInput) {
      document.getElementById("spanVan").innerText = "Điểm văn phải là một số.";
      return false;
  } else {
      document.getElementById("spanVan").innerText = ""; 
      return true;
  }
}

function kiemTenSV() {
  var tenSV = document.getElementById("txtTenSV").value.trim();

  if (tenSV === "") {
      
     
document.getElementById("spanTenSV").innerText = "Tên sinh viên không được để trống.";
      return false;
  } else {
      
     
document.getElementById("spanTenSV").innerText = ""; 
      return true;
  }
}
