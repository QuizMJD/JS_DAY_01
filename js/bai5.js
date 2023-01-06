// // Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.
//
// var a = parseInt(prompt("Vui lòng nhập điểm môn Vật Lý: "));
// var b = parseInt(prompt("Vui lòng nhập điểm môn Hóa: "));
// var c = parseInt(prompt("Vui lòng nhập điểm môn Sinh Học: "));
//
//
// if (a,b,c != "") {
//     var d =(a+b+c)/3
//     alert( " điểm trung bình là " + d);
// } else {
//     alert( " vui lòng nhập đủ điểm tất cả các môn ");
// }
var a, b, c;
while (true) {
    a = parseInt(prompt("Vui lòng nhập điểm môn Vật Lý: "));
    b = parseInt(prompt("Vui lòng nhập điểm môn Hóa: "));
    c = parseInt(prompt("Vui lòng nhập điểm môn Sinh Học: "));
    if (a && b && c) {
        break;
    }
    alert("Vui lòng nhập đủ điểm tất cả các môn");
}

var d = (a + b + c) / 3;
alert("điểm trung bình là " + d);
