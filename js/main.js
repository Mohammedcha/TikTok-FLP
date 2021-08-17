// =================================================================
// =================================================================
// =============== By MCh CPA 2021 : Re-skinning GRP ===============
// =================================================================
// =================================================================

$(document).ready(function () {

	$("#followers-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formError1();
		} else {
			event.preventDefault();
			submitForm1();
		}
	});

	function submitForm1() {
		window.location.href = 'processing_request.php' + '?username=' + $('#username').val();
	}

	function formError1() {
		$(".shake-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(this).removeClass();
		});
	}

	$(".post-new-comment-button-wrapp a").click(function () {
		$(".shake-wrapper-2").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$(this).removeClass('shake animated');
		});
	});

	var $selected_followers = '';
	$('.amount-of-followers-selection-item-wrapper').click(function () {
		fixFollowersBox($(this));
	});
	function fixFollowersBox($parent_class) {
		resetAllFollowersBoxes();
		if ($parent_class.hasClass('amount-of-followers-selection-item-wrapper-1')) {
			$selected_followers = '1000';
		}
		if ($parent_class.hasClass('amount-of-followers-selection-item-wrapper-2')) {
			$selected_followers = '2500';
		}
		if ($parent_class.hasClass('amount-of-followers-selection-item-wrapper-3')) {
			$selected_followers = '5000';
		}
		$parent_class.addClass('followers-box-active');
		$parent_class.addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
		});
		$("#add-followers-button").addClass('animated infinite jello');
	}
	function resetAllFollowersBoxes() {
		var $followers_list = $('.amount-of-followers-selection-item-wrapper-1, .amount-of-followers-selection-item-wrapper-2, .amount-of-followers-selection-item-wrapper-3');
		if ($followers_list.hasClass('followers-box-active')) {
			$followers_list.removeClass('followers-box-active');
		}
	}

	function progressBarConsole(percent, $element) {
		var progressBarConsoleWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
	}
	progressBarConsole(0, $('#progressBarConsole'));

	$('.add-followers-button').click(function () {
		if ($selected_followers != '') {
			var $currentFollowersValue = parseInt($('#current-followers-value').text());
			var $selectedFollowersValue = parseInt($selected_followers);
			var $newFollowersValue = $currentFollowersValue + $selectedFollowersValue;
			$.magnificPopup.open({
				items: {
					src: '#adding-followers-console-notice-wrapper',
				},
				type: 'inline',
				preloader: false,
				modal: true,
				mainClass: 'mfp-fade',
				callbacks: {
					open: function () {
						$('#console-notice-followers-value').html($selected_followers);
						$('#console-notice-followers-new-value').html($newFollowersValue);
					},
					close: function () {
						console.log('closed');
					}
				}
			});
		}
		else {
			sweetAlert("Error", "Please select the amount of followers you wish to generate.", "error");
		}
	});

	$('#console-notice-go-back').click(function () {
		$.magnificPopup.close();
	});

	$('#generate-followers-button').click(function () {
		var $console_message_username = $('#console-username-val').text();
		var $currentFollowersValue = parseInt($('#current-followers-value').text());
		var $selectedFollowersValue = parseInt($selected_followers);
		var $newFollowersValue = $currentFollowersValue + $selectedFollowersValue;
		$('.go-back-wrapper').hide();
		$.magnificPopup.close();
		$(".amount-of-followers-selection-wrapper").fadeOut(function () {
			$(".adding-followers-console-animation-wrapper").fadeIn();
		});
		setTimeout(function () {
			$(".adding-followers-console-animation-wrapper").fadeOut(function () {
				$(".adding-followers-console-wrapper").fadeIn();
				if ($(window).width() < 960) {
					$('html, body').animate({
						scrollTop: $(".adding-followers-console-wrapper").offset().top
					}, 1000);
				}
				progressBarConsole(0, $('#progressBarConsole'));
			});
		}, 2500);
		setTimeout(function () {
			$(".fountainG").hide();
			$('.console-message').html('<span class="console-message-success">Files loaded Successfully</span>');
			progressBarConsole(10, $('#progressBarConsole'));
		}, 4500);
		setTimeout(function () {
			$(".fountainG").fadeIn();
			$('.console-message').html('Connecting to TikTok API...');
			progressBarConsole(15, $('#progressBarConsole'));
		}, 6500);
		setTimeout(function () {
			$(".fountainG").hide();
			$('.console-message').html('<span class="console-message-success">Successfully connected</span>');
		}, 8500);
		setTimeout(function () {
			$(".fountainG").fadeIn();
			$('.console-message').html('Forwarding User ID for Account <span class="console-message-highlighted">' + $console_message_username + '</span>');
			progressBarConsole(30, $('#progressBarConsole'));
		}, 10000);
		setTimeout(function () {
			$(".fountainG").hide();
			$('.console-message').html('<span class="console-message-success">User ID Successfully Forwarded</span>');
			progressBarConsole(35, $('#progressBarConsole'));
		}, 13500);
		setTimeout(function () {
			$('.console-message').html('Establishing Connection with internal Followers Database');
			progressBarConsole(38, $('#progressBarConsole'));
		}, 15500);
		setTimeout(function () {
			$(".fountainG").hide();
			$('.console-message').html('<span class="console-message-success">Connection with Database Established</span>');
			progressBarConsole(47, $('#progressBarConsole'));
		}, 17500);
		setTimeout(function () {
			$(".fountainG").fadeIn();
			$('.console-message').html('Preparing to Inject <span class="console-message-highlighted">' + $selectedFollowersValue + '</span> Followers to Account <span class="console-message-highlighted">' + $console_message_username + '</span>');
			progressBarConsole(52, $('#progressBarConsole'));
		}, 20000);
		setTimeout(function () {
			$(".fountainG").hide();
			$("#console-new-followers").fadeIn(function () {
				$('#console-new-followers-value').countTo({
					from: $currentFollowersValue,
					to: $newFollowersValue,
					speed: 3000,
					refreshInterval: 10,
					formatter: function (value, options) {
						return value.toFixed(options.decimals);
					}
				});
				$('#current-followers-value').countTo({
					from: $currentFollowersValue,
					to: $newFollowersValue,
					speed: 3000,
					refreshInterval: 10,
					formatter: function (value, options) {
						return value.toFixed(options.decimals);
					}
				});
			});
			$('.console-message').html('Adding <span class="console-message-highlighted">' + $selectedFollowersValue + '</span> Followers');
			progressBarConsole(55, $('#progressBarConsole'));
		}, 22000);
		setTimeout(function () {
			$('.console-message').html('<span class="console-message-success">Successfully added</span> <span class="console-message-highlighted">' + $selectedFollowersValue + '</span> <span class="console-message-success">Followers</span>');
			$('#console-new-followers').addClass('bounce animated completed').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				$(this).removeClass('bounce animated');
			});
			progressBarConsole(80, $('#progressBarConsole'));
		}, 27000);
		setTimeout(function () {
			$("#console-new-followers").fadeOut(function () {
				$(".fountainG").fadeIn();
				$('.console-message').html('Cleaning up Injection Traces');
				progressBarConsole(88, $('#progressBarConsole'));
			});
		}, 29000);
		setTimeout(function () {
			$('.console-message').html('Performing Automatic Human Verification...');
			progressBarConsole(92, $('#progressBarConsole'));
		}, 31000);
		setTimeout(function () {
			$(".fountainG").hide();
			$('.console-message').html('<span class="console-message-error">Automatic Human Verification Failed...</span>');
			progressBarConsole(92, $('#progressBarConsole'));
		}, 33500);
		setTimeout(function () {
			$('.console-message').html('Manual Human Verification Required');
			progressBarConsole(92, $('#progressBarConsole'));
		}, 35500);
		setTimeout(function () {
			$(".adding-followers-console-wrapper").fadeOut(function () {
				$(".adding-followers-console-animation-wrapper").fadeIn();
			});
		}, 37500);
		setTimeout(function () {
			$(".adding-followers-console-animation-wrapper").fadeOut(function () {
				$(".human-verification-wrapper").fadeIn();
				$(".fountainG").fadeIn();
				if ($(window).width() < 960) {
					$('html, body').animate({
						scrollTop: $(".human-verification-wrapper").offset().top
					}, 1000);
				}
			});
		}, 38500);
	});

	// =================================================================
	// =================================================================
	// =============== By MCh CPA 2021 : Re-skinning GRP ===============
	// =================================================================
	// =================================================================

	$("#go-back").click(function () {
		window.location.href = 'index.php';
	});

	$("#error-go-back-button").click(function () {
		window.location.href = 'index.php';
	});

	$('#username-example-img-link').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}

	});

	$('.match-height').matchHeight();

	$(".fit-vids-me").fitVids();

	$('.popup-tos').magnificPopup({
		type: 'inline',
		preloader: false
	});
	$('.popup-contact').magnificPopup({
		type: 'inline',
		preloader: false
	});
	$('.popup-pp').magnificPopup({
		type: 'inline',
		preloader: false
	});

});

// Live Chat
var ee;
var chat_count_num = 235;

function chat_count() {
	document.getElementById("online2").innerHTML = chat_count_num;
	var randWay = Math.floor(Math.random() * 10 + 1);
	if (randWay <= 5) {
		chat_count_num = chat_count_num + Math.floor(Math.random() * 10 + 1);;
	} else {
		chat_count_num = chat_count_num - Math.floor(Math.random() * 10 + 1);;
	}
	ee = setTimeout("chat_count()", 1000);
}
chat_count();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "private picturesenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "CoinsStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGCoinsenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["How much  TikTok followers can I generate?", "Anyone tried this already?", "Does it work in NA?", "Why this is so easy lol?", "This is incredible, never thought it would work.", "I generated 100000 TikTok followers, can't wait to start.", "ios player here, works flawless.", "Can someone help me with the survey?", "OMG!", "LOL!", "ROFL!", "Real", "haha", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much TikTok followers u made so far?", "what about surveys on mobile phone?", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can't wait anymoreeee", "Is this for real guys?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "yo guys dont spam okay?", "anyone up for a game?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of money", "any idea how long it takes for TikTok followers and gems to come?", "so happy i found this", "you guys watch nightblue?", "I have seen this website on twitch stream i think", "just wow", "Where do I get my TikTok followers and gems?", "a friend told me about this", "thanks to whoever spams this website lol", "where i put in my code?", "so far I am cool with this", "can I get for free?", "bye guys", "okay i applied thank you", "how much can you even have", "incredible", "ten minutes", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking is real", "omg stop asking how to get TikTokf ollowers just get it from generator", "guys this is so easy, it takes less than a minute", "Can anyone do it for me? My username is brazilinaronaldo", "PM me pls", "shadow fight sucks noobs haha", "EA pls", "today is lucky day", "this is the best TikTokf ollowers website because we all have more than a chance", "i think everyone here got TikTokf ollowers", "when can I play I am new to this", "TikTokf ollowers for free?", "Do TikTokf ollowers expire?", "I got bTikTokpack of TikTokf ollowers for my girlfriend making her happy and i dont pay for them lol", "man servers are always down fuk it", "funny how this works but it does like always", "hi again im here for more TikTokf ollowers", "i need some TikTokf ollowers what do i do", "this worked lol", "fuck i have no surveys left, had like 50k already on my acc", "where do all of you come from", "nice page for TikTokf ollowers", "i was stuck in survey had to do again but it worked then", "thank you for giving me TikTokf ollowers!", "saw on stream yo", "TikTokf ollowers working fine", "i love this generator so much", "this makes my game more enjoyable i hope", "thank you all for helping me out bros", "thanks to whoever pmed me it worked", "thank you for messaging me man", "when do you wanna play?", "imagine all the people waiting fo this", "any idea if this still works tomorrow", "best TikTokf ollowers website", "is this twitch chat?", "wow really many people online here", "hi all who has some TikTokf ollowers for me", "anyone not here for free followers lol?", "what was the newest expansion", "who is up for a chat hehe?", "i play in EU", "check my profile i am rich", "when is TikTokf ollowers start men?", "even noobs can do this", "when did you guys start playing wow", "i can only recommend this stuff", "great i can test the expansion before purchasing it", "can't wait for it to start!", "where do you come from?", "does this giveaway go forever?", "pretty good TikTokf ollowers signup form guys", "i begin to like this very much. third pack i unlocked", "worth", "ok cool", "i see no limits on how TikTokf ollowers you can get thats so epic", "which country are you playing in guys?", "think so man", "Likely, but I think one day this will fail", "this still works at the moment", "i havent seen this before but im impressed with the result!", "my boyfriend will freak out :D", "nice ", "surveys dont appaer every time but i think its there to have enough money for the website to buy get the TikTokf ollowers codes", "actually i had no problem with any survey ever, just try?", "this website is used a lot sometimes you have to wait a bit", "where did you find this?", "so when will TikTokf ollowers start?", "ty for the TikTokf ollowers opt in guys!", "i wish i found this earlier", "i wasted so much money on buying followers lol - good this is free here", "how come i dont see any trolls here", "just dodged queue for this", "any bro needs help?", "i would do screenshot but maybe you report me then", "are there new weapons in this expansion pack?", "did you try 14,500 pack yet? I used on NA but maybe other locations can use it too", "TikTok sucks hahahaha", "i feel like this will be the best! it was starting to get boring lol", "think so", "what you can get TikTokf ollowers here for free?", "ok sounds good enough for me bros", "anyone reddit here?", "Okay I believe this works cus I just logged in and saw my TikTokf ollowers ROFL", "I had a bit trouble with some survy thing but no problem if you just choose an easy", "my friends on facebook spam this like every day they are rly happy about it", "Where do i put my phone", "what?", "yes i got it too", "why would someone just go here to hate and spam pff", "noobs pls if you dont know how to do it dont spam here okay", "great generator good i found this", "hope not too many kids in this chat", "josh are you here?", "unlocking takes some time for me", "derp", "i am curious is this legit?", "Works on OCE?", "had to reload page before it worked", "used this three times and applied for 3x 5000 followers, lol see you ingame suckers", "i see most people here write positive things it is true?", "hi my english no good i here get TikTokf ollowers?", "Exactly what I think", "you can have reginalds IQ and still be able to get TikTokf ollowers", "when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room", "if you want a proof add me on skype", "I thought TikTok? is slowly dying", "thank you!", "are you not bored at all? i cant wait for expansion pack", "i am looking for a friend please pm me", "i thought my friend wanted to fool me with this website link. but you can rly get TikTokf ollowers here if you dont mess up with the survey part", "aasdasdasd", "Ok so I am back and what I can say is that i got my TikTokf ollowers! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it", "worth got my TikTokf ollowers key", "i agree", "i am fine with having free TikTokf ollowers how about you", "what i always disliked is when you get close to release date and they move it even further", "from all websites ive been on this is the first and probably the only one which rly gives you the  TikTokf ollowers", "i have tried too many surveys in my life finally i got lucky here ", "yeah free TikTokf ollowers is cool", "you like this?", "What you think about all this", "I want to play from korea", "wow i waited ages to get a server transfer now here it shouldnt be a problem anymore", "lol ProAsh32 is here? you were in my skype! how are you guy", "i checked some of the people accounts here they are actually real humans maybe not all though", "now the secret is solved", "this works for EU players right?", "hey i am a newbie will i be able to play?", "i signed up, now the waiting starts :/ i hope they will launch sooner", "can i do this with my nexus phone?", "...^^", "fucking hilarious some people", "TikTokf ollowers here I come", "wow 10 minutes ago this was empty now all people here wtf", "i dont rly like TikTok anymore", "god thanks for this generator finally", "i can imagine that", "okay", "not sure if i understood? its all free right?", "I would be so sad if this did not work because it took a while, thankfully it worked then", "uhm", "so you can buy 10 TikTokf ollowers now guys?", "i think with the new game might become somewhat more interesting", "fucking helll! got my TikTokf ollowers!.", "yayy", "servers i tested this and its working", "i usually choose the first offer in the list because its normally the easiest one", "i think some offers easier in countries like USA", "if you chose an offer make sure to fully complete it, or you will not sign up for TikTokf ollowers guys!"];
var ChatAntiBot = ["Fuck you I'm not a bot", "Does this sound like a bot to you noob?", "yeah we're all bots Kappa", "bot? i'm here for spamming this shit lol", "are you stupid or something? they have anti bot protection", "sure bot, 0101010110 lmao xD", "no, we're not bots Kappa"];


$(document).ready(function () {


	ChatStart();
	ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
	ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
	$('#live-chat-input')['keypress'](function (_0xaa63xc) {
		if (_0xaa63xc['keyCode'] == 13) {
			$('#live-chat-button')['click']();
		};
	});
	$('#live-chat-button')['click'](function () {
		if (ChatUserName == '') {
			$('#live-chat-name-wrapper')['fadeIn'](250);
			$('.live-chat-overlay').fadeIn(200);
		} else {
			$msg = $('#live-chat-input')['val']();

			ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
			$('#live-chat-input')['val']('');
			if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
				setTimeout(function () {
					ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">' + ChatUserName + ' &nbsp;</span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
				}, rng(7250, 9300));
			}
			if (!ChatReplied) {
				setTimeout(function () {
					ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">' + ChatUserName + ' &nbsp;</span>  lol stop spamming and just use the followers generator');

					setTimeout(function () {
						ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">' + ChatUserName + ' &nbsp;</span>  is this your first time here? this is like the only legit TikTok followers generator on the web');
						setTimeout(function () {
							ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">' + ChatUserName + ' &nbsp;</span> ' + ' he just wants all the followers for himself haha');

						}, rng(11500, 19500));
					}, rng(6500, 8500));
				}, rng(6000, 9500));
				ChatReplied = true;
			}
		};
	});
	$('#live-chat-name-confirm-button')['click'](function () {
		ChatUserName = $('#live-chat-name')['val']();
		$('#live-chat-name-wrapper')['fadeOut'](250, function () {
			$('.live-chat-overlay').fadeOut(200, function () {
				$('#live-chat-button')['click']();
			});
		});
	});


});

Date.prototype.getFullMinutes = function () {
	if (this.getMinutes() < 10) {
		return '0' + this.getMinutes();
	}
	return this.getMinutes();
};

function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function () {

	$('#livechatInputComment').focus(function () {
		$('#livechatContainerAdditional').slideDown(500);
	});
});

function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
	if (_0xaa63x5 == '' || _0xaa63x6 == '') {
		return;
	};
	$('<div class=\"livechatChatEntry\"><span class=\"live-chat-content-username\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
	$('#live-chat-content')['scrollTop']($('#live-chat-content')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
	$('<div class=\"livechatChatEntry\"><span class=\"live-chat-intro-message\">' + _0xaa63x6 + '</span></div>')['appendTo']('#live-chat-content')['hide'](0)['fadeIn'](250);
	$('#live-chat-content')['scrollTop']($('#live-chat-content')[0]['scrollHeight']);
};

function ChatStart() {
	var _0xaa63x8 = function () {
		setTimeout(function () {
			var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
			var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
			ChatAddEntry(_0xaa63x9, _0xaa63xa);
			_0xaa63x8();
		}, Random(1000, 15000));
	};
	_0xaa63x8();
};

// =================================================================
// =================================================================
// =============== By MCh CPA 2021 : Re-skinning GRP ===============
// =================================================================
// =================================================================