var arr = []; //Khởi tạo mảng 

function themSo(){ //lập hàm thêm số thủ công
    var num = Number(document.getElementById("inputNum").value)
    if(document.getElementById("inputNum").value.length == 0){
        alert('Xin vui lòng nhập 1 số')
    } else {
        arr.push(num)
    }
    document.getElementById("arr").innerHTML = "Mảng có "+arr.length+" số: "+ arr 
}
document.getElementById("addNum").onclick = themSo;

function taoMangNhanh(){ //lập hàm tạo mảng nhanh bằng cách thêm các số ngẫu nhiên vào mảng
    var soPhanTu = Number(document.getElementById("soPhanTu").value)

    for (var i = 0; i < soPhanTu; i++){
        var random = Math.round(Math.random() * (100 + 100) - 100); //Tạo số nguyên ngẫu nhiên trong khoảng -100 đến 100 áp dụng công thức tạo số ngẫu nhiên trong khoảng Min-Max = Math.random() * (Max - Min) + Min)
        arr.push(random)
    }
    document.getElementById("arr").innerHTML = "Mảng có "+arr.length+" số: "+ arr 
}
document.getElementById("btn_taoNhanh").onclick = taoMangNhanh;

/** Bài 1 - Tính tổng số dương */
function tinhTong_soDuong(){
    var sum = 0;
    var bieuThuc = ""
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>0){
            bieuThuc += arr[i] + " + "
            sum += arr[i]
        }
    }
    document.getElementById("result1").style.display = "block";  //hiện kết quả
    document.getElementById("result1").innerHTML = "Tổng các số dương của mảng là: S = " +bieuThuc+ "0 = "+ sum + "."
}
document.getElementById("btnCalc1").onclick = tinhTong_soDuong;

/** Bài 2 - Đếm số dương */
function dem_soDuong(){
    var count = 0;
    var bieuThuc = "" //biểu thức để hiển thị dãy số cộng 7 + 92 + 31 + 33 + 15 + 25 + ....
    for(var i = 0; i < arr.length; i++){ //duyệt mảng
        if(arr[i]>0){
            bieuThuc += arr[i] + ", "
            count++
        }
    }
    document.getElementById("result2").style.display = "block";  //hiện kết quả
    document.getElementById("result2").innerHTML = "Mảng có " +count+ " số dương là: " +bieuThuc+"."
}
document.getElementById("btnCalc2").onclick = dem_soDuong;

/** Bài 3 - Tìm số nhỏ nhất */

function tim_Min(){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){ //duyệt mảng
        if(arr[i] < min){
            min = arr[i]
        }
    }
    document.getElementById("result3").style.display = "block";  //hiện kết quả
    document.getElementById("result3").innerHTML = "Số nhỏ nhất mảng là: "+min+"."
}
document.getElementById("btnCalc3").onclick = tim_Min;

/** Bài 4 - Tìm số dương nhỏ nhất */

function tim_duongMin(){
    var mang_soDuong = []; //tạo mảng phụ chứa số dương từ mảng cũ
    for(var i = 0; i < arr.length; i++){ //duyệt mảng nhập vào
        if(arr[i] > 0){ //nếu số dương nhập vào mảng mới
            mang_soDuong.push(arr[i])
        }
    }

    if (mang_soDuong.length == 0) {  //thông báo khi mảng số dương không có số nào
        document.getElementById("result4").style.display = "block";  //hiện kết quả
        document.getElementById("result4").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warning
        document.getElementById("result4").innerHTML = "Không có số dương trong mảng!"
    } else {
        var duongMin = mang_soDuong[0];
        for (var i = 0; i < mang_soDuong.length; i++) { //duyệt mảng mới, tìm số dương nhỏ nhất
            if (mang_soDuong[i] < duongMin) {
                duongMin = mang_soDuong[i]
            }
        }
        document.getElementById("result4").style.display = "block";  //hiện kết quả
        document.getElementById("result4").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result4").innerHTML = "Số dương nhỏ nhất của mảng là: " + duongMin + "."
    }
}
document.getElementById("btnCalc4").onclick = tim_duongMin;

/** Bài 5 - Tìm số chẵn cuối cùng */
function timSo_chanCuoi(){
    var So_chanCuoi = arr[0] //gán tạm số chẵn cuối cần tìm là số đầu của mảng
    var count = 0; //tạo biến đếm để xem mảng có số chẵn không?
    for(var i = 0; i < arr.length; i++){ //duyệt mảng 
        if(arr[i] % 2 == 0){ //ktra xem nó phải số chẵn ko?
            So_chanCuoi = arr[i] //nếu chẵn gán nó vào kết quả
            count++;
        }
    }
    if (count == 0) {  //thông báo khi mảng số dương không có số nào
        document.getElementById("result5").style.display = "block";  //hiện kết quả
        document.getElementById("result5").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warning
        document.getElementById("result5").innerHTML = "Không có số chẵn nào trong mảng!"
    } else {
        document.getElementById("result5").style.display = "block";  //hiện kết quả
        document.getElementById("result5").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result5").innerHTML = "Số chẵn cuối cùng của mảng là: " + So_chanCuoi + "."
    }
    
}
document.getElementById("btnCalc5").onclick = timSo_chanCuoi;

/** Bài 6 - Đổi chỗ 2 giá trị trong mảng */

// Hiện các giá trị của mảng kèm vị trí để user đổi

function hienGiaTri_kemViTri(){
    var GiaTri_kemViTri = ""
    for(var i = 0; i < arr.length; i++){ //duyệt mảng
        GiaTri_kemViTri += " ["+i+"]: "+arr[i] +  "<br>"
    }
    document.getElementById("ShowArray").innerHTML = "Mảng trước khi đổi: <br>" + GiaTri_kemViTri

}
document.getElementById("btn-ShowArray").onclick = hienGiaTri_kemViTri;

//làm hàm thông báo giá trị và vị trí user đã chọn

function hienSo_daChon1(){
    var viTri1 =document.getElementById("viTri1").value
    document.getElementById("hien2soChon").innerHTML = "Bạn đã chọn đổi 2 số: " + arr[viTri1] + " (vị trí "+ viTri1+")"
}

document.getElementById("viTri1").addEventListener('change', hienSo_daChon1) 

function hienSo_daChon2(){
    var viTri2 =document.getElementById("viTri2").value
    document.getElementById("hien2soChon").append(" và số "+ arr[viTri2] + " (vị trí "+ viTri2+")")
}

document.getElementById("viTri2").addEventListener('change', hienSo_daChon2) 

//hàm đổi chỗ

function doiCho(){
    var viTri1 = document.getElementById("viTri1").value
    var viTri2 = document.getElementById("viTri2").value

    if (viTri1 >= arr.length || viTri2 >= arr.length) { //Thông báo nhắc khi user nhập vào vị trí lớn hơn độ dài mảng
        document.getElementById("result6").style.display = "block";  //hiện kết quả
        document.getElementById("result6").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warning
        document.getElementById("result6").innerHTML = "Vui lòng nhập vào vị trí nhỏ hơn " + arr.length +"!"
    } else if (viTri1.length == 0 || viTri2.length == 0 ) { //Thông báo nhắc user nhập đủ 2 vị trí cần đổi, tránh trường hợp không nhập nó mặc định vị trí là 0
        document.getElementById("result6").style.display = "block";  //hiện kết quả
        document.getElementById("result6").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warning
        document.getElementById("result6").innerHTML = "Vui lòng nhập vào cả 2 vị trí!"
    } else {
        var temp = 0;
        temp = arr[viTri1]
        arr[viTri1] = arr[viTri2]
        arr[viTri2] = temp

        var GiaTri_kemViTri = ""
        for (var i = 0; i < arr.length; i++) { //duyệt mảng
            if (i == viTri1 || i == viTri2) {
                GiaTri_kemViTri += "<span style='background-color: tomato;'>" + " [" + i + "]: " + arr[i] + " (Đã đổi) <br></span>"
            } else {
                GiaTri_kemViTri += " [" + i + "]: " + arr[i] + "<br>"
            }
        }
        document.getElementById("result6").style.display = "block";  //hiện kết quả
        document.getElementById("result6").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu success
        document.getElementById("result6").innerHTML = "Mảng sau khi đổi: <br>" + GiaTri_kemViTri
    }
    
}
document.getElementById("btnCalc6").onclick = doiCho;

    /** Bài 7 - Sắp xếp tăng dần */

function sapXep_tangDan() {
    var newArr = []; //tạo mảng mới clone từ mảng gốc, sắp xếp mảng này để ko ảnh hưởng tới mảng gốc
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    console.log(newArr)
    for (var i = 0; i < newArr.length; i++) { //duyệt mảng
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] > newArr[i]) {
                var temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp
            }
        }
    }
    console.log(newArr)
    document.getElementById("result7").style.display = "block";  //hiện kết quả
    document.getElementById("result7").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu success
    document.getElementById("result7").innerHTML = "Mảng sắp xếp tăng dần: <br>" + newArr
}
document.getElementById("btnCalc7").onclick = sapXep_tangDan;

/** Bài 8 - Tìm số nguyên tố đầu tiên */

function timSo_nguyenTo() {
    for (var i = 0; i < arr.length; i++) {  //duyệt mảng
        var So_nguyenTo = 0;
        var count = 0;
        for (var j = 1; j <= arr[i]; j++) {
            if (arr[i] % j == 0) {
                count++
            }
        }
        if (count == 2) {
            document.getElementById("result8").style.display = "block";  //hiện kết quả
            document.getElementById("result8").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu success
            document.getElementById("result8").innerHTML = "Số nguyên tố đầu tiên là: " + arr[i]
            return

        } else {
            So_nguyenTo = -1
            document.getElementById("result8").style.display = "block";  //hiện kết quả
            document.getElementById("result8").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warning
            document.getElementById("result8").innerHTML = "Không có số nguyên tố nào"
        }
    }

}

document.getElementById("btnCalc8").onclick = timSo_nguyenTo;

/** Bài 9 - Tìm số nguyên trong mảng số thực */

//Khởi tạo mảng số thực mới
var B9_arr = []; 

//lập hàm thêm số thủ công
function B9_themSo(){ 
    var num = Number(document.getElementById("B9_inputNum").value)
    if(document.getElementById("B9_inputNum").value.length == 0){
        alert('Xin vui lòng nhập 1 số')
    } else {
        B9_arr.push(num)
    }
    document.getElementById("B9_arr").innerHTML = "Mảng có "+B9_arr.length+" số: "+ B9_arr 
}
document.getElementById("B9_addNum").onclick = B9_themSo;

//lập hàm tạo mảng nhanh bằng cách thêm các số ngẫu nhiên vào mảng
function B9_taoMangNhanh(){ 
    var soPhanTu = Number(document.getElementById("B9_soPhanTu").value)

    for (var i = 0; i < soPhanTu; i++){
        var random = (Math.random() * (100 + 100) - 100).toFixed(1); //Tạo số thực ngẫu nhiên từ -100 đến 100, áp dụng công thức tạo số ngẫu nhiên trong khoảng Min-Max = Math.random() * (Max - Min) + Min)
        B9_arr.push(random)
    }
    document.getElementById("B9_arr").innerHTML = "Mảng có "+B9_arr.length+" số: "+ B9_arr 
}
document.getElementById("B9_btn_taoNhanh").onclick = B9_taoMangNhanh;

// Duyệt mảng số thực mới tạo, dùng hàm Number.isInteger() để kiểm tra số nguyên
function dem_soNguyen() {
    var count = 0; //tạo biến dùng để đếm số nguyên
    var danhSach = ""
    for (var i = 0; i <= B9_arr.length; i++) {
        if (Number.isInteger(B9_arr[i])) {
            count++;
            danhSach += B9_arr[i] + ", "
        }
    }
    console.log(count)
    if (count != 0) {
        document.getElementById("result9").style.display = "block";  //hiện kết quả
        document.getElementById("result9").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu success
        document.getElementById("result9").innerHTML = "Mảng vừa nhập có " + count + " số nguyên là: "+ danhSach
    } else {
        document.getElementById("result9").style.display = "block";  //hiện kết quả
        document.getElementById("result9").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warning
        document.getElementById("result9").innerHTML = "Mảng không có số nguyên nào!"
    }
}
document.getElementById("btnCalc9").onclick = dem_soNguyen;

    /** Bài 10 - So sánh số lượng số dương và số âm */

function soSanh_soLuong() {
    var soDuong = 0;
    var arr_soDuong = []
    var soAm = 0;
    var arr_soAm = []
    var ketqua = ""
    for (var i = 0; i < arr.length; i++) { //duyệt mảng
        if (arr[i] > 0){
            soDuong++
            arr_soDuong.push(arr[i])
        } else if (arr[i] < 0){
            soAm++
            arr_soAm.push(arr[i])

        }
        //số 0 không là số dương cũng ko là số âm
    }
    if (soDuong > soAm){
        ketqua = "Mảng có số dương nhiều hơn số âm."
    } else if (soDuong < soAm){
        ketqua = "Mảng có số âm nhiều hơn số dương."
    } else{
        ketqua = "Mảng có số âm bằng số dương."

    }
    document.getElementById("result10").style.display = "block";  //hiện kết quả
    document.getElementById("result10").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu success
    document.getElementById("result10").innerHTML = "Số lượng số dương: " + soDuong + " ("+arr_soDuong+") <br> Số lượng số âm: "+ soAm + " ("+arr_soAm+") <br>Vậy " + ketqua
}
document.getElementById("btnCalc10").onclick = soSanh_soLuong;
