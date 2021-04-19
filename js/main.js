const navigateSection = document.querySelectorAll('.card-name');
const pic = document.querySelector('.active-img');

const city = document.querySelector('.card-city');
const area = document.querySelector('.card-area');
const time = document.querySelector('.card-time');
const cost = document.querySelector('.card-cost');

const prev = document.querySelector('.arr-left');
const next = document.querySelector('.arr-right');
const circle = document.querySelectorAll('.circle');

const slide = [{
		pic: 'img-webp/slide-image1.webp',
		city: 'Rostov-on-Don LCD admiral',
		area: '81 m2',
		time: '3.5 months',
		cost: 'Upon request',
	},
	{
		pic: 'img-webp/slide-image2.webp',
		city: 'Sochi Thieves',
		area: '105 m2',
		time: '4 months',
		cost: 'Upon request',
	},
	{
		pic: 'img-webp/slide-image3.webp',
		city: 'Rostov-on-Don Patriotic',
		area: '93 m2',
		time: '3 months',
		cost: 'Upon request',
	}
];

let currIndex = slide.length;
let startIndex = 0;

const activeDot = (circle, dot) => {
	circle.forEach((dot) => {
		dot.classList.remove('enabled');
	});
	dot.classList.add('enabled');
};

const activeNav = (navigateSection, nav) => {
	navigateSection.forEach((nav) => {
		nav.classList.remove('active');
	});
	nav.classList.add('active');
};

let slider = (index) => {
	pic.src = slide[index].pic;
	city.innerHTML = slide[index].city;
	area.innerHTML = slide[index].area;
	time.innerHTML = slide[index].time;
	cost.innerHTML = slide[index].cost;
	activeDot(circle, circle[index]);
	activeNav(navigateSection, navigateSection[index]);
};

next.addEventListener('click', () => {
	if (startIndex === currIndex - 1) {
		startIndex = 0;
	} else {
		startIndex += 1;
	}
	slider(startIndex);
});

prev.addEventListener('click', () => {
	if (startIndex === 0) {
		startIndex = currIndex - 1;
	} else {
		startIndex -= 1;
	}
	slider(startIndex);
});

navigateSection.forEach((item, i) => {
	item.addEventListener('click', () => {
		slider(i);
	});
});


circle.forEach((item, i) => {
	item.addEventListener('click', () => {
		slider(i);
	});
});