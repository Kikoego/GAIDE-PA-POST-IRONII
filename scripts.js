let students = []
let id_info = 0

//Загрузка информации с сайта
function load_from_site(){
    $.get('http://217.71.129.139:4035/students.php', function(data){
    	students = JSON.parse(data)['response']
    });
}

function load_all() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname

		//создание строки и 3 ячеек
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('button')
		td4.textContent = 'Подробнее'


		//Запись данный в ячейки
		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname
	
		//вствка ячейки в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
	
		//вставка строки в таблицу
		table.appendChild(tr)
	}
}



function load_student(id) {
	$("#zagolovok").html('Информация о студенте № ' + students[id].id)
	$("#name").html(students[id].name)
	$("#surname").html(students[id].surname)

	if (id_info === 0) $('#btn_prev').attr({"disabled": true })
	if (id_info < students.length-1){ 
		$('#btn_next').attr({"disabled": false })
	}
	if (id_info > 0) $('#btn_prev').attr({"disabled": false })
	if (id_info === students.length-1){
		$('#btn_next').attr({"disabled": true })
	}	

}



function next(){
	id_info+=1		
	load_student(id_info)
}

function prev() {
	id_info-=1
	load_student(id_info)	
}
function {

}