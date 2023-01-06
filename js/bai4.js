function hello(){
  //  alert("xin chao cac ban");

    var text1 = "hello";
    var text2="hi"
    var text3=text1.concat("",text2);
    // alert(text3)

    var p = document.createElement('p');

    // Gán giá trị của trường username và password vào phần tử p
    p.innerHTML = text3 ;


    // Thêm phần tử p vào trang web

    document.body.appendChild(p);

}


