function renderDssv(dssv) {
  var contentHTML = "";

  // duyệt mảng
  for (var i = 0; i < dssv.length; i++) {
    var svdata = dssv[i];
    var trSring = `<tr>   
                     <td>${svdata.ma}</td> 
                     <td>${svdata.ten}</td> 
                    <td>${svdata.email}</td> 
                    <td>${svdata.tinhDTB()}</td> 
                    <td>
                    <button class='btn btn-danger' onclick="xoaSV('${
                      svdata.ma
                    }')"> Xóa</button>
                    <button class='btn btn-warning' onclick="suaSV('${svdata.ma}')" > Sửa</button>
                    </td>
  
                    </tr>`;
    contentHTML = contentHTML + trSring;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
