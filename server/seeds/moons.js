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
		name: "Erinome",
		name_history:
			"Originally called S/2000 J4, Erinome was named for a chaste young woman in Roman mythology whom Venus causes to fall in love with Jupiter. She loses her virginity to Adonis, however, after Venus throws a fog on her. This displeases the goddess Diana, who turns Erinome into a peacock. Adonis, realizing he has assaulted a love of Jupiter, flees into the woods, but is driven out by Mercury. Just as Adonis is about to defeat Mercury in a violent fight, Jupiter throws a lightning bolt and kills him.​",
		size: 1.0,
		planet_id: 5,
	},
];
