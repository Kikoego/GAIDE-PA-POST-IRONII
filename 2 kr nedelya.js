let students = []
let id_info = 0

//Загрузка информации с сайта
function load_from_site(){
    $.get('http://217.71.129.139:4003/students.php', function(data){
    	students = JSON.parse(data)['response']
    });
}

function load_group() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		let group = students[i].group
		let scores = students[i].scores

		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('td')
		let td5 = document.createElement('td')


		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname
		td4.textContent = group
		td5.textContent = scores
	
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5)
	
		table.appendChild(tr)
		
		if (students[i].group != students[i+1].group) {
			break;
		}
		if (students[i].group == 'И-02') {
			continue;
		  }
	}
}

function load_group2() {
	let table = document.getElementById('tbl_all')
	for (let i = 22; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		let group = students[i].group
		let scores = students[i].scores

		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('td')
		let td5 = document.createElement('td')

		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname
		td4.textContent = group
		td5.textContent = scores
	
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5)
	
		table.appendChild(tr)
		
		if (students[i].group != students[i].group) {
			break;
		}
	}
}

function load_student(id) {
	let name_info = document.getElementById('name')
	name_info.textContent = students[id].name
	let surname_info = document.getElementById('surname')
	surname_info.textContent = students[id].surname
	if (id_info === 0){
	 	$("#btn_prev").attr({"disabled": "true"});
	}
}