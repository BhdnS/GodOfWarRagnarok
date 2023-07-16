export class Lang {
	constructor(params) {
		this.lang = params.lang;
		this.ru = params.ru;
		this.en = params.en;
		this.buyNow = params.buyNow;
		this.buyDual = params.buyDual;
		this.headerSubtitle = params.headerSubtitle;
		this.editionsLang = params.editionsLang;
		this.aboutGameLang = params.aboutGameLang;
		this.videoTitle = params.videoTitle;
		this.videoBtn = params.videoBtn;
		this.read = params.read;
		this.realease = params.realease;
		this.d = params.d;
		this.h = params.h;
		this.m = params.m;
		this.standardEdition = params.standardEdition;
		this.offline = params.offline;
		this.remote = params.remote;
		this.trigger = params.trigger;
		this.changePrice = params.changePrice;
		this.digital = params.digital;
		this.allFeatures = params.allFeatures;
		this.armour = params.armour;
		this.soundtrack = params.soundtrack;
		this.dualTextOne = params.dualTextOne;
		this.dualTextTwo = params.dualTextTwo;
		this.dualTitle = params.dualTitle;
		this.controller = params.controller;
		this.explore = params.explore;
		this.exploreTitle = params.exploreTitle;
		this.exploreSubtitle = params.exploreSubtitle;
		this.minimum = params.minimum;
		this.recommended = params.recommended;
		this.exploreSubtitlePS = params.exploreSubtitlePS;
		this.standard = params.standard;
		this.limited = params.limited;
		this.newsLang = params.newsLang;
		this.newsCardOneTitle = params.newsCardOneTitle;
		this.newsCaraOneText = params.newsCaraOneText;
		this.newsCardTwoTitle = params.newsCardTwoTitle;
		this.newsCardTwoText = params.newsCardTwoText;
		this.newsCardTitleThree = params.newsCardTitleThree;
		this.newsCardThreeText = params.newsCardThreeText;
		this.footerLang = params.footerLang;
		this.footerPara = params.footerPara;
		this.faqSubtitleOne = params.faqSubtitleOne;
		this.faqTxtOne = params.faqTxtOne;
		this.faqSubtitleTwo = params.faqSubtitleTwo;
		this.faqTxtTwo = params.faqTxtTwo;
		this.popupSumma = params.popupSumma;
		this.popupPara = params.popupPara;
		this.popupAgree = params.popupAgree; 
		this.popupInstant = params.popupInstant;
		this.popupExpire = params.popupExpire;
		this.popupCard = params.popupCard;
		this.popupSubtitle = params.popupSubtitle;
		this.faqLang = params.faqLang;
	}

	clickLang() {
		this.lang.addEventListener('click', (e) => {
			if (this.lang.classList.contains('en')) {
				this.langRu();
			}
			else if (this.lang.classList.contains('ru')) {
				this.langEn();
			}
		})
	}

	languageInLocalStorage() {
		const language = localStorage.getItem('language');
		if (language === 'ru') {
			this.langRu();
		} else if (language === 'en') {
			this.langEn();
		}
	}

	langRu() {
		document.documentElement.lang = 'ru';
		this.lang.classList.remove('en');
		this.lang.classList.add('ru');
		this.en.classList.add('display_none');
		this.ru.classList.remove('display_none');
		this.buyNow.forEach(e => {
			e.textContent = 'Купить';
		});
		this.buyDual.textContent = 'купить контроллер с игрой';
		this.headerSubtitle.textContent = `Действие происходит через три года после событий предыдущей игры, Фимбулвинтер, великая зима, которая длится три лета, подходит к концу, и начнется предсказанный Рагнарёк.`;
		this.editionsLang.forEach(e => {
			e.textContent = 'Издания';
		});
		this.aboutGameLang.forEach(e => {
			e.textContent = 'Об игре';
		});
		this.videoTitle.textContent = 'Смотреть трейлер';
		this.videoBtn.textContent = 'Воспроизвести';
		this.read.forEach(e => {
			e.textContent = 'Читать';
		});
		this.realease.textContent = 'Релиз:';
		this.d.textContent = 'Д';
		this.h.textContent = 'Ч';
		this.m.textContent = 'М';
		this.standardEdition.forEach(e => {
			e.textContent = 'Стандартное издание';
		});
		this.offline.forEach(e => {
			e.textContent = 'Автономная игра включена'
		});
		this.remote.forEach(e => {
			e.textContent = 'Дистанционная поддержка'
		});
		this.trigger.forEach(e => {
			e.textContent = 'Поддержка тригера'
		});
		this.changePrice.textContent = 'Купить';
		this.digital.textContent = 'Расширенное издание';
		this.allFeatures.textContent = 'Все возможности стандартной версии';
		this.armour.textContent = 'Броня тёмной долины';
		this.soundtrack.textContent = 'Официальный цифровой саундтрек';
		this.dualTextOne.innerHTML = `<p id="dualTextOne" class="dual_text">Вы также можете купить эксклюзивный контроллер с игрой <span class="text-blue">God of War Ragnarok</span> для PS5</p>`;
		this.dualTextTwo.innerHTML = `<p id="dualTextTwo" class="dual_text">При покупке контроллера и игры (любого издания) вы получите <span class="text-red">15%</span>  скидка на два товара.</p>`;
		this.dualTitle.textContent = 'Контроллер';
		this.controller.forEach(e => {
			e.textContent = 'Контроллер';
		});
		this.explore.forEach(e => {
			e.textContent = 'Детали'
		});
		this.exploreTitle.textContent = 'Детали God of War серии';
		this.exploreSubtitle.textContent = 'Системные требования для God of War (PC)';
		this.minimum.textContent = 'Минимальные';
		this.recommended.textContent = 'Рекомендуемые';
		this.exploreSubtitlePS.textContent = 'God of War для PS4';
		this.standard.textContent = 'Стандартная';
		this.limited.textContent = 'Ограниченная';
		this.newsLang.forEach(e => {
			e.textContent = 'Новости'
		});
		this.newsCardOneTitle.textContent = 'получит большое обновление при выпуске';
		this.newsCaraOneText.textContent = `God of War: Ragnarok быстро приближается.
		Неудивительно, что в последнее время мы регулярно получаем новую информацию и материалы, связанные с названием.
		На прошлой неделе вышел трейлер, демонстрирующий возможности игры на PlayStation 5.
		попал в сеть, а чуть раньше мы узнали, что работа над постановкой завершена. Между тем оказывается, что грядущий сиквел приключений Кратоса и Атрея получит крупное обновление при выходе.`;
		this.newsCardTwoTitle.textContent = 'является одной из крупнейших игр для PS4';
		this.newsCardTwoText.textContent = `Любители цифрового распространения должны быть готовы к множеству загрузок. Второе с премьеры приключение Кратоса и Атрея на Крайнем Севере займет почти 120 ГБ — принимая решение о покупке игры в PlayStation Store, стоит грамотно спланировать загрузку, чтобы начать игру в день премьеры.`;
		this.newsCardTitleThree.textContent = 'это последняя глава эпической истории';
		this.newsCardThreeText.textContent = `В игру вернутся не только знакомые персонажи, но и совершенно новые. Речь здесь идет о Торе, представленном как жестокий и психически неуравновешенный исполнитель «грязной работы» на службе у Одина, а также сам повелитель богов, оставивший свой след в событиях предыдущей части, хотя и лично в нем не фигурировал.`;
		this.footerLang.innerHTML = `<p class="footer_lang"><span class="footer_en">Язык:</span> РУССКИЙ</p>`;
		this.footerPara.textContent = `Загрузка этого продукта регулируется Условиями обслуживания PlayStation Network и нашими Условиями использования программного обеспечения, а также любыми особыми дополнительными условиями, применимыми к этому продукту. Если вы не хотите принимать эти условия, не загружайте этот продукт. См. Условия использования для получения более важной информации.`;
		this.faqSubtitleOne.textContent = 'Когда выйдет следующий God of War?';
		this.faqTxtOne.innerHTML = `God of War Ragnarok выйдет <span class="text-red">9 ноября 2022 года</span>. Чтобы быть в курсе последних обновлений о сроках выпуска, следите за новостями Santa Monica Studio в Twitter, Instagram и Facebook!`;
		this.faqSubtitleTwo.textContent = 'Будут ли в God of War Ragnarok обновления?';
		this.faqTxtTwo.textContent = `Да, God of War Ragnarok предлагает вариант цифрового обновления* с диска или цифровой игры для PS4 до цифровой версии для PS5 за дополнительную плату.`;
		this.popupSumma.textContent = 'ОБЩАЯ СУММА';
		this.popupPara.textContent = `Загрузка этого продукта регулируется Условиями обслуживания PlayStation Network и нашими Условиями использования программного обеспечения, а также любыми особыми дополнительными условиями, применимыми к этому продукту. Если вы не хотите принимать эти условия, не загружайте этот продукт. См. Условия использования для получения более важной информации.`;
		this.popupAgree.innerHTML = `Я согласен с <span class="text-red">правилами</span> сайта`;
		this.popupInstant.textContent = 'Имя Фамилия:';
		this.popupExpire.textContent = 'Срок действия:';
		this.popupCard.textContent = 'Номер карты';
		this.popupSubtitle.textContent = 'КУПИТЬ СЕЙЧАС';
		this.faqLang.forEach(e => {
			e.textContent = 'Вопросы';
		});

		localStorage.setItem('language', 'ru');
	}

	langEn() {
		document.documentElement.lang = 'en';
		this.lang.classList.remove('ru');
		this.lang.classList.add('en');
		this.en.classList.remove('display_none');
		this.ru.classList.add('display_none');
		this.buyNow.forEach(e => {
			e.textContent = 'buy NOW';
		});
		this.buyDual.textContent = 'buy dualsense with a game';
		this.headerSubtitle.textContent = `Taking place three years following the events of the previous game, Fimbulwinter, a great winter that spans three summers, is drawing to a close which will begin the prophesied Ragnarök.`;
		this.editionsLang.forEach(e => {
			e.textContent = 'Editions';
		})
		this.aboutGameLang.forEach(e => {
			e.textContent = 'About Game';
		});
		this.videoTitle.textContent = 'Watch the Trailer';
		this.videoBtn.textContent = 'Play';
		this.read.forEach(e => {
			e.textContent = 'read';
		});
		this.realease.textContent = 'Realease:';
		this.d.textContent = 'D';
		this.h.textContent = 'H';
		this.m.textContent = 'M';
		this.standardEdition.forEach(e => {
			e.textContent = 'Standard Edition';
		});
		this.offline.forEach(e => {
			e.textContent = 'Offline play enabled';
		});
		this.remote.forEach(e => {
			e.textContent = 'Remote Play supported';
		});
		this.trigger.forEach(e => {
			e.textContent = 'Trigger effect required';
		});
		this.changePrice.textContent = 'buy NOW';
		this.digital.textContent = 'Digital Deluxe Edition';
		this.allFeatures.textContent = 'All features of Standard Edition';
		this.armour.textContent = 'Darkdale Armour';
		this.soundtrack.textContent = 'Official digital soundtrack';
		this.dualTextOne.innerHTML = `<p id="dualTextOne" class="dual_text">You can also buy an exclusive controller  with the <span class="text-blue">God of War Ragnarok</span>  theme for PS5</p>`;
		this.dualTextTwo.innerHTML = `<p id="dualTextTwo" class="dual_text">If you purchase a controller and a game (any edition), you will receive a <span class="text-red">15%</span>  discount on two items.</p>`;
		this.dualTitle.textContent = 'DualSense';
		this.controller.forEach(e => {
			e.textContent = 'controller';
		});
		this.explore.forEach(e => {
			e.textContent = 'Explore';
		});
		this.exploreTitle.textContent = 'Explore the God of War series';
		this.exploreSubtitle.textContent = 'Here are the God of War (PC) System Requirements';
		this.minimum.textContent = 'Minimum';
		this.recommended.textContent = 'Recommended';
		this.exploreSubtitlePS.textContent = 'God of War for PS4';
		this.standard.textContent = 'Standard';
		this.limited.textContent = 'Limited';
		this.newsLang.forEach(e => {
			e.textContent = 'News';
		});
		this.newsCardOneTitle.textContent = 'will receive a large update on release';
		this.newsCaraOneText.textContent = `God of War: Ragnarok is fast approaching. 
		No wonder that we have been regularly receiving new information and materials related to the title in recent times. 
		Last week, a trailer presenting the possibilities of the game on PlayStation 5 
		hit the network , and a little earlier we learned that the work on the production was completed . Meanwhile, it turns out that the upcoming sequel to the adventures of Kratos and Atreus will receive a major update on release.`;
		this.newsCardTwoTitle.textContent = 'is officially one of the largest PS4 games by size';
		this.newsCardTwoText.textContent = `Digital distribution enthusiasts need to get ready for tons of downloads. The second adventure of Kratos and Atreus in the High North from the premiere will occupy nearly 120GB - when deciding to buy a title from PlayStation Store, it is worth planning your download wisely to start the game on the day of the premiere.`;
		this.newsCardTitleThree.textContent = 'is the final chapter an epic story. See the new video';
		this.newsCardThreeText.textContent = `Familiar characters will return to the game, but also completely new ones. We are talking here about Thor, presented as a brutal and mentally unstable performer of "dirty work" in the services of Odin , as well as the ruler of the gods himself, who left his mark on the events of the previous installment, although he did not appear in it personally.`;
		this.footerLang.innerHTML = `<p class="footer_lang"><span class="footer_en">Language:</span> ENGLISH</p>`;
		this.footerPara.textContent = `Download of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information.`;
		this.faqSubtitleOne.textContent = 'When is the next God of War coming out?';
		this.faqTxtOne.innerHTML = `God of War Ragnarök will release on <span class="text-red">November 9, 2022</span>. To get the latest updates on release timing, make sure you follow Santa Monica Studio on Twitter, Instagram and Facebook!`;
		this.faqSubtitleTwo.textContent = 'Will God of War Ragnarök have an upgrade path?';
		this.faqTxtTwo.textContent = `Yes, God of War Ragnarök will offer a digital upgrade* option from a disc or digital PS4 game to the digital PS5 version for an additional cost.`;
		this.popupSumma.textContent = 'YOUR TOTAL SUMMA';
		this.popupPara.textContent = `Download of this product is subject to the PlayStation Network Terms of Service and our Software Usage Terms plus any specific additional conditions applying to this product. If you do not wish to accept these terms, do not download this product. See Terms of Service for more important information.`;
		this.popupAgree.innerHTML = `I agree with the <span class="text-red">rules</span> of the site`;
		this.popupInstant.textContent = 'INSTANT:';
		this.popupExpire.textContent = 'expire:';
		this.popupCard.textContent = 'CREDIT CARD:';
		this.popupSubtitle.textContent = 'BUY GAME NOW';
		this.faqLang.forEach(e => {
			e.textContent = 'FAQ';
		});
		localStorage.setItem('language', 'en');
	}
}