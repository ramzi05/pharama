const date = "2025-02-02";
const pharmacies = [
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie VIOLETTE",
			en: "Pharmacie VIOLETTE",
			ar: "Pharmacie VIOLETTE"
		},
		location: {
			fr: "Aïn Chock",
			en: "Aïn Chock",
			ar: "عين الشق"
		},
		phone: "0522.52.67.57",
		hours: "9h à 00h00",
		address: {
			fr: "LOTISSEMENT VIOLETTE 57, RUE 2 N° 51 - AL INARA AIN CHOCK",
			en: "LOTISSEMENT VIOLETTE 57, RUE 2 N° 51 - AL INARA AIN CHOCK",
			ar: "LOTISSEMENT VIOLETTE 57, RUE 2 N° 51 - AL INARA AIN CHOCK"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20VIOLETTE%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20VIOLETTE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20VIOLETTE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE ANDALOUS",
			en: "ANDALUSIAN PHARMACY",
			ar: "صيدلية الأندلس"
		},
		location: {
			fr: "Aïn Chock",
			en: "Aïn Chock",
			ar: "عين الشق"
		},
		phone: "0522.52.80.31",
		hours: "9h à 00h00",
		address: {
			fr: "394, ANGLE BD. PANORAMIQUE & AVENUE DU 2 MARS",
			en: "394, ANGLE BD. PANORAMIQUE & AVENUE DU 2 MARS",
			ar: "394, ANGLE BD. PANORAMIQUE & AVENUE DU 2 MARS"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20ANDALOUS%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20ANDALOUS%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20ANDALOUS%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie SASSIOUI",
			en: "Pharmacie SASSIOUI",
			ar: "Pharmacie SASSIOUI"
		},
		location: {
			fr: "Aïn Chock",
			en: "Aïn Chock",
			ar: "عين الشق"
		},
		phone: "0522870450",
		hours: "24h/24h",
		address: {
			fr: "N° 35 RUE 33 - LOT. AL IDAA II - AIN CHOCK",
			en: "N° 35 RUE 33 - LOT. AL IDAA II - AIN CHOCK",
			ar: "N° 35 RUE 33 - LOT. AL IDAA II - AIN CHOCK"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SASSIOUI%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SASSIOUI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SASSIOUI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE LE REPERE",
			en: "LE REPERE PHARMACY",
			ar: "صيدلية لو ريبير"
		},
		location: {
			fr: "Aïn Sebaâ",
			en: "Aïn Sebaâ",
			ar: "عين السبع"
		},
		phone: "0522.35.50.11",
		hours: "24h/24h",
		address: {
			fr: "395, RESIDENCE MOULAY ISMAIL - BD. MOULAY ISMAIL - KM 7 - ROUTE DE RABAT - AIN SEBAA",
			en: "395, RESIDENCE MOULAY ISMAIL - BD. MOULAY ISMAIL - KM 7 - ROUTE DE RABAT - AIN SEBAA",
			ar: "395, RESIDENCE MOULAY ISMAIL - BD. MOULAY ISMAIL - KM 7 - ROUTE DE RABAT - AIN SEBAA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20LE%20REPERE%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LE%20REPERE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20LE%20REPERE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie LEKBIRA",
			en: "Pharmacie LEKBIRA",
			ar: "Pharmacie LEKBIRA"
		},
		location: {
			fr: "Aïn Sebaâ",
			en: "Aïn Sebaâ",
			ar: "عين السبع"
		},
		phone: "0522.34.37.40",
		hours: "9h à 00h00",
		address: {
			fr: "13, ALLEE DES MIMOSAS - OULJA 2 - RUE 2 AIN SEBAA",
			en: "13, ALLEE DES MIMOSAS - OULJA 2 - RUE 2 AIN SEBAA",
			ar: "13, ALLEE DES MIMOSAS - OULJA 2 - RUE 2 AIN SEBAA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LEKBIRA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LEKBIRA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LEKBIRA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE HASSINI",
			en: "HASSINI PHARMACY",
			ar: "صيدلية الحسيني"
		},
		location: {
			fr: "Al Azhar Panorama",
			en: "Al Azhar Panorama",
			ar: "الأزهر بانوراما"
		},
		phone: "0522.76.60.31",
		hours: "9h à 00h00",
		address: {
			fr: "PANORAMA N° 01, IMMEUBLE M05 BLOC N° 3 - COMMUNE AHL LAGHLAM SIDI BERNOUSSI",
			en: "PANORAMA N° 01, IMMEUBLE M05 BLOC N° 3 - COMMUNE AHL LAGHLAM SIDI BERNOUSSI",
			ar: "PANORAMA N° 01, IMMEUBLE M05 BLOC N° 3 - COMMUNE AHL LAGHLAM SIDI BERNOUSSI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20HASSINI%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20HASSINI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20HASSINI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE DE LA GIRONDE",
			en: "GIRONDE PHARMACY",
			ar: "صيدلية جيروند"
		},
		location: {
			fr: "Al Fida",
			en: "Al Fida",
			ar: "الفداء"
		},
		phone: "0522.30.06.19",
		hours: "24h/24h",
		address: {
			fr: "ANG.BD.DE LA GIRONDE ET RUE D'IFNI - PLACE KHAIBAR",
			en: "ANG.BD.DE LA GIRONDE ET RUE D'IFNI - PLACE KHAIBAR",
			ar: "ANG.BD.DE LA GIRONDE ET RUE D'IFNI - PLACE KHAIBAR"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20DE%20LA%20GIRONDE%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20DE%20LA%20GIRONDE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20DE%20LA%20GIRONDE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE GHAZALI",
			en: "GHAZALI PHARMACY",
			ar: "صيدلية الغزالي"
		},
		location: {
			fr: "Al Fida",
			en: "Al Fida",
			ar: "الفداء"
		},
		phone: "0522.80.65.97",
		hours: "9h à 00h00",
		address: {
			fr: "PROJET OMAR BNOU AL KHATTAB (EX. DERB MILAN) - 2ème TRANCHE N° 148",
			en: "PROJET OMAR BNOU AL KHATTAB (EX. DERB MILAN) - 2ème TRANCHE N° 148",
			ar: "PROJET OMAR BNOU AL KHATTAB (EX. DERB MILAN) - 2ème TRANCHE N° 148"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20GHAZALI%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20GHAZALI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20GHAZALI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE HACHAD",
			en: "HACHAD PHARMACY",
			ar: "صيدلية حشاد"
		},
		location: {
			fr: "Al Fida",
			en: "Al Fida",
			ar: "الفداء"
		},
		phone: "0522.28.39.46",
		hours: "9h à 00h00",
		address: {
			fr: "142,RUE 5-DERB KOREA-GREGOUANE (STATION TAXI SIDI MAAROUF) PLACE SRAGHNA",
			en: "142,RUE 5-DERB KOREA-GREGOUANE (STATION TAXI SIDI MAAROUF) PLACE SRAGHNA",
			ar: "142,RUE 5-DERB KOREA-GREGOUANE (STATION TAXI SIDI MAAROUF) PLACE SRAGHNA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20HACHAD%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20HACHAD%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20HACHAD%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie NOUAMANIA",
			en: "Pharmacie NOUAMANIA",
			ar: "Pharmacie NOUAMANIA"
		},
		location: {
			fr: "Annasi",
			en: "Annasi",
			ar: "عناصي"
		},
		phone: "0522.75.90.80",
		hours: "9h à 00h00",
		address: {
			fr: "RES NOAMANIA LOT 17 KM 10 ENTREE 25 N° 2 AHL LOUGHLAM SIDI MOUMEN",
			en: "RES NOAMANIA LOT 17 KM 10 ENTREE 25 N° 2 AHL LOUGHLAM SIDI MOUMEN",
			ar: "RES NOAMANIA LOT 17 KM 10 ENTREE 25 N° 2 AHL LOUGHLAM SIDI MOUMEN"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20NOUAMANIA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20NOUAMANIA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20NOUAMANIA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie SMAALI",
			en: "Pharmacie SMAALI",
			ar: "Pharmacie SMAALI"
		},
		location: {
			fr: "Belvédère",
			en: "Belvédère",
			ar: "بيلفيدير"
		},
		phone: "0522.40.73.19",
		hours: "9h à 00h00",
		address: {
			fr: "63 BIS, RUE DE LA PARTICIPATION - ROCHES NOIRES",
			en: "63 BIS, RUE DE LA PARTICIPATION - ROCHES NOIRES",
			ar: "63 BIS, RUE DE LA PARTICIPATION - ROCHES NOIRES"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SMAALI%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SMAALI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SMAALI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE KENZA",
			en: "KENZA PHARMACY",
			ar: "صيدلية كنزة"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0522.39.48.12",
		hours: "24h/24h",
		address: {
			fr: "17, RUE LARACHE - HAY ESSALAM - (SOUIKA C.I.L.) - C.I.L.",
			en: "17, RUE LARACHE - HAY ESSALAM - (SOUIKA C.I.L.) - C.I.L.",
			ar: "17, RUE LARACHE - HAY ESSALAM - (SOUIKA C.I.L.) - C.I.L."
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20KENZA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20KENZA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20KENZA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie AVENUE NACIRI",
			en: "Pharmacie AVENUE NACIRI",
			ar: "Pharmacie AVENUE NACIRI"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0522.69.20.42",
		hours: "24h/24h",
		address: {
			fr: "253, AV MOHAMED TAIEB NACIRI - Hay Hassani",
			en: "253, AV MOHAMED TAIEB NACIRI - Hay Hassani",
			ar: "253, AV MOHAMED TAIEB NACIRI - Hay Hassani"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20AVENUE%20NACIRI%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20AVENUE%20NACIRI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20AVENUE%20NACIRI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE LAMIA",
			en: "LAMIA PHARMACY",
			ar: "صيدلية لمياء"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.60.46.30",
		hours: "9h à 00h00",
		address: {
			fr: "LOT LAMIA BLOC 10 N° 7 (CINEMA MASSIRA) HAY MOHAMMADI",
			en: "LOT LAMIA BLOC 10 N° 7 (CINEMA MASSIRA) HAY MOHAMMADI",
			ar: "LOT LAMIA BLOC 10 N° 7 (CINEMA MASSIRA) HAY MOHAMMADI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20LAMIA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LAMIA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20LAMIA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE IBN SINA",
			en: "IBN SINA PHARMACY",
			ar: "صيدلية ابن سينا"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.62.07.31",
		hours: "9h à 00h00",
		address: {
			fr: "319, BD. CHOUHADA - HAY MOHAMMADI (PRES CINEMA ESSAADA)",
			en: "319, BD. CHOUHADA - HAY MOHAMMADI (PRES CINEMA ESSAADA)",
			ar: "319, BD. CHOUHADA - HAY MOHAMMADI (PRES CINEMA ESSAADA)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20IBN%20SINA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20IBN%20SINA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20IBN%20SINA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE HAY MAKAM",
			en: "HAY MAKAM PHARMACY",
			ar: "صيدلية حي مقام"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.63.87.87",
		hours: "aucune",
		address: {
			fr: "117, HAY MAKAM - BD. HASSAN EL ALAOUI - AIN BORJA (TOLBOIS - VISITE TECHNIQUE AIN BORJA)",
			en: "117, HAY MAKAM - BD. HASSAN EL ALAOUI - AIN BORJA (TOLBOIS - VISITE TECHNIQUE AIN BORJA)",
			ar: "117, HAY MAKAM - BD. HASSAN EL ALAOUI - AIN BORJA (TOLBOIS - VISITE TECHNIQUE AIN BORJA)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20HAY%20MAKAM%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20HAY%20MAKAM%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20HAY%20MAKAM%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE ALOUATI",
			en: "ALOUATI PHARMACY",
			ar: "صيدلية الواطي"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.60.16.75",
		hours: "aucune",
		address: {
			fr: "BOULEVARD FOUARAT, LOT CAPELUTO - LOT 16 - HAY MOHAMMADI",
			en: "BOULEVARD FOUARAT, LOT CAPELUTO - LOT 16 - HAY MOHAMMADI",
			ar: "BOULEVARD FOUARAT, LOT CAPELUTO - LOT 16 - HAY MOHAMMADI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20ALOUATI%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20ALOUATI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20ALOUATI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE EL MORAKAB ETTAKAFI",
			en: "PHARMACY EL MORAKAB ETTAKAFI",
			ar: "صيدلية المراكب التكافي"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.63.02.46",
		hours: "aucune",
		address: {
			fr: "RUE N° 6 - DERB EL AMAL - 74 BIS - HAY MOHAMMADI (COMPLEXE CULTUREL)",
			en: "RUE N° 6 - DERB EL AMAL - 74 BIS - HAY MOHAMMADI (COMPLEXE CULTUREL)",
			ar: "RUE N° 6 - DERB EL AMAL - 74 BIS - HAY MOHAMMADI (COMPLEXE CULTUREL)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20EL%20MORAKAB%20ETTAKAFI%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20EL%20MORAKAB%20ETTAKAFI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20EL%20MORAKAB%20ETTAKAFI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE LA VILLETTE",
			en: "LA VILLETTE PHARMACY",
			ar: "صيدلية لا فيليت"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.61.32.13",
		hours: "aucune",
		address: {
			fr: "23, ANGLE RUES ABOU BAKR EL WAHRANI & YOUSSEF EL MEZDAGHI (MARCHE LA VILLETTE) - LA VILLETTE",
			en: "23, ANGLE RUES ABOU BAKR EL WAHRANI & YOUSSEF EL MEZDAGHI (MARCHE LA VILLETTE) - LA VILLETTE",
			ar: "23, ANGLE RUES ABOU BAKR EL WAHRANI & YOUSSEF EL MEZDAGHI (MARCHE LA VILLETTE) - LA VILLETTE"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20LA%20VILLETTE%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LA%20VILLETTE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20LA%20VILLETTE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie PROJET",
			en: "Pharmacie PROJET",
			ar: "Pharmacie PROJET"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.35.24.57",
		hours: "aucune",
		address: {
			fr: "78 - 79, RUE MOSTACHFA MOHAMED V - BLOC 11 E PROJET HASSAN II - HAY MOHAMMADI",
			en: "78 - 79, RUE MOSTACHFA MOHAMED V - BLOC 11 E PROJET HASSAN II - HAY MOHAMMADI",
			ar: "78 - 79, RUE MOSTACHFA MOHAMED V - BLOC 11 E PROJET HASSAN II - HAY MOHAMMADI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20PROJET%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20PROJET%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20PROJET%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie TISSIR  II",
			en: "Pharmacie TISSIR  II",
			ar: "Pharmacie TISSIR  II"
		},
		location: {
			fr: "Hay Mohammadi",
			en: "Hay Mohammadi",
			ar: "حي المحمدي"
		},
		phone: "0522.62.67.01",
		hours: "aucune",
		address: {
			fr: "LOTISSEMENT N° 169 - BOULEVARD DE LA GRANDE CEINTURE - HAY TISSIR 2 (CIMETIERE CHOUHADA)",
			en: "LOTISSEMENT N° 169 - BOULEVARD DE LA GRANDE CEINTURE - HAY TISSIR 2 (CIMETIERE CHOUHADA)",
			ar: "LOTISSEMENT N° 169 - BOULEVARD DE LA GRANDE CEINTURE - HAY TISSIR 2 (CIMETIERE CHOUHADA)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20TISSIR%20%20II%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20TISSIR%20%20II%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20TISSIR%20%20II%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE AFIF",
			en: "AFIF PHARMACY",
			ar: "صيدلية عفيف"
		},
		location: {
			fr: "Lissasfa",
			en: "Lissasfa",
			ar: "اللساسفة"
		},
		phone: "0522.65.15.40",
		hours: "24h/24h",
		address: {
			fr: "KASSABAT AL AMINE, IMM. 4, MAGASIN 10 GROUPE BC - LISSASFA",
			en: "KASSABAT AL AMINE, IMM. 4, MAGASIN 10 GROUPE BC - LISSASFA",
			ar: "KASSABAT AL AMINE, IMM. 4, MAGASIN 10 GROUPE BC - LISSASFA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20AFIF%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AFIF%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20AFIF%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE BACHKOU",
			en: "BACHKOU PHARMACY",
			ar: "صيدلية باشكو"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.83.35.45",
		hours: "9h à 00h00",
		address: {
			fr: "BOULEVARD DE LA MECQUE - BACHKOU, LOT A7 N° 47(EN FACE 12ème ARRONDISSEMENT ET POSTE- RESIDENCE PORTE CALIFORNIE)",
			en: "BOULEVARD DE LA MECQUE - BACHKOU, LOT A7 N° 47(EN FACE 12ème ARRONDISSEMENT ET POSTE- RESIDENCE PORTE CALIFORNIE)",
			ar: "BOULEVARD DE LA MECQUE - BACHKOU, LOT A7 N° 47(EN FACE 12ème ARRONDISSEMENT ET POSTE- RESIDENCE PORTE CALIFORNIE)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20BACHKOU%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20BACHKOU%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20BACHKOU%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MEHDI",
			en: "Pharmacie MEHDI",
			ar: "Pharmacie MEHDI"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.25.82.89",
		hours: "9h à 00h00",
		address: {
			fr: "2 RUE GEORGES SAND - VAL FLEURI MAARIF - (R.A.T.C.)",
			en: "2 RUE GEORGES SAND - VAL FLEURI MAARIF - (R.A.T.C.)",
			ar: "2 RUE GEORGES SAND - VAL FLEURI MAARIF - (R.A.T.C.)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MEHDI%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MEHDI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MEHDI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie YOUSRA",
			en: "Pharmacie YOUSRA",
			ar: "Pharmacie YOUSRA"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.36.36.30",
		hours: "24h/24h",
		address: {
			fr: "KISSARIAT EL HANK, AVENUE MEHDI BEN BARKA BATIMENTS EL HANK (DIRECTION POSTE ET MOBARAKA ) BOURGOGNE EL HANK",
			en: "KISSARIAT EL HANK, AVENUE MEHDI BEN BARKA BATIMENTS EL HANK (DIRECTION POSTE ET MOBARAKA ) BOURGOGNE EL HANK",
			ar: "KISSARIAT EL HANK, AVENUE MEHDI BEN BARKA BATIMENTS EL HANK (DIRECTION POSTE ET MOBARAKA ) BOURGOGNE EL HANK"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20YOUSRA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20YOUSRA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20YOUSRA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE D'ANFA",
			en: "ANFA PHARMACY",
			ar: "صيدلية أنفا"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.27.38.49",
		hours: "24h/24h",
		address: {
			fr: "75,PLACE OUED EL MAKHAZINE",
			en: "75,PLACE OUED EL MAKHAZINE",
			ar: "75,PLACE OUED EL MAKHAZINE"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20D%27ANFA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20D%27ANFA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20D%27ANFA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MERYEM",
			en: "Pharmacie MERYEM",
			ar: "Pharmacie MERYEM"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.36.33.27",
		hours: "24h/24h",
		address: {
			fr: "19, BD. IBN SINA - COMPLEXE SPORTIF MED V  (CLINIQUE ROMANDIE, CENTRE CARDIO. CASA - ANFA  & CENTRE AL KINDY)",
			en: "19, BD. IBN SINA - COMPLEXE SPORTIF MED V  (CLINIQUE ROMANDIE, CENTRE CARDIO. CASA - ANFA  & CENTRE AL KINDY)",
			ar: "19, BD. IBN SINA - COMPLEXE SPORTIF MED V  (CLINIQUE ROMANDIE, CENTRE CARDIO. CASA - ANFA  & CENTRE AL KINDY)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MERYEM%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MERYEM%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MERYEM%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie ONZAC",
			en: "Pharmacie ONZAC",
			ar: "Pharmacie ONZAC"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.79.78.74",
		hours: "24h/24h",
		address: {
			fr: "168, LOTISSEMENT SINDIBAD - AIN DIAB",
			en: "168, LOTISSEMENT SINDIBAD - AIN DIAB",
			ar: "168, LOTISSEMENT SINDIBAD - AIN DIAB"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20ONZAC%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ONZAC%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20ONZAC%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie SALAH-EDDINE",
			en: "Pharmacie SALAH-EDDINE",
			ar: "Pharmacie SALAH-EDDINE"
		},
		location: {
			fr: "Oulfa",
			en: "Oulfa",
			ar: "ولفا"
		},
		phone: "0522.90.50.06",
		hours: "9h à 00h00",
		address: {
			fr: "756, AVENUE OUED SEBOU - EL OULFA",
			en: "756, AVENUE OUED SEBOU - EL OULFA",
			ar: "756, AVENUE OUED SEBOU - EL OULFA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SALAH-EDDINE%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SALAH-EDDINE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SALAH-EDDINE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MENDOUR",
			en: "Pharmacie MENDOUR",
			ar: "Pharmacie MENDOUR"
		},
		location: {
			fr: "Sidi Bernoussi",
			en: "Sidi Bernoussi",
			ar: "سيدي برنوصي"
		},
		phone: "0522.73.40.40",
		hours: "24h/24h",
		address: {
			fr: "33, AVENUE \"C\" LOT. AL HAMIDIA - SIDI BERNOUSSI",
			en: "33, AVENUE \"C\" LOT. AL HAMIDIA - SIDI BERNOUSSI",
			ar: "33, AVENUE \"C\" LOT. AL HAMIDIA - SIDI BERNOUSSI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MENDOUR%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MENDOUR%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MENDOUR%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE GHARBI",
			en: "GHARBI PHARMACY",
			ar: "صيدلية الغربي"
		},
		location: {
			fr: "Sidi Bernoussi",
			en: "Sidi Bernoussi",
			ar: "سيدي برنوصي"
		},
		phone: "0522.73.71.57",
		hours: "9h à 00h00",
		address: {
			fr: "71/73 AMAL 4-RUE 28 - SIDI BERNOUSSI",
			en: "71/73 AMAL 4-RUE 28 - SIDI BERNOUSSI",
			ar: "71/73 AMAL 4-RUE 28 - SIDI BERNOUSSI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20GHARBI%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20GHARBI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20GHARBI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE EL BOUSSAIRI",
			en: "EL BOUSSAIRI PHARMACY",
			ar: "صيدلية البوصيري"
		},
		location: {
			fr: "Sidi Bernoussi",
			en: "Sidi Bernoussi",
			ar: "سيدي برنوصي"
		},
		phone: "0522.75.80.99",
		hours: "9h à 00h00",
		address: {
			fr: "BLOC 33 N° 18 BIS - SIDI BERNOUSSI",
			en: "BLOC 33 N° 18 BIS - SIDI BERNOUSSI",
			ar: "BLOC 33 N° 18 BIS - SIDI BERNOUSSI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20EL%20BOUSSAIRI%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20EL%20BOUSSAIRI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20EL%20BOUSSAIRI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MANDARONA",
			en: "Pharmacie MANDARONA",
			ar: "Pharmacie MANDARONA"
		},
		location: {
			fr: "Sidi Maarouf",
			en: "Sidi Maarouf",
			ar: "سيدي معروف"
		},
		phone: "0522.33.56.99",
		hours: "24h/24h",
		address: {
			fr: "RESIDENCE LES PALMIERS BLOC F - ROUTE 1029 - SIDI MAAROUF MAKRO",
			en: "RESIDENCE LES PALMIERS BLOC F - ROUTE 1029 - SIDI MAAROUF MAKRO",
			ar: "RESIDENCE LES PALMIERS BLOC F - ROUTE 1029 - SIDI MAAROUF MAKRO"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MANDARONA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MANDARONA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MANDARONA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie OULED HADDOU",
			en: "Pharmacie OULED HADDOU",
			ar: "Pharmacie OULED HADDOU"
		},
		location: {
			fr: "Sidi Maarouf",
			en: "Sidi Maarouf",
			ar: "سيدي معروف"
		},
		phone: "0522.33.51.00",
		hours: "9h à 00h00",
		address: {
			fr: "HAY ENNAJAH SAHAT BOUMARDAS, LOTISSEMENT CANTAREL SIDI MAAROUF",
			en: "HAY ENNAJAH SAHAT BOUMARDAS, LOTISSEMENT CANTAREL SIDI MAAROUF",
			ar: "HAY ENNAJAH SAHAT BOUMARDAS, LOTISSEMENT CANTAREL SIDI MAAROUF"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20OULED%20HADDOU%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20OULED%20HADDOU%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20OULED%20HADDOU%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MADINAT NASSIM",
			en: "Pharmacie MADINAT NASSIM",
			ar: "Pharmacie MADINAT NASSIM"
		},
		location: {
			fr: "Sidi Maarouf",
			en: "Sidi Maarouf",
			ar: "سيدي معروف"
		},
		phone: "0522.90.47.96",
		hours: "9h à 00h00",
		address: {
			fr: "IMM. 83 SECTEUR \"B\" LOCAL N° 10 - PROJET NASSIM - SIDI MAAROUF (SOCIETE C.E.M.A.)",
			en: "IMM. 83 SECTEUR \"B\" LOCAL N° 10 - PROJET NASSIM - SIDI MAAROUF (SOCIETE C.E.M.A.)",
			ar: "IMM. 83 SECTEUR \"B\" LOCAL N° 10 - PROJET NASSIM - SIDI MAAROUF (SOCIETE C.E.M.A.)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MADINAT%20NASSIM%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MADINAT%20NASSIM%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MADINAT%20NASSIM%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie OUM L'GHAITE",
			en: "Pharmacie OUM L'GHAITE",
			ar: "Pharmacie OUM L'GHAITE"
		},
		location: {
			fr: "Sidi Moumen",
			en: "Sidi Moumen",
			ar: "سيدي مومن"
		},
		phone: "0522.70.08.85",
		hours: "24h/24h",
		address: {
			fr: "21, RUE ARGANE EX. SOULAC APP N° 11 SIDI MOUMEN",
			en: "21, RUE ARGANE EX. SOULAC APP N° 11 SIDI MOUMEN",
			ar: "21, RUE ARGANE EX. SOULAC APP N° 11 SIDI MOUMEN"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20OUM%20L%27GHAITE%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20OUM%20L%27GHAITE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20OUM%20L%27GHAITE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie AL MARWA",
			en: "Pharmacie AL MARWA",
			ar: "Pharmacie AL MARWA"
		},
		location: {
			fr: "Sidi Moumen",
			en: "Sidi Moumen",
			ar: "سيدي مومن"
		},
		phone: "0522.70.48.49",
		hours: "9h à 00h00",
		address: {
			fr: "IKAMAT AL BOUSTANE IMM A 5 N° 8 - SIDI MOUMEN",
			en: "IKAMAT AL BOUSTANE IMM A 5 N° 8 - SIDI MOUMEN",
			ar: "IKAMAT AL BOUSTANE IMM A 5 N° 8 - SIDI MOUMEN"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20AL%20MARWA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20AL%20MARWA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20AL%20MARWA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE AL BOUCHRA",
			en: "AL BOUCHRA PHARMACY",
			ar: "صيدلية البشرى"
		},
		location: {
			fr: "Sidi Othmane",
			en: "Sidi Othmane",
			ar: "سيدي عثمان"
		},
		phone: "0522.71.97.93",
		hours: "9h à 00h00",
		address: {
			fr: "HAY MASSIRA 2 (HMARA) RUE 44 N° 79 - BOURNAZEL",
			en: "HAY MASSIRA 2 (HMARA) RUE 44 N° 79 - BOURNAZEL",
			ar: "HAY MASSIRA 2 (HMARA) RUE 44 N° 79 - BOURNAZEL"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20AL%20BOUCHRA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20BOUCHRA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20AL%20BOUCHRA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie CHOUHADA",
			en: "Pharmacie CHOUHADA",
			ar: "Pharmacie CHOUHADA"
		},
		location: {
			fr: "Sidi Othmane",
			en: "Sidi Othmane",
			ar: "سيدي عثمان"
		},
		phone: "0522.37.34.71",
		hours: "24h/24h",
		address: {
			fr: "253, AVENUE DU NIL CITE MABROUKA",
			en: "253, AVENUE DU NIL CITE MABROUKA",
			ar: "253, AVENUE DU NIL CITE MABROUKA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20CHOUHADA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20CHOUHADA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20CHOUHADA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie CHLOPHYTUM",
			en: "Pharmacie CHLOPHYTUM",
			ar: "Pharmacie CHLOPHYTUM"
		},
		location: {
			fr: "Sidi Othmane",
			en: "Sidi Othmane",
			ar: "سيدي عثمان"
		},
		phone: null,
		hours: "9h à 00h00",
		address: {
			fr: "B24 GALERIE MARCHANDE MARJANE - SIDI OTHMANE BD 10 MARS",
			en: "B24 GALERIE MARCHANDE MARJANE - SIDI OTHMANE BD 10 MARS",
			ar: "B24 GALERIE MARCHANDE MARJANE - SIDI OTHMANE BD 10 MARS"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20CHLOPHYTUM%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20CHLOPHYTUM%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20CHLOPHYTUM%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie SASSIOUI",
			en: "Pharmacie SASSIOUI",
			ar: "Pharmacie SASSIOUI"
		},
		location: {
			fr: "Aïn Chock",
			en: "Aïn Chock",
			ar: "عين الشق"
		},
		phone: "0522870450",
		hours: "24h/24h",
		address: {
			fr: "N° 35 RUE 33 - LOT. AL IDAA II - AIN CHOCK",
			en: "N° 35 RUE 33 - LOT. AL IDAA II - AIN CHOCK",
			ar: "N° 35 RUE 33 - LOT. AL IDAA II - AIN CHOCK"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SASSIOUI%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SASSIOUI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SASSIOUI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE LE REPERE",
			en: "LE REPERE PHARMACY",
			ar: "صيدلية لو ريبير"
		},
		location: {
			fr: "Aïn Sebaâ",
			en: "Aïn Sebaâ",
			ar: "عين السبع"
		},
		phone: "0522.35.50.11",
		hours: "24h/24h",
		address: {
			fr: "395, RESIDENCE MOULAY ISMAIL - BD. MOULAY ISMAIL - KM 7 - ROUTE DE RABAT - AIN SEBAA",
			en: "395, RESIDENCE MOULAY ISMAIL - BD. MOULAY ISMAIL - KM 7 - ROUTE DE RABAT - AIN SEBAA",
			ar: "395, RESIDENCE MOULAY ISMAIL - BD. MOULAY ISMAIL - KM 7 - ROUTE DE RABAT - AIN SEBAA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20LE%20REPERE%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LE%20REPERE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20LE%20REPERE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE DE LA GIRONDE",
			en: "GIRONDE PHARMACY",
			ar: "صيدلية جيروند"
		},
		location: {
			fr: "Al Fida",
			en: "Al Fida",
			ar: "الفداء"
		},
		phone: "0522.30.06.19",
		hours: "24h/24h",
		address: {
			fr: "ANG.BD.DE LA GIRONDE ET RUE D'IFNI - PLACE KHAIBAR",
			en: "ANG.BD.DE LA GIRONDE ET RUE D'IFNI - PLACE KHAIBAR",
			ar: "ANG.BD.DE LA GIRONDE ET RUE D'IFNI - PLACE KHAIBAR"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20DE%20LA%20GIRONDE%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20DE%20LA%20GIRONDE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20DE%20LA%20GIRONDE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie ROCROY",
			en: "Pharmacie ROCROY",
			ar: "Pharmacie ROCROY"
		},
		location: {
			fr: "Belvédère",
			en: "Belvédère",
			ar: "بيلفيدير"
		},
		phone: "0522.24.86.50",
		hours: "nuit",
		address: {
			fr: "10, ANGLE ROCROY ET CHTOUKA N° 1 - BELVEDERE (FACE ALCATEL)",
			en: "10, ANGLE ROCROY ET CHTOUKA N° 1 - BELVEDERE (FACE ALCATEL)",
			ar: "10, ANGLE ROCROY ET CHTOUKA N° 1 - BELVEDERE (FACE ALCATEL)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20ROCROY%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ROCROY%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20ROCROY%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE KENZA",
			en: "KENZA PHARMACY",
			ar: "صيدلية كنزة"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0522.39.48.12",
		hours: "24h/24h",
		address: {
			fr: "17, RUE LARACHE - HAY ESSALAM - (SOUIKA C.I.L.) - C.I.L.",
			en: "17, RUE LARACHE - HAY ESSALAM - (SOUIKA C.I.L.) - C.I.L.",
			ar: "17, RUE LARACHE - HAY ESSALAM - (SOUIKA C.I.L.) - C.I.L."
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20KENZA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20KENZA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20KENZA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie AVENUE NACIRI",
			en: "Pharmacie AVENUE NACIRI",
			ar: "Pharmacie AVENUE NACIRI"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0522.69.20.42",
		hours: "24h/24h",
		address: {
			fr: "253, AV MOHAMED TAIEB NACIRI - Hay Hassani",
			en: "253, AV MOHAMED TAIEB NACIRI - Hay Hassani",
			ar: "253, AV MOHAMED TAIEB NACIRI - Hay Hassani"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20AVENUE%20NACIRI%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20AVENUE%20NACIRI%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20AVENUE%20NACIRI%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE AFIF",
			en: "AFIF PHARMACY",
			ar: "صيدلية عفيف"
		},
		location: {
			fr: "Lissasfa",
			en: "Lissasfa",
			ar: "اللساسفة"
		},
		phone: "0522.65.15.40",
		hours: "24h/24h",
		address: {
			fr: "KASSABAT AL AMINE, IMM. 4, MAGASIN 10 GROUPE BC - LISSASFA",
			en: "KASSABAT AL AMINE, IMM. 4, MAGASIN 10 GROUPE BC - LISSASFA",
			ar: "KASSABAT AL AMINE, IMM. 4, MAGASIN 10 GROUPE BC - LISSASFA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20AFIF%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AFIF%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20AFIF%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie YOUSRA",
			en: "Pharmacie YOUSRA",
			ar: "Pharmacie YOUSRA"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.36.36.30",
		hours: "24h/24h",
		address: {
			fr: "KISSARIAT EL HANK, AVENUE MEHDI BEN BARKA BATIMENTS EL HANK (DIRECTION POSTE ET MOBARAKA ) BOURGOGNE EL HANK",
			en: "KISSARIAT EL HANK, AVENUE MEHDI BEN BARKA BATIMENTS EL HANK (DIRECTION POSTE ET MOBARAKA ) BOURGOGNE EL HANK",
			ar: "KISSARIAT EL HANK, AVENUE MEHDI BEN BARKA BATIMENTS EL HANK (DIRECTION POSTE ET MOBARAKA ) BOURGOGNE EL HANK"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20YOUSRA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20YOUSRA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20YOUSRA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "PHARMACIE D'ANFA",
			en: "ANFA PHARMACY",
			ar: "صيدلية أنفا"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.27.38.49",
		hours: "24h/24h",
		address: {
			fr: "75,PLACE OUED EL MAKHAZINE",
			en: "75,PLACE OUED EL MAKHAZINE",
			ar: "75,PLACE OUED EL MAKHAZINE"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20D%27ANFA%20Casablanca",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20D%27ANFA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20D%27ANFA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MERYEM",
			en: "Pharmacie MERYEM",
			ar: "Pharmacie MERYEM"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.36.33.27",
		hours: "24h/24h",
		address: {
			fr: "19, BD. IBN SINA - COMPLEXE SPORTIF MED V  (CLINIQUE ROMANDIE, CENTRE CARDIO. CASA - ANFA  & CENTRE AL KINDY)",
			en: "19, BD. IBN SINA - COMPLEXE SPORTIF MED V  (CLINIQUE ROMANDIE, CENTRE CARDIO. CASA - ANFA  & CENTRE AL KINDY)",
			ar: "19, BD. IBN SINA - COMPLEXE SPORTIF MED V  (CLINIQUE ROMANDIE, CENTRE CARDIO. CASA - ANFA  & CENTRE AL KINDY)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MERYEM%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MERYEM%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MERYEM%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie ONZAC",
			en: "Pharmacie ONZAC",
			ar: "Pharmacie ONZAC"
		},
		location: {
			fr: "Maarif",
			en: "Maarif",
			ar: "المعاريف"
		},
		phone: "0522.79.78.74",
		hours: "24h/24h",
		address: {
			fr: "168, LOTISSEMENT SINDIBAD - AIN DIAB",
			en: "168, LOTISSEMENT SINDIBAD - AIN DIAB",
			ar: "168, LOTISSEMENT SINDIBAD - AIN DIAB"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20ONZAC%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ONZAC%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20ONZAC%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MENDOUR",
			en: "Pharmacie MENDOUR",
			ar: "Pharmacie MENDOUR"
		},
		location: {
			fr: "Sidi Bernoussi",
			en: "Sidi Bernoussi",
			ar: "سيدي برنوصي"
		},
		phone: "0522.73.40.40",
		hours: "24h/24h",
		address: {
			fr: "33, AVENUE \"C\" LOT. AL HAMIDIA - SIDI BERNOUSSI",
			en: "33, AVENUE \"C\" LOT. AL HAMIDIA - SIDI BERNOUSSI",
			ar: "33, AVENUE \"C\" LOT. AL HAMIDIA - SIDI BERNOUSSI"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MENDOUR%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MENDOUR%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MENDOUR%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie MANDARONA",
			en: "Pharmacie MANDARONA",
			ar: "Pharmacie MANDARONA"
		},
		location: {
			fr: "Sidi Maarouf",
			en: "Sidi Maarouf",
			ar: "سيدي معروف"
		},
		phone: "0522.33.56.99",
		hours: "24h/24h",
		address: {
			fr: "RESIDENCE LES PALMIERS BLOC F - ROUTE 1029 - SIDI MAAROUF MAKRO",
			en: "RESIDENCE LES PALMIERS BLOC F - ROUTE 1029 - SIDI MAAROUF MAKRO",
			ar: "RESIDENCE LES PALMIERS BLOC F - ROUTE 1029 - SIDI MAAROUF MAKRO"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MANDARONA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MANDARONA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MANDARONA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie OUM L'GHAITE",
			en: "Pharmacie OUM L'GHAITE",
			ar: "Pharmacie OUM L'GHAITE"
		},
		location: {
			fr: "Sidi Moumen",
			en: "Sidi Moumen",
			ar: "سيدي مومن"
		},
		phone: "0522.70.08.85",
		hours: "24h/24h",
		address: {
			fr: "21, RUE ARGANE EX. SOULAC APP N° 11 SIDI MOUMEN",
			en: "21, RUE ARGANE EX. SOULAC APP N° 11 SIDI MOUMEN",
			ar: "21, RUE ARGANE EX. SOULAC APP N° 11 SIDI MOUMEN"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20OUM%20L%27GHAITE%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20OUM%20L%27GHAITE%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20OUM%20L%27GHAITE%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Casablanca",
			en: "Casablanca",
			ar: "الدار البيضاء"
		},
		name: {
			fr: "Pharmacie CHOUHADA",
			en: "Pharmacie CHOUHADA",
			ar: "Pharmacie CHOUHADA"
		},
		location: {
			fr: "Sidi Othmane",
			en: "Sidi Othmane",
			ar: "سيدي عثمان"
		},
		phone: "0522.37.34.71",
		hours: "24h/24h",
		address: {
			fr: "253, AVENUE DU NIL CITE MABROUKA",
			en: "253, AVENUE DU NIL CITE MABROUKA",
			ar: "253, AVENUE DU NIL CITE MABROUKA"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20CHOUHADA%20Casablanca",
				waze: "https://www.waze.com/ul?q=Pharmacie%20CHOUHADA%20Casablanca",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20CHOUHADA%20Casablanca"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LOUGHRIBI",
			en: "Pharmacie LOUGHRIBI",
			ar: "Pharmacie LOUGHRIBI"
		},
		location: {
			fr: "Ain itti",
			en: "Ain itti",
			ar: "عين إيتي"
		},
		phone: "0524-32-80-55",
		hours: "9h à 00h00",
		address: {
			fr: "244, Dar Tounsi en face de Metro Arrondissement Ennakhil",
			en: "244, Dar Tounsi en face de Metro Arrondissement Ennakhil",
			ar: "244, Dar Tounsi en face de Metro Arrondissement Ennakhil"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LOUGHRIBI%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LOUGHRIBI%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LOUGHRIBI%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie FAKHARA",
			en: "Pharmacie FAKHARA",
			ar: "Pharmacie FAKHARA"
		},
		location: {
			fr: "Ain itti",
			en: "Ain itti",
			ar: "عين إيتي"
		},
		phone: "0524-31-46-72",
		hours: "9h à 00h00",
		address: {
			fr: "130, Hay Fekhara, à côté du Village Touristique Rte Wilaya SYBA (entre Bab Kechich et Bab Dbagh)",
			en: "130, Hay Fekhara, à côté du Village Touristique Rte Wilaya SYBA (entre Bab Kechich et Bab Dbagh)",
			ar: "130, Hay Fekhara, à côté du Village Touristique Rte Wilaya SYBA (entre Bab Kechich et Bab Dbagh)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20FAKHARA%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20FAKHARA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20FAKHARA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "PHARMACIE AL AMANA",
			en: "AL AMANA PHARMACY",
			ar: "صيدلية الامانة"
		},
		location: {
			fr: "Ain itti",
			en: "Ain itti",
			ar: "عين إيتي"
		},
		phone: "0524-32-83-28",
		hours: "9h à 00h00",
		address: {
			fr: "78, Douar Ouled El Garne Rte Ait Ourir Marrakech",
			en: "78, Douar Ouled El Garne Rte Ait Ourir Marrakech",
			ar: "78, Douar Ouled El Garne Rte Ait Ourir Marrakech"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20AL%20AMANA%20Marrakech",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20AMANA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20AL%20AMANA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie NAZIK",
			en: "Pharmacie NAZIK",
			ar: "Pharmacie NAZIK"
		},
		location: {
			fr: "Azzouzia",
			en: "Azzouzia",
			ar: "Azzouzia"
		},
		phone: "0524-35-52-35",
		hours: "9h à 00h00",
		address: {
			fr: "142, Rte Safi Al Massar Rte principale Marché de gros fruits/légumes après Boulangerie Bouderba Ex. Habib tournez à gauche",
			en: "142, Rte Safi Al Massar Rte principale Marché de gros fruits/légumes après Boulangerie Bouderba Ex. Habib tournez à gauche",
			ar: "142, Rte Safi Al Massar Rte principale Marché de gros fruits/légumes après Boulangerie Bouderba Ex. Habib tournez à gauche"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20NAZIK%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20NAZIK%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20NAZIK%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LA GARE ROUTIERE (Ex. BAB AL BORJ)",
			en: "Pharmacie LA GARE ROUTIERE (Ex. BAB AL BORJ)",
			ar: "Pharmacie LA GARE ROUTIERE (Ex. BAB AL BORJ)"
		},
		location: {
			fr: "Azzouzia",
			en: "Azzouzia",
			ar: "Azzouzia"
		},
		phone: "0524-35-66-93",
		hours: "9h à 00h00",
		address: {
			fr: "27, Op. Bab Al Borj Azzouzia (Route Afaq et Agadir, à 250m de Mosquée Tribich)",
			en: "27, Op. Bab Al Borj Azzouzia (Route Afaq et Agadir, à 250m de Mosquée Tribich)",
			ar: "27, Op. Bab Al Borj Azzouzia (Route Afaq et Agadir, à 250m de Mosquée Tribich)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LA%20GARE%20ROUTIERE%20%28Ex.%20BAB%20AL%20BORJ%29%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LA%20GARE%20ROUTIERE%20%28Ex.%20BAB%20AL%20BORJ%29%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LA%20GARE%20ROUTIERE%20%28Ex.%20BAB%20AL%20BORJ%29%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie BADR EDDAOUI",
			en: "Pharmacie BADR EDDAOUI",
			ar: "Pharmacie BADR EDDAOUI"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "0524-30-48-67",
		hours: "9h à 00h00",
		address: {
			fr: "26, Lot Taloujt II Amerchich en face de l'hôpital Amerchich",
			en: "26, Lot Taloujt II Amerchich en face de l'hôpital Amerchich",
			ar: "26, Lot Taloujt II Amerchich en face de l'hôpital Amerchich"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20BADR%20EDDAOUI%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20BADR%20EDDAOUI%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20BADR%20EDDAOUI%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie SALLE COUVERTE",
			en: "Pharmacie SALLE COUVERTE",
			ar: "Pharmacie SALLE COUVERTE"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "0524-31-17-23",
		hours: "9h à 00h00",
		address: {
			fr: "185, Hay Mohammadi, Unité 2 Daoudiate à côté du Cinéma Al Massira et la Salle Couverte",
			en: "185, Hay Mohammadi, Unité 2 Daoudiate à côté du Cinéma Al Massira et la Salle Couverte",
			ar: "185, Hay Mohammadi, Unité 2 Daoudiate à côté du Cinéma Al Massira et la Salle Couverte"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SALLE%20COUVERTE%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SALLE%20COUVERTE%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SALLE%20COUVERTE%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie  ISMAILIA",
			en: "Pharmacie  ISMAILIA",
			ar: "Pharmacie  ISMAILIA"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "0524-30-52-54",
		hours: "9h à 00h00",
		address: {
			fr: "Assif collectif B, au milieu du Marché ERAC, 4-C, à côté du lycée Cadi Ayyad",
			en: "Assif collectif B, au milieu du Marché ERAC, 4-C, à côté du lycée Cadi Ayyad",
			ar: "Assif collectif B, au milieu du Marché ERAC, 4-C, à côté du lycée Cadi Ayyad"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20%20ISMAILIA%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20%20ISMAILIA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20%20ISMAILIA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LES JARDINS DE MAJORELLE",
			en: "Pharmacie LES JARDINS DE MAJORELLE",
			ar: "Pharmacie LES JARDINS DE MAJORELLE"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "05243-01211",
		hours: "9h à 00h00",
		address: {
			fr: "Bd Moulay Abdellah Lot Zahia Imm.39 (en face club de Justice),",
			en: "Bd Moulay Abdellah Lot Zahia Imm.39 (en face club de Justice),",
			ar: "Bd Moulay Abdellah Lot Zahia Imm.39 (en face club de Justice),"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LES%20JARDINS%20DE%20MAJORELLE%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LES%20JARDINS%20DE%20MAJORELLE%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LES%20JARDINS%20DE%20MAJORELLE%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie MAMOUNE",
			en: "Pharmacie MAMOUNE",
			ar: "Pharmacie MAMOUNE"
		},
		location: {
			fr: "Dar Esaada",
			en: "Dar Esaada",
			ar: "Dar Esaada"
		},
		phone: "0663-42-36-77",
		hours: "9h à 00h00",
		address: {
			fr: "Douar Sraghna, derrière les Immeubles Saada à 700m de Marjane route de Casa",
			en: "Douar Sraghna, derrière les Immeubles Saada à 700m de Marjane route de Casa",
			ar: "Douar Sraghna, derrière les Immeubles Saada à 700m de Marjane route de Casa"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MAMOUNE%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MAMOUNE%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MAMOUNE%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie EZZAYTOUNE",
			en: "Pharmacie EZZAYTOUNE",
			ar: "Pharmacie EZZAYTOUNE"
		},
		location: {
			fr: "Guéliz",
			en: "Guéliz",
			ar: "ڭليز"
		},
		phone: "0524-43-80-67",
		hours: "9h à 00h00",
		address: {
			fr: "3, Rte Victor Hugo (menant à Targa) Qt. Militaire Zaytoune près du Tribunal de Commerce Binlekchali Guéliz,",
			en: "3, Rte Victor Hugo (menant à Targa) Qt. Militaire Zaytoune près du Tribunal de Commerce Binlekchali Guéliz,",
			ar: "3, Rte Victor Hugo (menant à Targa) Qt. Militaire Zaytoune près du Tribunal de Commerce Binlekchali Guéliz,"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20EZZAYTOUNE%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20EZZAYTOUNE%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20EZZAYTOUNE%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie DU CONSULAT",
			en: "Pharmacie DU CONSULAT",
			ar: "Pharmacie DU CONSULAT"
		},
		location: {
			fr: "Guéliz",
			en: "Guéliz",
			ar: "ڭليز"
		},
		phone: "0524-45-78-90",
		hours: "9h à 00h00",
		address: {
			fr: "Av. Med VI, rue entre RADEEMA et Arrond Ménara Guéliz, à côté nouveau Consulat de France et Hôtel Amani",
			en: "Av. Med VI, rue entre RADEEMA et Arrond Ménara Guéliz, à côté nouveau Consulat de France et Hôtel Amani",
			ar: "Av. Med VI, rue entre RADEEMA et Arrond Ménara Guéliz, à côté nouveau Consulat de France et Hôtel Amani"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20DU%20CONSULAT%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20DU%20CONSULAT%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20DU%20CONSULAT%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie SANA",
			en: "Pharmacie SANA",
			ar: "Pharmacie SANA"
		},
		location: {
			fr: "Guéliz",
			en: "Guéliz",
			ar: "ڭليز"
		},
		phone: "0524-45-72-57",
		hours: "9h à 00h00",
		address: {
			fr: "Route de Safi à 500m de Mc Do, en face du cimetière Arrahma et à côté du Café Al Finjane",
			en: "Route de Safi à 500m de Mc Do, en face du cimetière Arrahma et à côté du Café Al Finjane",
			ar: "Route de Safi à 500m de Mc Do, en face du cimetière Arrahma et à côté du Café Al Finjane"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SANA%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SANA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SANA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie SADA (Ex. SAADA)",
			en: "Pharmacie SADA (Ex. SAADA)",
			ar: "Pharmacie SADA (Ex. SAADA)"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-34-35-95",
		hours: "9h à 00h00",
		address: {
			fr: "Imm. Berrada Aïn Mezouar en face de la station d'essence Total",
			en: "Imm. Berrada Aïn Mezouar en face de la station d'essence Total",
			ar: "Imm. Berrada Aïn Mezouar en face de la station d'essence Total"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SADA%20%28Ex.%20SAADA%29%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SADA%20%28Ex.%20SAADA%29%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SADA%20%28Ex.%20SAADA%29%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie ETTAOUFIK",
			en: "Pharmacie ETTAOUFIK",
			ar: "Pharmacie ETTAOUFIK"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-49-37-65",
		hours: "9h à 00h00",
		address: {
			fr: "Bd. Laayoune avant Ferran Trab, la rue en face de la Banque Populaire, près de la Mosquée Hay Iziki",
			en: "Bd. Laayoune avant Ferran Trab, la rue en face de la Banque Populaire, près de la Mosquée Hay Iziki",
			ar: "Bd. Laayoune avant Ferran Trab, la rue en face de la Banque Populaire, près de la Mosquée Hay Iziki"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20ETTAOUFIK%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ETTAOUFIK%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20ETTAOUFIK%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LA FAMILLE",
			en: "Pharmacie LA FAMILLE",
			ar: "Pharmacie LA FAMILLE"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-39-49-20",
		hours: "9h à 00h00",
		address: {
			fr: "Fin Av. Tachfine Qt. Riad Al Menara (nouveau quartier), direction l'Aéroport à côté de la Mosquée Al Ghorfrane",
			en: "Fin Av. Tachfine Qt. Riad Al Menara (nouveau quartier), direction l'Aéroport à côté de la Mosquée Al Ghorfrane",
			ar: "Fin Av. Tachfine Qt. Riad Al Menara (nouveau quartier), direction l'Aéroport à côté de la Mosquée Al Ghorfrane"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LA%20FAMILLE%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LA%20FAMILLE%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LA%20FAMILLE%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie SAFSAF",
			en: "Pharmacie SAFSAF",
			ar: "Pharmacie SAFSAF"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-49-53-43",
		hours: "9h à 00h00",
		address: {
			fr: "Lot. Safsaf, derrière Collège Al Qods à côté de Qt. Sofia (derrière centre d'estivage Kahrama)",
			en: "Lot. Safsaf, derrière Collège Al Qods à côté de Qt. Sofia (derrière centre d'estivage Kahrama)",
			ar: "Lot. Safsaf, derrière Collège Al Qods à côté de Qt. Sofia (derrière centre d'estivage Kahrama)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SAFSAF%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SAFSAF%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SAFSAF%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie MY DRISS",
			en: "Pharmacie MY DRISS",
			ar: "Pharmacie MY DRISS"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-49-33-31",
		hours: "9h à 00h00",
		address: {
			fr: "101, Massira II \"D\" Opération Raja",
			en: "101, Massira II \"D\" Opération Raja",
			ar: "101, Massira II \"D\" Opération Raja"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20MY%20DRISS%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20MY%20DRISS%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20MY%20DRISS%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie SEBOU",
			en: "Pharmacie SEBOU",
			ar: "Pharmacie SEBOU"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-49-44-04",
		hours: "9h à 00h00",
		address: {
			fr: "24, Op. Sebou à côté de l'école Lamrani et la nouvelle Mosquée Massira 3, à 800m de Carrefour Targa",
			en: "24, Op. Sebou à côté de l'école Lamrani et la nouvelle Mosquée Massira 3, à 800m de Carrefour Targa",
			ar: "24, Op. Sebou à côté de l'école Lamrani et la nouvelle Mosquée Massira 3, à 800m de Carrefour Targa"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20SEBOU%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20SEBOU%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20SEBOU%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "PHARMACIE AL FIRDAOUS",
			en: "AL FIRDAOUS PHARMACY",
			ar: "صيدلية الفردوس"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-36-06-46",
		hours: "9h à 00h00",
		address: {
			fr: "Route principale de Lamhamid (Av. Guemassa) près de l'Ecole Chkili M'hamid et la Société Générale de Banque",
			en: "Route principale de Lamhamid (Av. Guemassa) près de l'Ecole Chkili M'hamid et la Société Générale de Banque",
			ar: "Route principale de Lamhamid (Av. Guemassa) près de l'Ecole Chkili M'hamid et la Société Générale de Banque"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20AL%20FIRDAOUS%20Marrakech",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20FIRDAOUS%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20AL%20FIRDAOUS%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie Qaryia Syahyia",
			en: "Pharmacie Qaryia Syahyia",
			ar: "Pharmacie Qaryia Syahyia"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524306547",
		hours: "9h à 00h00",
		address: {
			fr: "3 Al Qaria Assiyahia rte bab Lakhmis Nakhil sud Ain Itti",
			en: "3 Al Qaria Assiyahia rte bab Lakhmis Nakhil sud Ain Itti",
			ar: "3 Al Qaria Assiyahia rte bab Lakhmis Nakhil sud Ain Itti"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20Qaryia%20Syahyia%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20Qaryia%20Syahyia%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20Qaryia%20Syahyia%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie COMPLEXE ASKAJOUR",
			en: "Pharmacie COMPLEXE ASKAJOUR",
			ar: "Pharmacie COMPLEXE ASKAJOUR"
		},
		location: {
			fr: "M'Hamid",
			en: "M'Hamid",
			ar: "مْحاميد"
		},
		phone: "0524-37-18-00",
		hours: "9h à 00h00",
		address: {
			fr: "E2 77 Lot. Askajour Mhamid7 à 200m de Salle Couverte (près Hamam Lbatoul) près du Terminus N° 11 Douar Haha",
			en: "E2 77 Lot. Askajour Mhamid7 à 200m de Salle Couverte (près Hamam Lbatoul) près du Terminus N° 11 Douar Haha",
			ar: "E2 77 Lot. Askajour Mhamid7 à 200m de Salle Couverte (près Hamam Lbatoul) près du Terminus N° 11 Douar Haha"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20COMPLEXE%20ASKAJOUR%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20COMPLEXE%20ASKAJOUR%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20COMPLEXE%20ASKAJOUR%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LINA",
			en: "Pharmacie LINA",
			ar: "Pharmacie LINA"
		},
		location: {
			fr: "M'Hamid",
			en: "M'Hamid",
			ar: "مْحاميد"
		},
		phone: "0524-36-11-17",
		hours: "9h à 00h00",
		address: {
			fr: "Mhamid5 près du nouveau centre de santé et lycée Abdellah Ibrahim (centre mhamid5)",
			en: "Mhamid5 près du nouveau centre de santé et lycée Abdellah Ibrahim (centre mhamid5)",
			ar: "Mhamid5 près du nouveau centre de santé et lycée Abdellah Ibrahim (centre mhamid5)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LINA%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LINA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LINA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie BAB DOUKKALA",
			en: "Pharmacie BAB DOUKKALA",
			ar: "Pharmacie BAB DOUKKALA"
		},
		location: {
			fr: "Medina",
			en: "Medina",
			ar: "المدينة"
		},
		phone: "0524-38-61-62",
		hours: "9h à 00h00",
		address: {
			fr: "Toualat Bab Doukkala",
			en: "Toualat Bab Doukkala",
			ar: "Toualat Bab Doukkala"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20BAB%20DOUKKALA%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20BAB%20DOUKKALA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20BAB%20DOUKKALA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie L'HÔPITAL REGIONAL",
			en: "Pharmacie L'HÔPITAL REGIONAL",
			ar: "Pharmacie L'HÔPITAL REGIONAL"
		},
		location: {
			fr: "Sidi Youssef Ben Ali",
			en: "Sidi Youssef Ben Ali",
			ar: "سيدي يوسف بن علي"
		},
		phone: "0525093377",
		hours: "9h à 00h00",
		address: {
			fr: "Hay M'hamid Sud 30 Op Badr 2 Bouakhaz",
			en: "Hay M'hamid Sud 30 Op Badr 2 Bouakhaz",
			ar: "Hay M'hamid Sud 30 Op Badr 2 Bouakhaz"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20L%27H%C3%94PITAL%20REGIONAL%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20L%27H%C3%94PITAL%20REGIONAL%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20L%27H%C3%94PITAL%20REGIONAL%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie TILILA",
			en: "Pharmacie TILILA",
			ar: "Pharmacie TILILA"
		},
		location: {
			fr: "Targa",
			en: "Targa",
			ar: "تارڭا"
		},
		phone: "0524-34-51-61",
		hours: "9h à 00h00",
		address: {
			fr: "Route Sid Daou près du Super Marché les Roses de Targa,",
			en: "Route Sid Daou près du Super Marché les Roses de Targa,",
			ar: "Route Sid Daou près du Super Marché les Roses de Targa,"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20TILILA%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20TILILA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20TILILA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LAKHILI",
			en: "Pharmacie LAKHILI",
			ar: "Pharmacie LAKHILI"
		},
		location: {
			fr: "Annakhil",
			en: "Annakhil",
			ar: "Annakhil"
		},
		phone: "0701-41-02-41",
		hours: "nuit",
		address: {
			fr: "103, Lakhili à côté de Massi, Route de la forêt entre Souk R'bii et Atacadao Nakhil Sud ,   NAKHIL SUD",
			en: "103, Lakhili à côté de Massi, Route de la forêt entre Souk R'bii et Atacadao Nakhil Sud ,   NAKHIL SUD",
			ar: "103, Lakhili à côté de Massi, Route de la forêt entre Souk R'bii et Atacadao Nakhil Sud ,   NAKHIL SUD"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LAKHILI%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LAKHILI%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LAKHILI%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LE 11 JANVIER",
			en: "Pharmacie LE 11 JANVIER",
			ar: "Pharmacie LE 11 JANVIER"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "0524-44-74-70",
		hours: "nuit",
		address: {
			fr: "Bd. 11 Janvier, entre la Gare Routière Bab Doukkala et la Wilaya à côté de la Station Ifriquia",
			en: "Bd. 11 Janvier, entre la Gare Routière Bab Doukkala et la Wilaya à côté de la Station Ifriquia",
			ar: "Bd. 11 Janvier, entre la Gare Routière Bab Doukkala et la Wilaya à côté de la Station Ifriquia"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LE%2011%20JANVIER%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LE%2011%20JANVIER%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LE%2011%20JANVIER%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "PHARMACIE JAWHARA",
			en: "JAWHARA PHARMACY",
			ar: "صيدلية الجوهرة"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "0524-30-74-18",
		hours: "nuit",
		address: {
			fr: "164, Sidi Abad 3, à 150m de la Patisserie Aymane vers l'école Zola à côté de la crèche l'enfantaisie et du café Pinokio",
			en: "164, Sidi Abad 3, à 150m de la Patisserie Aymane vers l'école Zola à côté de la crèche l'enfantaisie et du café Pinokio",
			ar: "164, Sidi Abad 3, à 150m de la Patisserie Aymane vers l'école Zola à côté de la crèche l'enfantaisie et du café Pinokio"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20JAWHARA%20Marrakech",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20JAWHARA%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20JAWHARA%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie HOTEL WAZO",
			en: "Pharmacie HOTEL WAZO",
			ar: "Pharmacie HOTEL WAZO"
		},
		location: {
			fr: "Daoudiate",
			en: "Daoudiate",
			ar: "الداوية"
		},
		phone: "0524-30-58-43",
		hours: "nuit",
		address: {
			fr: "Hôtel appart. Wazo Bd. Abdelkrim Khattabi Rte de Casa vers la Station Ifriquia et Hôtel Ibis, juste avant l'Ecole Iraqui en allant vers Casa sur la Gauche",
			en: "Hôtel appart. Wazo Bd. Abdelkrim Khattabi Rte de Casa vers la Station Ifriquia et Hôtel Ibis, juste avant l'Ecole Iraqui en allant vers Casa sur la Gauche",
			ar: "Hôtel appart. Wazo Bd. Abdelkrim Khattabi Rte de Casa vers la Station Ifriquia et Hôtel Ibis, juste avant l'Ecole Iraqui en allant vers Casa sur la Gauche"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20HOTEL%20WAZO%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20HOTEL%20WAZO%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20HOTEL%20WAZO%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie HAY ASSANOUBAR",
			en: "Pharmacie HAY ASSANOUBAR",
			ar: "Pharmacie HAY ASSANOUBAR"
		},
		location: {
			fr: "Dar Esaada",
			en: "Dar Esaada",
			ar: "Dar Esaada"
		},
		phone: "0524-35-66-84",
		hours: "nuit",
		address: {
			fr: "460, Hay Assanoubar la route devant Suzuki à côté de la Mosquée Assanoubar,",
			en: "460, Hay Assanoubar la route devant Suzuki à côté de la Mosquée Assanoubar,",
			ar: "460, Hay Assanoubar la route devant Suzuki à côté de la Mosquée Assanoubar,"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20HAY%20ASSANOUBAR%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20HAY%20ASSANOUBAR%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20HAY%20ASSANOUBAR%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "PHARMACIE FLEMING",
			en: "FLEMING PHARMACY",
			ar: "صيدلية فليمنج"
		},
		location: {
			fr: "Guéliz",
			en: "Guéliz",
			ar: "ڭليز"
		},
		phone: "0524-42-22-26",
		hours: "nuit",
		address: {
			fr: "derrière le Cimetière Européen, près Fac de Médecine et près de l'Arrond. Guéliz à 150m du Complexe de Justice",
			en: "derrière le Cimetière Européen, près Fac de Médecine et près de l'Arrond. Guéliz à 150m du Complexe de Justice",
			ar: "derrière le Cimetière Européen, près Fac de Médecine et près de l'Arrond. Guéliz à 150m du Complexe de Justice"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/PHARMACIE%20FLEMING%20Marrakech",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20FLEMING%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=PHARMACIE%20FLEMING%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie DU KAWKAB",
			en: "Pharmacie DU KAWKAB",
			ar: "Pharmacie DU KAWKAB"
		},
		location: {
			fr: "Guéliz",
			en: "Guéliz",
			ar: "ڭليز"
		},
		phone: "0524-44-80-77",
		hours: "nuit",
		address: {
			fr: "36, Centre Commercial du K.A.C.M. Av. My Hassan I (El Harti)",
			en: "36, Centre Commercial du K.A.C.M. Av. My Hassan I (El Harti)",
			ar: "36, Centre Commercial du K.A.C.M. Av. My Hassan I (El Harti)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20DU%20KAWKAB%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20DU%20KAWKAB%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20DU%20KAWKAB%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie RÉSIDENCE ANNASSIM",
			en: "Pharmacie RÉSIDENCE ANNASSIM",
			ar: "Pharmacie RÉSIDENCE ANNASSIM"
		},
		location: {
			fr: "Hay Hassani",
			en: "Hay Hassani",
			ar: "حي الحسني"
		},
		phone: "0524-39-44-83",
		hours: "nuit",
		address: {
			fr: "Résidence Annassim 1 Massira 3, proche du Centre d'Estivage de Maroc Télécom derrière la Direction des Impôts Targa",
			en: "Résidence Annassim 1 Massira 3, proche du Centre d'Estivage de Maroc Télécom derrière la Direction des Impôts Targa",
			ar: "Résidence Annassim 1 Massira 3, proche du Centre d'Estivage de Maroc Télécom derrière la Direction des Impôts Targa"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20R%C3%89SIDENCE%20ANNASSIM%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20R%C3%89SIDENCE%20ANNASSIM%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20R%C3%89SIDENCE%20ANNASSIM%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie Du Citoyen",
			en: "Pharmacie Du Citoyen",
			ar: "Pharmacie Du Citoyen"
		},
		location: {
			fr: "M'Hamid",
			en: "M'Hamid",
			ar: "مْحاميد"
		},
		phone: "0524373998",
		hours: "nuit",
		address: {
			fr: "372 lotiss. Maatallah - lot ibn Sina",
			en: "372 lotiss. Maatallah - lot ibn Sina",
			ar: "372 lotiss. Maatallah - lot ibn Sina"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20Du%20Citoyen%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20Du%20Citoyen%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20Du%20Citoyen%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie EL MANSOUR EDDAHBI",
			en: "Pharmacie EL MANSOUR EDDAHBI",
			ar: "Pharmacie EL MANSOUR EDDAHBI"
		},
		location: {
			fr: "Medina",
			en: "Medina",
			ar: "المدينة"
		},
		phone: "0524-38-72-72",
		hours: "nuit",
		address: {
			fr: "147, Jnane El Afia Bab H'mer près du Collège El Mansour Eddahbi",
			en: "147, Jnane El Afia Bab H'mer près du Collège El Mansour Eddahbi",
			ar: "147, Jnane El Afia Bab H'mer près du Collège El Mansour Eddahbi"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20EL%20MANSOUR%20EDDAHBI%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20EL%20MANSOUR%20EDDAHBI%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20EL%20MANSOUR%20EDDAHBI%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie EL KHEIR",
			en: "Pharmacie EL KHEIR",
			ar: "Pharmacie EL KHEIR"
		},
		location: {
			fr: "Sidi Youssef Ben Ali",
			en: "Sidi Youssef Ben Ali",
			ar: "سيدي يوسف بن علي"
		},
		phone: "0524-40-67-30",
		hours: "nuit",
		address: {
			fr: "Douar Dlam Hay Jadid Tassaltante 2 (Derkaoua à côté d'El Mers)",
			en: "Douar Dlam Hay Jadid Tassaltante 2 (Derkaoua à côté d'El Mers)",
			ar: "Douar Dlam Hay Jadid Tassaltante 2 (Derkaoua à côté d'El Mers)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20EL%20KHEIR%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20EL%20KHEIR%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20EL%20KHEIR%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Marrakech",
			en: "Marrakech",
			ar: "مراكش"
		},
		name: {
			fr: "Pharmacie LES ORANGERS",
			en: "Pharmacie LES ORANGERS",
			ar: "Pharmacie LES ORANGERS"
		},
		location: {
			fr: "Targa",
			en: "Targa",
			ar: "تارڭا"
		},
		phone: "0524-34-38-88",
		hours: "aucune",
		address: {
			fr: "60, Lot. Lalla Haya Targa près de l'école Les Orangers",
			en: "60, Lot. Lalla Haya Targa près de l'école Les Orangers",
			ar: "60, Lot. Lalla Haya Targa près de l'école Les Orangers"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/Pharmacie%20LES%20ORANGERS%20Marrakech",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LES%20ORANGERS%20Marrakech",
				apple_maps: "https://maps.apple.com/?q=Pharmacie%20LES%20ORANGERS%20Marrakech"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "PHARMACIE DE L'AGDAL",
			en: "AGDAL PHARMACY",
			ar: "صيدلية أكدال"
		},
		location: {
			fr: "Agdal",
			en: "Agdal",
			ar: "أكدال"
		},
		phone: "0537 67 16 00",
		hours: "24h/24h",
		address: {
			fr: "Address not found",
			en: "Address not found",
			ar: "Address not found"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20DE%20L%27AGDAL%2C%20Address%20not%20found%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20DE%20L%27AGDAL%2C%20Address%20not%20found%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20DE%20L%27AGDAL%2C%20Address%20not%20found%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "Pharmacie DE KEBIBAT",
			en: "Pharmacie DE KEBIBAT",
			ar: "Pharmacie من KEBIBAT"
		},
		location: {
			fr: "Akkari-Ocean",
			en: "Akkari-Ocean",
			ar: "العكاري-المحيط"
		},
		phone: "0537 69 05 07",
		hours: "9h à 22h",
		address: {
			fr: "7 Rue Omar Slaoui Kebibat | ",
			en: "7 Rue Omar Slaoui Kebibat",
			ar: "7 شارع Omar ال Kebibat"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20DE%20KEBIBAT%2C%207%20Rue%20Omar%20Slaoui%20Kebibat%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=Pharmacie%20DE%20KEBIBAT%2C%207%20Rue%20Omar%20Slaoui%20Kebibat%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20DE%20KEBIBAT%2C%207%20Rue%20Omar%20Slaoui%20Kebibat%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "Pharmacie TARIK ELMEHDI",
			en: "Pharmacie TARIK ELMEHDI",
			ar: "Pharmacie TARIK ELMEHDI"
		},
		location: {
			fr: "Yacoub El Mansour",
			en: "Yacoub El Mansour",
			ar: "يعقوب المنصور"
		},
		phone: "0537 79 83 47",
		hours: "24h/24h",
		address: {
			fr: "Av El Massira N°16 Amal 4 ext  C.Y.M | ",
			en: "Av El Massira N°16 Amal 4 ext  C.Y.M",
			ar: "شارع El المسيرة N°16 ال 4 ext C.Y.M"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20TARIK%20ELMEHDI%2C%20Av%20El%20Massira%20N%C2%B016%20Amal%204%20ext%C2%A0%20C.Y.M%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=Pharmacie%20TARIK%20ELMEHDI%2C%20Av%20El%20Massira%20N%C2%B016%20Amal%204%20ext%C2%A0%20C.Y.M%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20TARIK%20ELMEHDI%2C%20Av%20El%20Massira%20N%C2%B016%20Amal%204%20ext%C2%A0%20C.Y.M%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "Pharmacie LOTUS",
			en: "Pharmacie LOTUS",
			ar: "Pharmacie LOTUS"
		},
		location: {
			fr: "Yacoub El Mansour",
			en: "Yacoub El Mansour",
			ar: "يعقوب المنصور"
		},
		phone: "0537 28 18 83",
		hours: "9h à 00h",
		address: {
			fr: "Bd des FAR N°342 Quartier El Menzeh C.Y.M | ",
			en: "Bd des FAR N°342 Quartier El Menzeh C.Y.M",
			ar: "Bd من FAR N°342 Quartier El Menzeh C.Y.M"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20LOTUS%2C%20Bd%20des%20FAR%20N%C2%B0342%20Quartier%20El%20Menzeh%20C.Y.M%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=Pharmacie%20LOTUS%2C%20Bd%20des%20FAR%20N%C2%B0342%20Quartier%20El%20Menzeh%20C.Y.M%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20LOTUS%2C%20Bd%20des%20FAR%20N%C2%B0342%20Quartier%20El%20Menzeh%20C.Y.M%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "Pharmacie L'ORCHIDEE",
			en: "Pharmacie L'ORCHIDEE",
			ar: "Pharmacie من"
		},
		location: {
			fr: "Hay Riad",
			en: "Hay Riad",
			ar: "حي الرياض"
		},
		phone: "0537 71 63 81",
		hours: "24h/24h",
		address: {
			fr: "Centre Commercial Aswak Assalam | A l'intérieur de Aswak Assalam devant l'accueil | 0537 57 20 37",
			en: "Centre Commercial Aswak Assalam | A l'intérieur de Aswak Assalam devant l'accueil | 0537 57 20 37",
			ar: "مركز تجاري Aswak ال | A l'intérieur من Aswak ال من l'accueil | 0537 57 20 37"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20L%27ORCHIDEE%2C%20Centre%20Commercial%20Aswak%20Assalam%20%7C%20A%20l%27int%C3%A9rieur%20de%20Aswak%20Assalam%20devant%20l%27accueil%20%7C%200537%2057%2020%2037%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=Pharmacie%20L%27ORCHIDEE%2C%20Centre%20Commercial%20Aswak%20Assalam%20%7C%20A%20l%27int%C3%A9rieur%20de%20Aswak%20Assalam%20devant%20l%27accueil%20%7C%200537%2057%2020%2037%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20L%27ORCHIDEE%2C%20Centre%20Commercial%20Aswak%20Assalam%20%7C%20A%20l%27int%C3%A9rieur%20de%20Aswak%20Assalam%20devant%20l%27accueil%20%7C%200537%2057%2020%2037%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "PHARMACIE BELMAHI",
			en: "BELMAHI PHARMACY",
			ar: "صيدلية بلماحي"
		},
		location: {
			fr: "Ocean-Orangers",
			en: "Ocean-Orangers",
			ar: "المحيط-البرتقال"
		},
		phone: "0537 72 26 50",
		hours: "9h à 00h",
		address: {
			fr: "1, Rue Tonkin (Av Madagascar) | Prés l'école ANDRE MALRAUX et MarchéDiour Jamaa | 0623 33 57 25 | ",
			en: "1, Rue Tonkin (Av Madagascar) | Prés l'école ANDRE MALRAUX et MarchéDiour Jamaa | 0623 33 57 25",
			ar: "1, شارع Tonkin شارع Madagascar) | قرب ال ANDRE ال و MarchéDiour Jamaa | 0623 33 57 25"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20BELMAHI%2C%201%2C%20Rue%20Tonkin%20%28Av%20Madagascar%29%20%7C%20Pr%C3%A9s%20l%27%C3%A9cole%20ANDRE%20MALRAUX%20et%20March%C3%A9Diour%20Jamaa%20%7C%200623%2033%2057%2025%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20BELMAHI%2C%201%2C%20Rue%20Tonkin%20%28Av%20Madagascar%29%20%7C%20Pr%C3%A9s%20l%27%C3%A9cole%20ANDRE%20MALRAUX%20et%20March%C3%A9Diour%20Jamaa%20%7C%200623%2033%2057%2025%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20BELMAHI%2C%201%2C%20Rue%20Tonkin%20%28Av%20Madagascar%29%20%7C%20Pr%C3%A9s%20l%27%C3%A9cole%20ANDRE%20MALRAUX%20et%20March%C3%A9Diour%20Jamaa%20%7C%200623%2033%2057%2025%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "PHARMACIE HAY CHABAB",
			en: "HAY CHABAB PHARMACY",
			ar: "صيدلية حي الشباب"
		},
		location: {
			fr: "Yacoub El Mansour",
			en: "Yacoub El Mansour",
			ar: "يعقوب المنصور"
		},
		phone: "0537 69 29 02",
		hours: "9h à 00h",
		address: {
			fr: "Bloc 18 appt 2 Hay Chabab Avenue Annour C.Y.M | ",
			en: "Bloc 18 appt 2 Hay Chabab Avenue Annour C.Y.M",
			ar: "بلوك 18 appt 2 حي Chabab شارع Annour C.Y.M"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20HAY%20CHABAB%2C%20Bloc%2018%20appt%202%20Hay%20Chabab%20Avenue%20Annour%20C.Y.M%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20HAY%20CHABAB%2C%20Bloc%2018%20appt%202%20Hay%20Chabab%20Avenue%20Annour%20C.Y.M%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20HAY%20CHABAB%2C%20Bloc%2018%20appt%202%20Hay%20Chabab%20Avenue%20Annour%20C.Y.M%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "PHARMACIE AL MINBAT",
			en: "Pharmacie AL MINBAT",
			ar: "Pharmacie ال MINBAT"
		},
		location: {
			fr: "Takadoum et Souissi",
			en: "Takadoum & Souissi",
			ar: "التقدم والسويسي"
		},
		phone: "0537 75 16 07",
		hours: "24h/24h",
		address: {
			fr: "18 Av Mehdi Benbarka Souissi | ",
			en: "18 Av Mehdi Benbarka Souissi",
			ar: "18 شارع Mehdi Benbarka Souissi"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20AL%20MINBAT%2C%2018%20Av%20Mehdi%20Benbarka%20Souissi%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=Pharmacie%20AL%20MINBAT%2C%2018%20Av%20Mehdi%20Benbarka%20Souissi%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20AL%20MINBAT%2C%2018%20Av%20Mehdi%20Benbarka%20Souissi%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "PHARMACIE CENTRALE",
			en: "CENTRAL PHARMACY",
			ar: "الصيدلية المركزية"
		},
		location: {
			fr: "Centre Ville",
			en: "Downtown",
			ar: "وسط المدينة"
		},
		phone: "0537 72 43 95",
		hours: "9h à 00h",
		address: {
			fr: "Avenue Hassan II (Prés LC Waikiki) | ",
			en: "Avenue Hassan II (Prés LC Waikiki)",
			ar: "شارع Hassan II قرب LC Waikiki)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20CENTRALE%2C%20Avenue%20Hassan%20II%20%28Pr%C3%A9s%20LC%20Waikiki%29%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20CENTRALE%2C%20Avenue%20Hassan%20II%20%28Pr%C3%A9s%20LC%20Waikiki%29%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20CENTRALE%2C%20Avenue%20Hassan%20II%20%28Pr%C3%A9s%20LC%20Waikiki%29%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Rabat",
			en: "Rabat",
			ar: "الرباط"
		},
		name: {
			fr: "PHARMACIE CHERQI",
			en: "CHERQI PHARMACY",
			ar: "صيدلية شرقي"
		},
		location: {
			fr: "Medina",
			en: "Medina",
			ar: "Medina"
		},
		phone: "0537 20 74 74",
		hours: "9h à 21h",
		address: {
			fr: "100-100 BIS avenue Laalou Medina | ",
			en: "100-100 BIS avenue Laalou Medina",
			ar: "100-100 BIS شارع ال Medina"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20CHERQI%2C%20100-100%20BIS%20avenue%20Laalou%20Medina%20%7C%20%2C%20Rabat",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20CHERQI%2C%20100-100%20BIS%20avenue%20Laalou%20Medina%20%7C%20%2C%20Rabat&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20CHERQI%2C%20100-100%20BIS%20avenue%20Laalou%20Medina%20%7C%20%2C%20Rabat"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "Pharmacie BOUCHOUK",
			en: "Pharmacie BOUCHOUK",
			ar: "Pharmacie BOUCHOUK"
		},
		location: {
			fr: "Al Mohit Abouab Sala",
			en: "Al Mohit Abouab Sala",
			ar: "ال Mohit Abouab ال"
		},
		phone: "0537 84 66 91",
		hours: "24h/24h",
		address: {
			fr: "Lotissement Bouchouk Residence Salaheddine | ",
			en: "Lotissement Bouchouk Residence Salaheddine",
			ar: "تجزئة Bouchouk من ال"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20BOUCHOUK%2C%20Lotissement%20Bouchouk%20Residence%20Salaheddine%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=Pharmacie%20BOUCHOUK%2C%20Lotissement%20Bouchouk%20Residence%20Salaheddine%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20BOUCHOUK%2C%20Lotissement%20Bouchouk%20Residence%20Salaheddine%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE AMINA",
			en: "AMINA PHARMACY",
			ar: "صيدلية أمينة"
		},
		location: {
			fr: "My Ismail",
			en: "My Ismail",
			ar: "My Ismail"
		},
		phone: "0537 80 55 59",
		hours: "24h/24h",
		address: {
			fr: "Sect 2 N°792 Hay My Ismail | (En face Hamam Es-salam) | ",
			en: "Sect 2 N°792 Hay My Ismail | (En face Hamam Es-salam)",
			ar: "Sect 2 N°792 حي My Ismail | (En face Hamam ال"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20AMINA%2C%20Sect%202%20N%C2%B0792%20Hay%20My%20Ismail%20%7C%20%28En%20face%20Hamam%20Es-salam%29%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AMINA%2C%20Sect%202%20N%C2%B0792%20Hay%20My%20Ismail%20%7C%20%28En%20face%20Hamam%20Es-salam%29%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20AMINA%2C%20Sect%202%20N%C2%B0792%20Hay%20My%20Ismail%20%7C%20%28En%20face%20Hamam%20Es-salam%29%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE AL AHBAB",
			en: "AL AHBAB PHARMACY",
			ar: "صيدلية الاحباب"
		},
		location: {
			fr: "Hay Arrahma",
			en: "Hay Arrahma",
			ar: "حي الرحمة"
		},
		phone: "0537 87 05 70",
		hours: "24h/24h",
		address: {
			fr: "Secteur E N°77 Rue Oued dahab | (En Face Salle Cherradi) | ",
			en: "Secteur E N°77 Rue Oued dahab | (En Face Salle Cherradi)",
			ar: "قطاع E N°77 شارع Oued dahab | (En Face ال Cherradi)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20AL%20AHBAB%2C%20Secteur%20E%20N%C2%B077%20Rue%20Oued%20dahab%20%7C%20%28En%20Face%20Salle%20Cherradi%29%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20AHBAB%2C%20Secteur%20E%20N%C2%B077%20Rue%20Oued%20dahab%20%7C%20%28En%20Face%20Salle%20Cherradi%29%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20AL%20AHBAB%2C%20Secteur%20E%20N%C2%B077%20Rue%20Oued%20dahab%20%7C%20%28En%20Face%20Salle%20Cherradi%29%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE RIMA",
			en: "RIMA PHARMACY",
			ar: "صيدلية ريما"
		},
		location: {
			fr: "Hay Arrahma",
			en: "Hay Arrahma",
			ar: "حي الرحمة"
		},
		phone: "0537 80 31 25",
		hours: "24h/24h",
		address: {
			fr: "Bd Boukraa n°64 Hay Cheikh Lamfadel | ",
			en: "Bd Boukraa n°64 Hay Cheikh Lamfadel",
			ar: "Bd Boukraa n°64 حي Cheikh من"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20RIMA%2C%20Bd%20Boukraa%20n%C2%B064%20Hay%20Cheikh%20Lamfadel%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20RIMA%2C%20Bd%20Boukraa%20n%C2%B064%20Hay%20Cheikh%20Lamfadel%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20RIMA%2C%20Bd%20Boukraa%20n%C2%B064%20Hay%20Cheikh%20Lamfadel%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE AL HANANE",
			en: "AL HANANE PHARMACY",
			ar: "صيدلية الحنان"
		},
		location: {
			fr: "Bettana",
			en: "Bettana",
			ar: "و"
		},
		phone: "0537 80 15 85",
		hours: "9h à 00h",
		address: {
			fr: "Imm 2 Résidence Idriss II - Bettana | ",
			en: "Imm 2 Résidence Idriss II - Bettana",
			ar: "عمارة 2 إقامة Idriss II - و"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20AL%20HANANE%2C%20Imm%202%20R%C3%A9sidence%20Idriss%20II%20-%20Bettana%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20HANANE%2C%20Imm%202%20R%C3%A9sidence%20Idriss%20II%20-%20Bettana%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20AL%20HANANE%2C%20Imm%202%20R%C3%A9sidence%20Idriss%20II%20-%20Bettana%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE BAB CHAAFA",
			en: "BAB CHAAFA PHARMACY",
			ar: "صيدلية باب الشفاء"
		},
		location: {
			fr: "Salé Médina",
			en: "Salé Médina",
			ar: "ال Médina"
		},
		phone: "0537 78 26 46",
		hours: "9h à 00h",
		address: {
			fr: " | صيدلية باب شعفة | ",
			en: "صيدلية باب شعفة",
			ar: "صيدلية باب شعفة"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20BAB%20CHAAFA%2C%20%20%7C%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A8%D8%A7%D8%A8%20%D8%B4%D8%B9%D9%81%D8%A9%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20BAB%20CHAAFA%2C%20%20%7C%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A8%D8%A7%D8%A8%20%D8%B4%D8%B9%D9%81%D8%A9%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20BAB%20CHAAFA%2C%20%20%7C%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A8%D8%A7%D8%A8%20%D8%B4%D8%B9%D9%81%D8%A9%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "Pharmacie ATLAS AL KABIR",
			en: "Pharmacie ATLAS AL KABIR",
			ar: "Pharmacie ال ال KABIR"
		},
		location: {
			fr: "Hay Essalam",
			en: "Hay Essalam",
			ar: "حي السلام"
		},
		phone: "0537 80 66 66",
		hours: "24h/24h",
		address: {
			fr: "Av Atlas Al Kabir N°449 Sect 2 | (A côté mosquée Ben Said) | ",
			en: "Av Atlas Al Kabir N°449 Sect 2 | (A côté mosquée Ben Said)",
			ar: "شارع ال ال Kabir N°449 Sect 2 | (A côté mosquée Ben Said)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20ATLAS%20AL%20KABIR%2C%20Av%20Atlas%20Al%20Kabir%20N%C2%B0449%20Sect%202%20%7C%20%28A%20c%C3%B4t%C3%A9%20mosqu%C3%A9e%20Ben%20Said%29%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ATLAS%20AL%20KABIR%2C%20Av%20Atlas%20Al%20Kabir%20N%C2%B0449%20Sect%202%20%7C%20%28A%20c%C3%B4t%C3%A9%20mosqu%C3%A9e%20Ben%20Said%29%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20ATLAS%20AL%20KABIR%2C%20Av%20Atlas%20Al%20Kabir%20N%C2%B0449%20Sect%202%20%7C%20%28A%20c%C3%B4t%C3%A9%20mosqu%C3%A9e%20Ben%20Said%29%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE SHEMS",
			en: "SHEMS PHARMACY",
			ar: "صيدلية شمس"
		},
		location: {
			fr: "Sala El Jadida",
			en: "Sala El Jadida",
			ar: "سلا الجديدة"
		},
		phone: "0537 83 52 89",
		hours: "24h/24h",
		address: {
			fr: "Avenue Zarbia, N°4 Hssain | ",
			en: "Avenue Zarbia, N°4 Hssain",
			ar: "شارع Zarbia, N°4 Hssain"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20SHEMS%2C%20Avenue%20Zarbia%2C%20N%C2%B04%20Hssain%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20SHEMS%2C%20Avenue%20Zarbia%2C%20N%C2%B04%20Hssain%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20SHEMS%2C%20Avenue%20Zarbia%2C%20N%C2%B04%20Hssain%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE LA MAMORA",
			en: "LA MAMORA PHARMACY",
			ar: "صيدلية لا معمورة"
		},
		location: {
			fr: "Tabriquet",
			en: "Tabriquet",
			ar: "و"
		},
		phone: "0537 85 40 87",
		hours: "24h/24h",
		address: {
			fr: "Angle Av My Youssef et Av Soudan | (en face de l'école nationale forestiere des ingenieurs) | ",
			en: "Angle Av My Youssef et Av Soudan | (en face de l'école nationale forestiere des ingenieurs)",
			ar: "زاوية شارع My Youssef و شارع Soudan | (en face من ال ال forestiere من ingenieurs)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20LA%20MAMORA%2C%20Angle%20Av%20My%20Youssef%20et%20Av%20Soudan%20%7C%20%28en%20face%20de%20l%27%C3%A9cole%20nationale%20forestiere%20des%20ingenieurs%29%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LA%20MAMORA%2C%20Angle%20Av%20My%20Youssef%20et%20Av%20Soudan%20%7C%20%28en%20face%20de%20l%27%C3%A9cole%20nationale%20forestiere%20des%20ingenieurs%29%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20LA%20MAMORA%2C%20Angle%20Av%20My%20Youssef%20et%20Av%20Soudan%20%7C%20%28en%20face%20de%20l%27%C3%A9cole%20nationale%20forestiere%20des%20ingenieurs%29%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE EL WAHDA",
			en: "EL WAHDA PHARMACY",
			ar: "صيدلية الوحدة"
		},
		location: {
			fr: "Hay Elinbiate",
			en: "Hay Elinbiate",
			ar: "حي Elinbiate"
		},
		phone: "0537 81 28 93",
		hours: "9h à 00h",
		address: {
			fr: "زنقة حسان المعروفة بزنقة الذهبية (قرب الشاطو الكبير) | ",
			en: "زنقة حسان المعروفة بزنقة الذهبية (قرب الشاطو الكبير)",
			ar: "زنقة حسان المعروفة بزنقة الذهبية (قرب الشاطو الكبير)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20EL%20WAHDA%2C%20%D8%B2%D9%86%D9%82%D8%A9%20%D8%AD%D8%B3%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%88%D9%81%D8%A9%20%D8%A8%D8%B2%D9%86%D9%82%D8%A9%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9%20%28%D9%82%D8%B1%D8%A8%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D9%88%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%29%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20EL%20WAHDA%2C%20%D8%B2%D9%86%D9%82%D8%A9%20%D8%AD%D8%B3%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%88%D9%81%D8%A9%20%D8%A8%D8%B2%D9%86%D9%82%D8%A9%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9%20%28%D9%82%D8%B1%D8%A8%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D9%88%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%29%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20EL%20WAHDA%2C%20%D8%B2%D9%86%D9%82%D8%A9%20%D8%AD%D8%B3%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%88%D9%81%D8%A9%20%D8%A8%D8%B2%D9%86%D9%82%D8%A9%20%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A%D8%A9%20%28%D9%82%D8%B1%D8%A8%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D9%88%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%29%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Sale",
			en: "Sale",
			ar: "سلا"
		},
		name: {
			fr: "PHARMACIE DU BOUREGREG",
			en: "BOUREGREG PHARMACY",
			ar: "صيدلية أبي رقراق"
		},
		location: {
			fr: "Sala El Jadida",
			en: "Sala El Jadida",
			ar: "سلا الجديدة"
		},
		phone: "0537 53 45 24",
		hours: "9h à 00h",
		address: {
			fr: "Av Du Bouregreg Lot 1071 N°2 Zone Villa | ",
			en: "Av Du Bouregreg Lot 1071 N°2 Zone Villa",
			ar: "شارع من Bouregreg Lot 1071 N°2 Zone ال"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20DU%20BOUREGREG%2C%20Av%20Du%20Bouregreg%20Lot%201071%20N%C2%B02%20Zone%20Villa%20%7C%20%2C%20Sale",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20DU%20BOUREGREG%2C%20Av%20Du%20Bouregreg%20Lot%201071%20N%C2%B02%20Zone%20Villa%20%7C%20%2C%20Sale&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20DU%20BOUREGREG%2C%20Av%20Du%20Bouregreg%20Lot%201071%20N%C2%B02%20Zone%20Villa%20%7C%20%2C%20Sale"
			}
		}
	},
	{
		city: {
			fr: "Temara",
			en: "Temara",
			ar: "تمارة"
		},
		name: {
			fr: "PHARMACIE JORIO",
			en: "JORIO PHARMACY",
			ar: "صيدلية جوريو"
		},
		location: {
			fr: "Al Wifak",
			en: "Al Wifak",
			ar: "ال Wifak"
		},
		phone: "0537 61 65 89",
		hours: "",
		address: {
			fr: "1319, Im B, Lot Al Wifak | ",
			en: "1319, Im B, Lot Al Wifak",
			ar: "1319, Im B, Lot ال Wifak"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20JORIO%2C%201319%2C%20Im%20B%2C%20Lot%20Al%20Wifak%20%7C%20%2C%20Temara",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20JORIO%2C%201319%2C%20Im%20B%2C%20Lot%20Al%20Wifak%20%7C%20%2C%20Temara&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20JORIO%2C%201319%2C%20Im%20B%2C%20Lot%20Al%20Wifak%20%7C%20%2C%20Temara"
			}
		}
	},
	{
		city: {
			fr: "Temara",
			en: "Temara",
			ar: "تمارة"
		},
		name: {
			fr: "Pharmacie JNANE EL FOUARATE",
			en: "Pharmacie JNANE EL FOUARATE",
			ar: "Pharmacie JNANE EL FOUARATE"
		},
		location: {
			fr: "Centre",
			en: "Centre",
			ar: "مركز"
		},
		phone: "0637 57 58 06",
		hours: "",
		address: {
			fr: "Alintissar N49, El Fouarate | 0808 57 22 77 | ",
			en: "Alintissar N49, El Fouarate | 0808 57 22 77",
			ar: "ال N49, El Fouarate | 0808 57 22 77"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20JNANE%20EL%20FOUARATE%2C%20Alintissar%20N49%2C%20El%20Fouarate%20%7C%200808%2057%2022%2077%20%7C%20%2C%20Temara",
				waze: "https://www.waze.com/ul?q=Pharmacie%20JNANE%20EL%20FOUARATE%2C%20Alintissar%20N49%2C%20El%20Fouarate%20%7C%200808%2057%2022%2077%20%7C%20%2C%20Temara&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20JNANE%20EL%20FOUARATE%2C%20Alintissar%20N49%2C%20El%20Fouarate%20%7C%200808%2057%2022%2077%20%7C%20%2C%20Temara"
			}
		}
	},
	{
		city: {
			fr: "Temara",
			en: "Temara",
			ar: "تمارة"
		},
		name: {
			fr: "Pharmacie ASSALAM",
			en: "Pharmacie ASSALAM",
			ar: "Pharmacie ال"
		},
		location: {
			fr: "El Massira",
			en: "El Massira",
			ar: "El المسيرة"
		},
		phone: "0537 60 67 40",
		hours: "",
		address: {
			fr: "Secteur 1 , N° 417 , Hay Massira 2 | ",
			en: "Secteur 1 , N° 417 , Hay Massira 2",
			ar: "قطاع 1 , N° 417 , حي المسيرة 2"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20ASSALAM%2C%20Secteur%201%20%2C%20N%C2%B0%20417%20%2C%20Hay%20Massira%202%20%7C%20%2C%20Temara",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ASSALAM%2C%20Secteur%201%20%2C%20N%C2%B0%20417%20%2C%20Hay%20Massira%202%20%7C%20%2C%20Temara&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20ASSALAM%2C%20Secteur%201%20%2C%20N%C2%B0%20417%20%2C%20Hay%20Massira%202%20%7C%20%2C%20Temara"
			}
		}
	},
	{
		city: {
			fr: "Temara",
			en: "Temara",
			ar: "تمارة"
		},
		name: {
			fr: "PHARMACIE LAMIA",
			en: "LAMIA PHARMACY",
			ar: "صيدلية لمياء"
		},
		location: {
			fr: "Centre",
			en: "Centre",
			ar: "مركز"
		},
		phone: "0537 61 64 78",
		hours: "",
		address: {
			fr: "19 Lot Elhassania Hay Mansour Edahbi | (Près collège Nejaiet ecole Itihad Alarabi) | ",
			en: "19 Lot Elhassania Hay Mansour Edahbi | (Près collège Nejaiet ecole Itihad Alarabi)",
			ar: "19 Lot Elhassania حي Mansour Edahbi | (Près collège و ال Itihad ال"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20LAMIA%2C%2019%20Lot%20Elhassania%20Hay%20Mansour%20Edahbi%20%7C%20%28Pr%C3%A8s%20coll%C3%A8ge%20Nejaiet%20ecole%20Itihad%20Alarabi%29%20%7C%20%2C%20Temara",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LAMIA%2C%2019%20Lot%20Elhassania%20Hay%20Mansour%20Edahbi%20%7C%20%28Pr%C3%A8s%20coll%C3%A8ge%20Nejaiet%20ecole%20Itihad%20Alarabi%29%20%7C%20%2C%20Temara&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20LAMIA%2C%2019%20Lot%20Elhassania%20Hay%20Mansour%20Edahbi%20%7C%20%28Pr%C3%A8s%20coll%C3%A8ge%20Nejaiet%20ecole%20Itihad%20Alarabi%29%20%7C%20%2C%20Temara"
			}
		}
	},
	{
		city: {
			fr: "Temara",
			en: "Temara",
			ar: "تمارة"
		},
		name: {
			fr: "PHARMACIE AL MASJID",
			en: "AL MASJID PHARMACY",
			ar: "صيدلية المسجد"
		},
		location: {
			fr: "Oulad Mtaâ",
			en: "Oulad Mtaâ",
			ar: "أولاد مطاع"
		},
		phone: "0663 45 50 44",
		hours: "9h00 à 23h00",
		address: {
			fr: "N° 276, Secteur 1 Ouled Mtaâ | ",
			en: "N° 276, Secteur 1 Ouled Mtaâ",
			ar: "N° 276, قطاع 1 ال Mtaâ"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20AL%20MASJID%2C%20N%C2%B0%20276%2C%20Secteur%201%20Ouled%20Mta%C3%A2%20%7C%20%2C%20Temara",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20MASJID%2C%20N%C2%B0%20276%2C%20Secteur%201%20Ouled%20Mta%C3%A2%20%7C%20%2C%20Temara&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20AL%20MASJID%2C%20N%C2%B0%20276%2C%20Secteur%201%20Ouled%20Mta%C3%A2%20%7C%20%2C%20Temara"
			}
		}
	},
	{
		city: {
			fr: "Temara",
			en: "Temara",
			ar: "تمارة"
		},
		name: {
			fr: "PHARMACIE RIM",
			en: "RIM PHARMACY",
			ar: "صيدلية ريم"
		},
		location: {
			fr: "El Guich Oudaya",
			en: "El Guich Oudaya",
			ar: "الڭيش أوداية"
		},
		phone: "0537 56 18 13",
		hours: "9h à 23h",
		address: {
			fr: "496 Guich Oudayas(En Face BIM et à 150M | de la mosquée belbachiret attijariwafa bank) | ",
			en: "496 Guich Oudayas(En Face BIM et à 150M | de la mosquée belbachiret attijariwafa bank)",
			ar: "496 Guich Oudayas(En Face BIM و à 150M | من ال mosquée و attijariwafa bank)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20RIM%2C%20496%20Guich%20Oudayas%28En%20Face%20BIM%20et%20%C3%A0%20150M%20%7C%20de%20la%20mosqu%C3%A9e%20belbachiret%20attijariwafa%20bank%29%20%7C%20%2C%20Temara",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20RIM%2C%20496%20Guich%20Oudayas%28En%20Face%20BIM%20et%20%C3%A0%20150M%20%7C%20de%20la%20mosqu%C3%A9e%20belbachiret%20attijariwafa%20bank%29%20%7C%20%2C%20Temara&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20RIM%2C%20496%20Guich%20Oudayas%28En%20Face%20BIM%20et%20%C3%A0%20150M%20%7C%20de%20la%20mosqu%C3%A9e%20belbachiret%20attijariwafa%20bank%29%20%7C%20%2C%20Temara"
			}
		}
	},
	{
		city: {
			fr: "Ain-aouda",
			en: "Ain-aouda",
			ar: "عين عودة"
		},
		name: {
			fr: "PHARMACIE JORIO",
			en: "JORIO PHARMACY",
			ar: "صيدلية جوريو"
		},
		location: {
			fr: "Al Wifak",
			en: "Al Wifak",
			ar: "ال Wifak"
		},
		phone: "0537 61 65 89",
		hours: "",
		address: {
			fr: "1319, Im B, Lot Al Wifak | ",
			en: "1319, Im B, Lot Al Wifak",
			ar: "1319, Im B, Lot ال Wifak"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20JORIO%2C%201319%2C%20Im%20B%2C%20Lot%20Al%20Wifak%20%7C%20%2C%20Ain-aouda",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20JORIO%2C%201319%2C%20Im%20B%2C%20Lot%20Al%20Wifak%20%7C%20%2C%20Ain-aouda&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20JORIO%2C%201319%2C%20Im%20B%2C%20Lot%20Al%20Wifak%20%7C%20%2C%20Ain-aouda"
			}
		}
	},
	{
		city: {
			fr: "Ain-aouda",
			en: "Ain-aouda",
			ar: "عين عودة"
		},
		name: {
			fr: "Pharmacie JNANE EL FOUARATE",
			en: "Pharmacie JNANE EL FOUARATE",
			ar: "Pharmacie JNANE EL FOUARATE"
		},
		location: {
			fr: "Centre",
			en: "Centre",
			ar: "مركز"
		},
		phone: "0637 57 58 06",
		hours: "",
		address: {
			fr: "Alintissar N49, El Fouarate | 0808 57 22 77 | ",
			en: "Alintissar N49, El Fouarate | 0808 57 22 77",
			ar: "ال N49, El Fouarate | 0808 57 22 77"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20JNANE%20EL%20FOUARATE%2C%20Alintissar%20N49%2C%20El%20Fouarate%20%7C%200808%2057%2022%2077%20%7C%20%2C%20Ain-aouda",
				waze: "https://www.waze.com/ul?q=Pharmacie%20JNANE%20EL%20FOUARATE%2C%20Alintissar%20N49%2C%20El%20Fouarate%20%7C%200808%2057%2022%2077%20%7C%20%2C%20Ain-aouda&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20JNANE%20EL%20FOUARATE%2C%20Alintissar%20N49%2C%20El%20Fouarate%20%7C%200808%2057%2022%2077%20%7C%20%2C%20Ain-aouda"
			}
		}
	},
	{
		city: {
			fr: "Ain-aouda",
			en: "Ain-aouda",
			ar: "عين عودة"
		},
		name: {
			fr: "Pharmacie ASSALAM",
			en: "Pharmacie ASSALAM",
			ar: "Pharmacie ال"
		},
		location: {
			fr: "El Massira",
			en: "El Massira",
			ar: "El المسيرة"
		},
		phone: "0537 60 67 40",
		hours: "",
		address: {
			fr: "Secteur 1 , N° 417 , Hay Massira 2 | ",
			en: "Secteur 1 , N° 417 , Hay Massira 2",
			ar: "قطاع 1 , N° 417 , حي المسيرة 2"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=Pharmacie%20ASSALAM%2C%20Secteur%201%20%2C%20N%C2%B0%20417%20%2C%20Hay%20Massira%202%20%7C%20%2C%20Ain-aouda",
				waze: "https://www.waze.com/ul?q=Pharmacie%20ASSALAM%2C%20Secteur%201%20%2C%20N%C2%B0%20417%20%2C%20Hay%20Massira%202%20%7C%20%2C%20Ain-aouda&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=Pharmacie%20ASSALAM%2C%20Secteur%201%20%2C%20N%C2%B0%20417%20%2C%20Hay%20Massira%202%20%7C%20%2C%20Ain-aouda"
			}
		}
	},
	{
		city: {
			fr: "Ain-aouda",
			en: "Ain-aouda",
			ar: "عين عودة"
		},
		name: {
			fr: "PHARMACIE LAMIA",
			en: "LAMIA PHARMACY",
			ar: "صيدلية لمياء"
		},
		location: {
			fr: "Centre",
			en: "Centre",
			ar: "مركز"
		},
		phone: "0537 61 64 78",
		hours: "",
		address: {
			fr: "19 Lot Elhassania Hay Mansour Edahbi | (Près collège Nejaiet ecole Itihad Alarabi) | ",
			en: "19 Lot Elhassania Hay Mansour Edahbi | (Près collège Nejaiet ecole Itihad Alarabi)",
			ar: "19 Lot Elhassania حي Mansour Edahbi | (Près collège و ال Itihad ال"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20LAMIA%2C%2019%20Lot%20Elhassania%20Hay%20Mansour%20Edahbi%20%7C%20%28Pr%C3%A8s%20coll%C3%A8ge%20Nejaiet%20ecole%20Itihad%20Alarabi%29%20%7C%20%2C%20Ain-aouda",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20LAMIA%2C%2019%20Lot%20Elhassania%20Hay%20Mansour%20Edahbi%20%7C%20%28Pr%C3%A8s%20coll%C3%A8ge%20Nejaiet%20ecole%20Itihad%20Alarabi%29%20%7C%20%2C%20Ain-aouda&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20LAMIA%2C%2019%20Lot%20Elhassania%20Hay%20Mansour%20Edahbi%20%7C%20%28Pr%C3%A8s%20coll%C3%A8ge%20Nejaiet%20ecole%20Itihad%20Alarabi%29%20%7C%20%2C%20Ain-aouda"
			}
		}
	},
	{
		city: {
			fr: "Ain-aouda",
			en: "Ain-aouda",
			ar: "عين عودة"
		},
		name: {
			fr: "PHARMACIE AL MASJID",
			en: "AL MASJID PHARMACY",
			ar: "صيدلية المسجد"
		},
		location: {
			fr: "Oulad Mtaâ",
			en: "Oulad Mtaâ",
			ar: "أولاد مطاع"
		},
		phone: "0663 45 50 44",
		hours: "9h00 à 23h00",
		address: {
			fr: "N° 276, Secteur 1 Ouled Mtaâ | ",
			en: "N° 276, Secteur 1 Ouled Mtaâ",
			ar: "N° 276, قطاع 1 ال Mtaâ"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20AL%20MASJID%2C%20N%C2%B0%20276%2C%20Secteur%201%20Ouled%20Mta%C3%A2%20%7C%20%2C%20Ain-aouda",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20AL%20MASJID%2C%20N%C2%B0%20276%2C%20Secteur%201%20Ouled%20Mta%C3%A2%20%7C%20%2C%20Ain-aouda&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20AL%20MASJID%2C%20N%C2%B0%20276%2C%20Secteur%201%20Ouled%20Mta%C3%A2%20%7C%20%2C%20Ain-aouda"
			}
		}
	},
	{
		city: {
			fr: "Ain-aouda",
			en: "Ain-aouda",
			ar: "عين عودة"
		},
		name: {
			fr: "PHARMACIE RIM",
			en: "RIM PHARMACY",
			ar: "صيدلية ريم"
		},
		location: {
			fr: "El Guich Oudaya",
			en: "El Guich Oudaya",
			ar: "الڭيش أوداية"
		},
		phone: "0537 56 18 13",
		hours: "9h à 23h",
		address: {
			fr: "496 Guich Oudayas(En Face BIM et à 150M | de la mosquée belbachiret attijariwafa bank) | ",
			en: "496 Guich Oudayas(En Face BIM et à 150M | de la mosquée belbachiret attijariwafa bank)",
			ar: "496 Guich Oudayas(En Face BIM و à 150M | من ال mosquée و attijariwafa bank)"
		},
		maps: {
			message: {
				fr: "Cliquez pour obtenir l'itinéraire sur:",
				en: "Click to get directions on:",
				ar: "انقر للحصول على الاتجاهات على:"
			},
			links: {
				google_maps: "https://www.google.com/maps/search/?api=1&query=PHARMACIE%20RIM%2C%20496%20Guich%20Oudayas%28En%20Face%20BIM%20et%20%C3%A0%20150M%20%7C%20de%20la%20mosqu%C3%A9e%20belbachiret%20attijariwafa%20bank%29%20%7C%20%2C%20Ain-aouda",
				waze: "https://www.waze.com/ul?q=PHARMACIE%20RIM%2C%20496%20Guich%20Oudayas%28En%20Face%20BIM%20et%20%C3%A0%20150M%20%7C%20de%20la%20mosqu%C3%A9e%20belbachiret%20attijariwafa%20bank%29%20%7C%20%2C%20Ain-aouda&navigate=yes",
				apple_maps: "http://maps.apple.com/?q=PHARMACIE%20RIM%2C%20496%20Guich%20Oudayas%28En%20Face%20BIM%20et%20%C3%A0%20150M%20%7C%20de%20la%20mosqu%C3%A9e%20belbachiret%20attijariwafa%20bank%29%20%7C%20%2C%20Ain-aouda"
			}
		}
	}
];
const pharmacyData = {
	date: date,
	pharmacies: pharmacies
};

export { pharmacyData as p };
