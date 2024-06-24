const pages = document.querySelectorAll('.cont');
const paginationLinks = document.querySelectorAll('.page-link');
const firstPageLink = document.getElementById('first-page');
const prevPageLink = document.getElementById('prev-page');
const nextPageLink = document.getElementById('next-page');
const lastPageLink = document.getElementById('last-page');
let currentPage = 1;

const updateGallery = (page) => {
	pages.forEach((pageDiv, index) => {
		pageDiv.style.display = (index + 1 === page) ? 'block' : 'none';
	});
};

paginationLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		currentPage = parseInt(link.getAttribute('data-page'));
		updateGallery(currentPage);
	});
});

firstPageLink.addEventListener('click', (e) => {
	e.preventDefault();
	currentPage = 1;
	updateGallery(currentPage);
});

prevPageLink.addEventListener('click', (e) => {
	e.preventDefault();
	if (currentPage > 1) {
		currentPage--;
		updateGallery(currentPage);
	}
});

nextPageLink.addEventListener('click', (e) => {
	e.preventDefault();
	if (currentPage < pages.length) {
		currentPage++;
		updateGallery(currentPage);
	}
});

lastPageLink.addEventListener('click', (e) => {
	e.preventDefault();
	currentPage = pages.length;
	updateGallery(currentPage);
});

document.querySelectorAll('.cont img').forEach(img => (
	img.onclick = () => {
		document.querySelector('.popup').style.display = 'flex';
		document.querySelector('.popup img').src = img.getAttribute('src');
	}
));

document.querySelector('.popup span').onclick = () => {
	document.querySelector('.popup').style.display = 'none';
};

updateGallery(currentPage);