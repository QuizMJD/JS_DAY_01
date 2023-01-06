var a = prompt("Nhập số a: ");
var b = prompt("Nhập số b: ");

if (a % b == 0) {
    alert(a + " là bội số của " + b);
} else {
    alert(a + " không phải là bội số của " + b);
}



// Hàm prompt() sẽ hiển thị một hộp thoại để người dùng nhập vào một giá trị. Khi người dùng nhấn nút "OK", giá trị mà người dùng nhập sẽ được lưu vào biến a và b.
//
//     Sau đó, chúng ta sử dụng toán tử chia lấy dư % để kiểm tra xem a có phải là bội số của b hay không. Nếu a % b bằng 0, thì a là bội số của b. Nếu không, a không phải là bội số của b.
//
//     Cuối cùng, chúng ta sử dụng hàm alert() để hiển thị kết quả ra màn hình.
