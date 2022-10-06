import './styles/style.css';

const jsDropDownBtn = document.querySelector('.dropdown-button-js');
const jsDropDownMenu = document.querySelector('.dropdown-menu-js');

jsDropDownBtn.addEventListener('click', toggleDropdown);

function toggleDropdown() {
	if (jsDropDownMenu.classList.contains('show')) {
		jsDropDownMenu.classList.remove('show');
	} else {
		jsDropDownMenu.classList.add('show');
	}
}
