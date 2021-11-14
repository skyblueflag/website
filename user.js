/* function StResult(){
    var form = document.getElementById("StudentsForm");
    document.getElementById("S").innerHTML = form.value;
    alert(form.value);
} */
var name = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var address = document.getElementById("address");
var btn = document.getElementById("btn");
var list = document.getElementById("list");
btn.addEventListener("click",function(){
    list.innerHTML = list.innerHTML + `
    <div>
        <p>${name.value}今年${age.value}岁，来自${address}。</p>
    </div>
    `;
})