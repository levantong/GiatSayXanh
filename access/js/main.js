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
        var random = Math.round(Math.random() * (100 + 100) - 100); //áp dụng công thức tạo số ngẫu nhiên trong khoảng Min-Max = Math.random() * (Max - Min) + Min)
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
        document.getElementById("result4").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
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
        document.getElementById("result5").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
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
    for(var i = 1; i < arr.length; i++){ //duyệt mảng
        GiaTri_kemViTri += arr[i] + " (Vị trí: "+i+") <br>"
    }
    document.getElementById("ShowArray").innerHTML = "Mảng trước khi đổi: " + GiaTri_kemViTri

}
document.getElementById("btn-ShowArray").onclick = hienGiaTri_kemViTri;


function doiCho(){
    var viTri1 = Number(document.getElementById("viTri1").value)
    var viTri2 = Number(document.getElementById("viTri2").value)

    if (viTri1 > arr.length || viTri2 > arr.length) {
        document.getElementById("result6").style.display = "block";  //hiện kết quả
        document.getElementById("result6").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result6").innerHTML = "Vui lòng nhập vào vị trí nhỏ hơn " + arr.length +"!"
    } else {
        var temp = 0;
        temp = arr[viTri1]
        arr[viTri1] = arr[viTri2]
        arr[viTri2] = temp

        var GiaTri_kemViTri = ""
        for (var i = 1; i <= arr.length; i++) { //duyệt mảng
            if (i == viTri1 || i == viTri2) {
                GiaTri_kemViTri += "<span style='background-color: tomato;'>" + arr[i] + " (Vị trí: " + i + ") - Đã đổi <br> </span>"
            } else {
                GiaTri_kemViTri += arr[i] + " (Vị trí: " + i + ") <br>"
            }
        }
        document.getElementById("result6").style.display = "block";  //hiện kết quả
        document.getElementById("result5").className = "alert alert-success mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result6").innerHTML = "Mảng sau khi đổi: " + GiaTri_kemViTri
    }
    
}
document.getElementById("btnCalc6").onclick = doiCho;

