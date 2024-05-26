const tasksList = document.querySelector('.tasks__list')
function fetchUsers() {
	return fetch('https://66530f13813d78e6d6d70e86.mockapi.io/users').then(
		response => {
			return response.json()
		}
	)
}
const renderUsers = users => {
	const marcup = users
	.map(users => {
		const { text, checked, id } = users
		return `
			
                <li class="tasks__item">
                    <input class="task__checked" type="checkbox" ${checked ? "checked" : ""}
										<p class="task__content">${text}</p>
                    <div class="tasks__change">
                        <span class="custom__task"></span>
                        <span class="remove__task"></span>
                    </div>
                </li>
			`
	})
	.join('')
	console.log(tasksList)
	tasksList.innerHTML = marcup
	console.log(marcup)
}

fetchUsers()
	.then(users => renderUsers(users))
	.catch(error => console.log(error))

// "Григорій"