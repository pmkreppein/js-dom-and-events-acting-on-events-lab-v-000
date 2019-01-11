function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


function retrieveEmployeeInformation() {
	return document.querySelector('[name="name"]').value;
}

function addNewElementAsLi() {
	let x = retrieveEmployeeInformation()
	document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${x}</li>` )
}

function addNewLiOnClick() {
	let submit = document.querySelector('input[type="submit"]')
	submit.addEventListener('click', function(e) {
		addNewElementAsLi()
		document.querySelector('input').value = ''
	})
}

function clearEmployeeListOnLinkClick() {
	let clearClick = document.querySelector('a')
	let ul = document.querySelectorAll('.employee-list')
	clearClick.addEventListener('click', function(event) {
		ul.forEach(e => e.innerHTML = '');
	})
} 