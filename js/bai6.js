// Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9]
// var celsius = parseInt(prompt("Vui lòng nhập độ C: "));
//
//
// if (celsius != "") {
//
//     var fahrenheit =celsius * 18 / 10 + 32
//
//
//
//     alert( +celsius+" Độ C sao thi chuyển thành F là :" + fahrenheit);
// }
// else {
//     alert( " Không được để trống !! ");
// }
while (true) {
    var celsius = parseInt(prompt("Vui lòng nhập độ C: "));
    if (celsius != null && celsius != undefined) {
        var fahrenheit = celsius * 18 / 10 + 32;
        alert(
            celsius +
            " Độ C sao thi chuyển thành F là : " +
            fahrenheit
        );
        break;
    }
    alert("Không được để trống !!");
}

