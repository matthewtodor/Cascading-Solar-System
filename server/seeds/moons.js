const example = {
	name: "Placeholder",
	name_history: "lorem ipsum",
	size: 2000.2, // equatorial radius in miles
	planet_id: 1,
};
const moons = [
	{
		name: "Moon",
		name_history:
			"The moon is called as such because when it was discovered, we didn't know there were any others in the universe. The first time more moons were discovered was in 1610, when Galileo Galilei discovered four moons orbiting Jupiter.",
		size: 1079.6,
		planet_id: 3,
	},
	{
		name: "Phobos",
		name_history:
			"Asaph Hall (who discovered the moon) named Mars' moons for the mythological sons of Ares, the Greek counterpart of the Roman god, Mars. Phobos, whose name means fear is the brother of Deimos.",
		size: 7.000802812,
		planet_id: 4,
	},
	{
		name: "Deimos",
		name_history:
			"Asaph Hall (who discovered the moon) named Mars' moons for the mythological sons of Ares, the Greek counterpart of the Roman god, Mars. Deimos, whose name means dread, is the brother of Phobos.",
		size: 3.8525,
		planet_id: 4,
	},
	{
		name: "Adrastea",
		name_history:
			"Adrastea is named after the Cretian nymph who took care of Zeus for his mother Rhea. Rhea entrusted her child to Adrastea to save him from her husband Cronus who would eat his children in order to maintain his rule.​",
		size: 5.09524,
		planet_id: 5,
	},
	{
		name: "Aitne",
		name_history:
			"Originally called S/2001 J11, Aitne was named for a Sicilian nymph said to have been raped by the Roman god Jupiter, while he was in the form of a vulture. The name derives from the Greek for \"I burn,\" and is associated with Sicily's volcano, Mount Etna. Satellites in the Jovian system are named for Zeus/Jupiter's lovers and descendants. ​",
		size: 0.932057,
		planet_id: 5,
	},
	{
		name: "Amalthea",
		name_history:
			"Originally designated Jupiter V, Camille Flammarion suggested the name Amalthea for this moon. Amalthea is named for a naiad who nursed the newborn Jupiter. Amalthea is often depicted with a goat, whose milk is said to have fed the infant Jupiter.​",
		size: 51.88449,
		planet_id: 5,
	},
	{
		name: "Ananke",
		name_history:
			"Ananke was named for the mother of Adrastea by Zeus, the Greek equivalent of the Roman god Jupiter. In other accounts, Adrastea is described as a nymph of Crete who was one of the nursemaids of the infant Zeus. Ananke is the personification of fate or necessity in ancient Greek literature, who rewards or punishes people for their deeds.​​",
		size: 8.6992,
		planet_id: 5,
	},
	{
		name: "Aoede",
		name_history:
			"Originally called S/2003 J7, Aoede was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Aoede means song.​​",
		size: 1.24274,
		planet_id: 5,
	},
	{
		name: "Arche",
		name_history:
			'Originally called S/2002 J1, Arche was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Her name means "beginning."​​',
		size: 1.0,
		planet_id: 5,
	},
	{
		name: "Autonoe",
		name_history:
			'Originally called S/2001 J1, Autonoe was named for the mother of the Graces by Jupiter, according to some authors.	A name ending in "e" was chosen for this moon in accordance with the International Astronomical Union\'s policy for designating outer moons with retrograde orbits.​​​',
		size: 1.2,
		planet_id: 5,
	},
	{
		name: "Callirrhoe",
		name_history:
			'This object was originally called asteroid 1999 UX18 and then renamed S/1999 J1 upon discovery that it is a satellite of Jupiter. Ultimately, it was named "Callirrhoe" after the daughter of the river god, Achelous, who persuaded Zeus (the Greek equivalent of the Roman god Jupiter) to instantly change her young sons into grown men so they could avenge the murder of their father. ​​',
		size: 2.7,
		planet_id: 5,
	},
	{
		name: "Callisto",
		name_history: "Callisto is named for a woman turned into a bear by Zeus in Greek mythology. Zeus is identical to the Roman god Jupiter.​​",
		size: 1497.690985,
		planet_id: 5,
	},
	{
		name: "Carme",
		name_history:
			'Carme is named for the mother of Britomartis by the Roman god Jupiter (or Zeus in the Greek version of the myth), who became a goddess of Crete. A name ending in "e" was chosen in accordance with the International Astronomical Union\'s policy for designating outer moons with retrograde orbits.​​​',
		size: 14.0,
		planet_id: 5,
	},
	{
		name: "Carpo",
		name_history:
			"Originally designated S/2003 J20, Carpo was named for one of the three Athenian goddesses of the flowers of spring and the fruits of summer and autumn. An annual festival in their honor was called the Horaea. According to Hesoid, a group of goddesses collectively called the Horae (with different names, which did not include Carpo) were daughters of Zeus, the Greek equivalent of the Roman god Jupiter.​​​​",
		size: 0.932057,
		planet_id: 5,
	},
	{
		name: "Chaldene",
		name_history:
			"Originally called S/2000 J10, Chaldene was named for the mother of Solymos by Zeus, the Greek equivalent of the Roman god Jupiter.​​​​",
		size: 1.0,
		planet_id: 5,
	},
	{
		name: "Cyllene",
		name_history:
			"Originally called S/2003 J13, Cyllene was named for a nymph in Greek mythology who was a daughter of Zeus, the Greek equivalent of the Roman god Jupiter. She is associated with a mountain in Arcadia on which, legend has it, the blackbirds become white and are impossible to shoot during the daytime.​​​​",
		size: 0.621371,
		planet_id: 5,
	},
	{
		name: "Dia",
		name_history:
			'Dia is a Greek name meaning "she who belongs to Zeus" (who became Jupiter in Roman mythology). Dia was the divine daughter of the seashore. The tiny moon was originally called S/2000 J11 because it is a satellite that was discovered in 2000, and was the 11th satellite of Jupiter to be found that year.​​​​​',
		size: 1.2,
		planet_id: 5,
	},
	{
		name: "Eirene",
		name_history: "In mythology, Eirene is the goddess of peace and the daughter of Zeus and Themis.​​​​​",
		size: 1.2,
		planet_id: 5,
	},
	{
		name: "Elara",
		name_history:
			"Elara is named for one of the lovers of Zeus, the Greek equivalent of the Roman god Jupiter. In Greek mythology, Zeus hid her from his wife, Hera, by placing Elara deep beneath the Earth, where she gave birth to their son, a giant called Tityas.​​​​​",
		size: 26.7,
		planet_id: 5,
	},
	{
		name: "Ersa",
		name_history:
			"In mythology, Ersa is the sister of Pandia and, as such, also the daughter of Zeus and the Moon goddess Selene. Ersa is the goddess of dew.​",
		size: 0.932057,
		planet_id: 5,
	},
	{
		name: "Euanthe",
		name_history:
			"Originally called S/2001 J7, Euanthe was given one of the names in Greek mythology for the mother of the Graces by Zeus, the Greek equivalent of the Roman god Jupiter.​",
		size: 0.932057,
		planet_id: 5,
	},
	{
		name: "Eukelade",
		name_history:
			'Originally called S/2003 J1, Eukelade was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Her name means "well sounding."​',
		size: 1.2,
		planet_id: 5,
	},
	{
		name: "Eupheme",
		name_history: "In mythology, Eupheme is the spirit of praise and good omen, the granddaughter of Zeus, and the sister of Philophrosyne.",
		size: 0.621371,
		planet_id: 5,
	},
	{
		name: "Euporie",
		name_history:
			"Originally called S/2001 J10, Euporie was named for one of the Horae (seasons), who were daughters of the Roman god Jupiter, and a Titaness named Themis. Euporie means plenty.",
		size: 0.6,
		planet_id: 5,
	},
	{
		name: "Europa",
		name_history: "Europa is named for a woman who, in Greek mythology, was abducted by the god Zeus – Jupiter in Roman mythology.",
		size: 970.0,
		planet_id: 5,
	},
	{
		name: "Eurydome",
		name_history:
			"Originally called S/2001 J4, Eurydome was named for a character in Greek mythology who, according to some sources, was the mother of the Graces by Zeus, the Greek equivalent of the Roman god Jupiter.",
		size: 0.9,
		planet_id: 5,
	},
	{
		name: "Ganymede",
		name_history:
			"In mythology, Ganymede was a beautiful young boy who was carried to Olympus by Zeus (the Greek equivalent of the Roman god Jupiter) disguised as an eagle. Ganymede became the cupbearer of the Olympian gods.",
		size: 1635.0,
		planet_id: 5,
	},
	{
		name: "Harpalyke",
		name_history:
			"Originally called S/2000 J5, Harpalyke was named for a woman in Greek mythology who was transformed into a night bird called Chalcis. According to one version of the story, this transformation happened after she had intercourse with Zeus, the Greek equivalent of the Roman god Jupiter. In another version, she had incestuous relations with her father. In revenge, she killed her younger brother or her son (depending on the account), carved him up, cooked the meat and served it to her father, who ultimately kills himself.",
		size: 1.3,
		planet_id: 5,
	},
	{
		name: "Hegemone",
		name_history:
			'Originally called S/2003 J8, Hegemone was named for one of the Graces (according to the Athenians), who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. The name means "female leader."',
		size: 0.93,
		planet_id: 5,
	},
];
