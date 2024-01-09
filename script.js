document.addEventListener("DOMContentLoaded", function (e) {
	console.log("Работаем");

	// список фраз с предсказаниями
	const predictions = [
		"Вы изабавитесь от вредной привычки... и взамен получите две новые",
		"перед Вами откроются новые двери, ведь у старых поменяют замки",
		"Вас ожидает предложение, от которого невозможно отказаться",
		"Вы научитесь считать... в шестнадцатиричной системе счисления",
		"Ваше новое железо набухнет от транзисторов",
		"настанет время разбудить в себе толстого льва",
		"Вам нельзя будет посылать колдунов и ведьм",
		"Вы купите три арбуза по 3 рубля",
		"Вас ждёт повышение на работе (офис перенесут на следующий этаж)",
		"Вас ждёт встреча с глуховатой золотой рыбкой",
		"Вы откроете новые горизонты и счёт в швейцарском банке",
		"из вашей жизни уйдёт неприятное трёхбуквенное слово - ЕГЭ",
		"выйдет S.T.A.L.K.E.R 2",
		"Вас примут на работу в VK",
		"Вам удастся прохрустеть всем позвоночником",
		"Вы вложитесь в куриные яйца и заработаете миллионы",
		"Вы проспорите и съедите банку сюрстрёмминга",
		"счастье будет ждать за Вашей дверью... будет царапать её и требовать ещё еды",
		"Вам нужно будет аккуратней обращаться со зодовьем (оно придёт выбивать долги)",
		"инутиция не подведёт Вас... хотя бы раз точно не подведёт",
		"Вы будете много плакать, но только от лука",
		"Вас ожидает интересная поездка в багажнике",
		"Вам будет несладко - Вы сядите на диету",
		"Вы станете основателем самого популярного мемного паблика",
		"Вы откроете формулу 99%-го леденца",
		"Вы примете таблетки, но никто из Ваших друзей не исчезнет",
	];

	const icons = [
		"🥳",
		"🤩",
		"👌",
		"👍",
		"🙏",
		"🍌",
		"🎂",
		"🍾",
		"✨",
		"🎉",
		"🎁",
		"🌚",
		"📈",
		"🎩",
		"🗿",
		"❗",
		"😎",
		"🥴",
		"😳",
		"😼",
	];

	// делаем приветствие
	const celebration = document.getElementById("celebration");
	const phrase1 = document.getElementById("phrase1");
	const phrase2 = document.getElementById("phrase2");
	const phrase3 = document.getElementById("phrase3");
	const phrase4 = document.getElementById("phrase4");
	const phrase5 = document.getElementById("phrase5");
	const celebrationButton = document.getElementById("go");

	let animationDelay = 2000;

	setTimeout(() => {
		phrase1.classList.remove("hidden");
	}, animationDelay);
	animationDelay += 3000;

	setTimeout(() => {
		phrase1.classList.add("hidden");
	}, animationDelay);
	animationDelay += 500;

	setTimeout(() => {
		phrase2.classList.remove("hidden");
	}, animationDelay);
	animationDelay += 1000;

	setTimeout(() => {
		phrase2.classList.add("hidden");
	}, animationDelay);
	animationDelay += 500;

	setTimeout(() => {
		phrase3.classList.remove("hidden");
	}, animationDelay);
	animationDelay += 1000;

	setTimeout(() => {
		phrase3.classList.add("hidden");
	}, animationDelay);
	animationDelay += 500;

	setTimeout(() => {
		phrase4.classList.remove("hidden");
	}, animationDelay);
	animationDelay += 1000;

	setTimeout(() => {
		phrase4.classList.add("hidden");
	}, animationDelay);
	animationDelay += 500;

	setTimeout(() => {
		phrase5.classList.remove("hidden");
	}, animationDelay);
	animationDelay += 1000;

	setTimeout(() => {
		celebrationButton.classList.remove("hidden");
	}, animationDelay);

	celebrationButton.addEventListener("click", function (e) {
		celebration.classList.add("moving");
	});

	// регуляция размеров карточек
	let cardWidth = 250;
	let cardHeight = 200;
	let sliderContains = 3;
	let distRest = 3;
	if (document.documentElement.clientWidth < 800) {
		cardWidth = 200;
		cardHeight = 200;

		if (document.documentElement.clientWidth < 640) {
			sliderContains = 2;
			distRest = 2.5;

			if (document.documentElement.clientWidth < 440) {
				// cardWidth = 150;
				// cardHeight = 200;
				sliderContains = 1;
				distRest = 2;
			}
		}
	}

	// крутилка
	const slider = document.querySelector(".slider");
	slider.style.height = cardHeight + "px";
	slider.style.width = cardWidth * sliderContains + "px";

	// движущийся контейнер с карточками
	const cardsContainer = document.getElementById("cards-container");
	cardsContainer.style.height = cardHeight + "px";

	// кнопка для управления слайдером с предсказаниями
	const fortuneButton = document.getElementById("fortune-button");
	fortuneButton.addEventListener("click", function (e) {
		e.preventDefault();
		if (fortuneButton.classList.contains("disabled")) {
			return;
		}

		// удаляем старые карточки и пересоздаём контейнер
		// const oldCards = document.querySelectorAll(".slider__card");
		// oldCards.forEach((card) => {
		// 	card.remove();
		// });

		const oldCardsContainer = document.getElementById("cards-container");
		if (oldCardsContainer != null) {
			oldCardsContainer.remove();
		}

		const cardsContainer = document.createElement("div");
		cardsContainer.classList.add("slider__content");
		cardsContainer.id = "cards-container";
		slider.append(cardsContainer);

		// cardsContainer.classList.add("no-animation");
		// cardsContainer.style.transform = "translateX(0)";
		// cardsContainer.classList.remove("no-animation");

		// кол-во карточек в слайдоре, размеры контейнера
		const cardsCount = 20;
		const cardsContainerWidth = cardWidth * cardsCount;
		cardsContainer.style.width = cardsContainerWidth + "px";

		// расстояние, которое пройдёт контйнер карточек
		const dist = (cardsCount - distRest) * cardWidth;

		// время, которое будет крутиться слайдер
		const time = 8;

		// создаём карточки
		for (let i = 0; i < cardsCount; i++) {
			const cardIcon = document.createElement("div");
			cardIcon.classList.add("slider__card-icon");
			let randIconI = randInt(0, icons.length - 1);
			cardIcon.innerText = icons[randIconI];

			const cardLabel = document.createElement("div");
			cardLabel.classList.add("slider__card-label");
			let randPhraseI = randInt(0, predictions.length - 1);
			cardLabel.innerText = predictions[randPhraseI];

			const newCard = document.createElement("div");
			newCard.classList.add("slider__card");
			newCard.style.width = cardWidth + "px";
			newCard.style.height = cardHeight + "px";

			newCard.append(cardIcon);
			newCard.append(cardLabel);

			cardsContainer.append(newCard);
		}

		// заставляем карточки двигаться
		cardsContainer.style.transitionDuration = time + "s";
		requestAnimationFrame(() => {
			cardsContainer.style.transform = `translateX(-${dist}px)`;
		});
		// cardsContainer.style.transform = `translateX(-${dist}px)`;

		fortuneButton.classList.add("disabled");

		// подсвечиваем выпавшую карточку
		setTimeout(() => {
			const cards = document.querySelectorAll(".slider__card");
			cards[cards.length - 2].classList.add("chosen");
		}, (time + 1) * 1000);

		// через время снова включаем кнопку
		setTimeout(() => {
			fortuneButton.classList.remove("disabled");
			fortuneButton.innerText = "Крутанём ещё раз?";
		}, (time + 2) * 1000);
	});

	function randInt(beg, end) {
		let rand = Math.random();
		let secCount = end - beg + 1;
		let secLen = 1 / secCount;
		let choice = Math.floor(rand / secLen);
		return choice + beg;
	}
});
