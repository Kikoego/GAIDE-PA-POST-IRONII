let students = [
    {id: 1, name: 'Андрей', surname: 'Артамонов'},
    {id: 2, name: 'Дарья', surname: 'Архипова'},
    {id: 3, name: 'Николай', surname: 'Баркалов'},
    {id: 4, name: 'Георгий', surname: 'Бочкарев'},
    {id: 5, name: 'Матвей', surname: 'Гаврилов'}
    ]
    function load_all() {
    let table = document.getElementById('tbl_all')
    for (let i = 0; i < students.length; i++) {
    let id = students[i].id
    let name = students[i].name
    let surname = students[i].surname
    
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    
    td1.textContent = id
    td2.textContent = name
    td3.textContent = surname
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    table.appendChild(tr)
    }
    }
    let id_current = 0
    function load_student(id) {
    let head = document.getElementById('zagolovok')
    head.textContent = 'Информация о студенте №' + students[id].id
    let span = document.getElementById('name')
    span.textContent = " " + students[id].name
    span = document.getElementById('surname')
    span.textContent = " " + students[id].surname
    }
    function next() {
    id_current++
    if (id_current > 0) document.getElementById("btn_prev").disabled = false
    if (id_current === students.length-1) {
    document.getElementById("btn_next").disabled = true
    }
    load_student(id_current)
    }
    function prev() {
    id_current—
    document.getElementById("btn_prev").disabled = false
    if (id_current === 0) {
    document.getElementById("btn_prev").disabled = true
    }
    load_student(id_current)
    }
    let marks = []
    
    function load_from_site() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://217.71.129.139:4035/students.php");
    xhr.send();
    xhr.onload = function (){
    if (xhr.status != 200) {
    alert('Ошибка ${xhr.status}: ${xhr.statusText');
    }
    else {
    students = JSON.parse(xhr.responseText) ["response"]
    }
    };
    xhr.onerror = function() {
    alert ("Запрос не удался");
    };
    }
    function load_all() {
    let table = document.getElementById('tbl_all')
    for (let i = 0; i < marks.length; i++) {
    let id = marks[i].id
    let name = marks [i].name
    let surname = marks[i].surname
    }
    }
    for (let x = 0; x < marks.length; x++) {
    let span = document.getElementById('scores')
    span.textContent = " " + marks[x].scores
    }