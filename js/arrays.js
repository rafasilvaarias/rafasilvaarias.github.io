const planets = [
  "Aeloria",
  "Belerophon",
  "Cryos",
  "Dionysus",
  "Elysium",
  "Fenrir",
  "Galatea",
  "Hyrule",
  "Icarus",
  "Jupiter Prime",
  "Korriban",
  "Lyra",
  "Morpheus",
  "Neptune's Haven",
  "Orpheus",
  "Pandora",
  "Quintara",
  "Rhea",
  "Serenity",
  "Triton",
  "Umbra",
  "Vulcan",
  "Wraith",
  "Xanadu",
  "Yggdrasil",
  "Zephyr",
  "Andromeda",
  "Borealis",
  "Calypso",
  "Deneb",
  "Euphoria",
  "Frostbite",
  "Goliath",
  "Helios",
  "Ivy",
  "Jubilee",
  "Kairos",
  "Labyrinth",
  "Meridian",
  "Nova",
  "Oasis",
  "Polaris",
  "Quantum",
  "Ragnarok",
  "Solstice",
  "Terra Nova",
  "Utopia",
  "Vortex",
  "Whisper",
  "Xeno",
  "Yonder",
  "Zenith",
  "Aether",
  "Basilisk",
  "Cassiopeia",
  "Draco",
  "Eclipse",
  "Fury",
  "Ganymede",
  "Horizon",
  "Infinity",
  "Jupiter's Forge",
  "Kaleidoscope",
  "Luna",
  "Majesty",
  "Nebula",
  "Olympus",
  "Phoenix",
  "Quasar",
  "Radiance",
  "Stardust",
  "Titan",
  "Umbrella",
  "Voyager",
  "Wanderlust",
  "Xylophone",
  "Ypsilon",
  "Zodiac",
  "Avalon",
  "Bliss",
  "Celestia",
  "Dusk",
  "Elysian",
  "Frostburn",
  "Genesis",
  "Haven",
  "Inferno",
  "Journey",
  "Krypton",
  "Luminous",
  "Mirage",
  "Nirvana",
  "Oblivion",
  "Pegasus",
  "Quintessence",
  "Rapture",
  "Solaris",
  "Terra",
  "Unity",
  "Vesper",
  "Wildfire",
  "Xanthe",
  "Yggdrasil",
  "Zen",
  "Aurora",
  "Boreas",
  "Caelum",
  "Dawn",
  "Eternity",
  "Falcon",
  "Galaxy",
  "Harmony",
  "Inferno",
  "Jupiter's Eye",
  "Kismet",
  "Labyrinth",
  "Mystic",
  "Nebula",
  "Oasis",
  "Polaris",
  "Quantum",
  "Ragnarok",
  "Stellar",
  "Triton",
  "Utopia",
  "Vortex",
  "Whisper",
  "Xenon",
  "Yonder",
  "Zeus",
  "Apollo",
  "Asteria",
  "Borealis",
  "Celestia",
  "Dionysus",
  "Elysium",
  "Frostbite",
  "Galaxy",
  "Horizon",
  "Inferno",
  "Jupiter's Glory",
  "Kaleidoscope",
  "Luna",
  "Majesty",
  "Nebula",
  "Olympus",
  "Polaris",
  "Quasar",
  "Radiance",
  "Stardust",
  "Terra",
  "Umbrella",
  "Voyager",
  "Whisper",
  "Xylophone",
  "Ypsilon",
  "Zephyr",
  "Aether",
  "Basilisk",
  "Cassiopeia",
  "Draco",
  "Eclipse",
  "Fury",
  "Ganymede",
  "Horizon",
  "Infinity",
  "Jupiter's Forge",
  "Kaleidoscope",
  "Luna",
  "Majesty",
  "Nebula",
  "Olympus",
  "Phoenix",
  "Quasar",
  "Radiance",
];

const genders = ["Male", "Female", "Ooblong"];

const hobbiesList = [
  "Stargazing",
  "Spacewalking",
  "Astronomy",
  "Zero-gravity Yoga",
  "Alien Language Studies",
  "Exoplanet Photography",
  "Quantum Chess",
  "Astrobiology",
  "Exotic Cooking",
  "Cosmic Surfing",
  "Holographic Art",
  "Nebula Meditation",
  "Astro-archeology",
  "Hyperdrive Racing",
  "Virtual Reality Tourism",
  "Telepathic Communication",
  "Space Opera Singing",
  "Xenobotany",
  "Interstellar Sculpting",
  "Gravity-defying Parkour",
  "Time Dilation Photography",
  "Neural Network Painting",
  "Galactic Archaeology",
  "Astro-piloting",
  "Alien Diplomacy",
  "Quantum Entanglement Music",
  "Cosmic Cuisine",
  "Astro-geocaching",
  "Quantum Mechanics Gardening",
  "Stellar Cartography",
  "Lunar Golf",
  "Zero-gravity Basketball",
  "Interstellar Soccer",
  "Exoplanet Racing",
  "Asteroid Surfing",
  "Quantum Tennis",
  "Cosmic Martial Arts",
  "Space Hockey",
  "Anti-gravity Climbing",
  "Alien Wrestling",
  "Starship Racing",
  "Galactic Volleyball",
  "Intergalactic Baseball",
  "Neutrino Dodgeball",
  "Black Hole Diving",
  "Solar Wind Sailing",
  "Interplanetary Parkour",
  "Quantum Quidditch",
  "Laser Tag in Space",
  "Zero-gravity Skydiving",
  "Asteroid Mining Competition",
  "Exoplanet Hunting Contest",
  "Supernova Observation",
  "Space-time Surfing",
  "Cosmic Dance",
  "Galactic Gastronomy",
  "Quantum Sculpting",
  "Zero-gravity Ballet",
  "Interstellar Poetry",
  "Astro-fishing",
  "Dimensional Racing",
  "Celestial Photography",
  "Nebula Exploration",
  "Hyperspace Hiking",
  "Space-themed Crafting",
  "Astro-archery",
  "Gravitational Wave Surfing",
  "Exoplanet Botany",
  "Solar Flare Surfing",
  "Interstellar Cooking",
  "Quantum Kayaking",
  "Space Station Gardening",
  "Cosmic Calligraphy",
  "Asteroid Rodeo",
  "Exoplanet Safari",
  "Alien Fashion Design",
  "Starship Construction",
  "Cosmic DJing",
  "Galactic Puzzle Solving",
  "Intergalactic Photography",
  "Neutron Star Skiing",
  "Black Hole Photography",
  "Space Tourism Adventures",
  "Astro-painting",
  "Time Travel Exploration",
  "Quantum Juggling",
  "Zero-gravity Ballet",
];

const statuses = [
    "😀 Online",
    "😴 Sleeping",
    "📱 Busy on phone",
    "🍵 Taking a break",
    "🚀 Exploring the universe",
    "🎧 Listening to music",
    "📚 Studying",
    "🎮 Gaming",
    "🍕 Hungry",
    "💻 Coding",
    "🎨 Creating art",
    "📷 Taking photos",
    "⚽ Playing sports",
    "🌙 Dreaming",
    "🌟 Feeling inspired",
    "💡 Brainstorming",
    "📝 Writing",
    "🏖️ On vacation",
    "🏃‍♂️ Exercising",
    "🧘 Meditating",
    "👾 Watching movies",
    "🌧️ Feeling blue",
    "🔥 Feeling motivated",
    "🎭 Acting",
    "🍦 Indulging",
    "🌈 Feeling optimistic",
    "🎈 Celebrating",
    "🌌 Lost in thought",
    "💤 Resting",
    "🛌 Taking a nap",
    "🧩 Solving puzzles",
    "🔮 Predicting the future",
    "🎤 Singing",
    "🧳 Traveling",
    "🍹 Relaxing",
    "🎬 Directing",
    "📻 Listening to podcasts",
    "🔍 Searching for answers",
    "📈 Analyzing data",
    "💬 Chatting",
    "🔒 Offline",
  ];

  let firstNames = ["James", "Mary",
  "Robert", "Patricia",
  "John", "Jennifer",
  "Michael", "Linda",
  "David", "Elizabeth",
  "William", "Barbara",
  "Richard", "Susan",
  "Joseph", "Jessica",
  "Thomas", "Sarah",
  "Christopher", "Karen",
  "Charles", "Lisa",
  "Daniel", "Nancy",
  "Matthew", "Betty",
  "Anthony", "Sandra",
  "Mark", "Margaret",
  "Donald", "Ashley",
  "Steven", "Kimberly",
  "Andrew", "Emily",
  "Paul", "Donna",
  "Joshua", "Michelle",
  "Kenneth", "Carol",
  "Kevin", "Amanda",
  "Brian", "Melissa",
  "George", "Deborah",
  "Timothy", "Stephanie",
  "Ronald", "Dorothy",
  "Jason", "Rebecca",
  "Edward", "Sharon",
  "Jeffrey", "Laura",
  "Ryan", "Cynthia",
  "Jacob", "Amy",
  "Gary", "Kathleen",
  "Nicholas", "Angela",
  "Eric", "Shirley",
  "Jonathan", "Brenda",
  "Stephen", "Emma",
  "Larry", "Anna",
  "Justin", "Pamela",
  "Scott", "Nicole",
  "Brandon", "Samantha",
  "Benjamin", "Katherine",
  "Samuel", "Christine",
  "Gregory", "Helen",
  "Alexander", "Debra",
  "Patrick", "Rachel",
  "Frank", "Carolyn",
  "Raymond", "Janet",
  "Jack", "Maria",
  "Dennis", "Catherine",
  "Jerry", "Heather",
  "Tyler", "Diane",
  "Aaron", "Olivia",
  "Jose", "Julie",
  "Adam", "Joyce",
  "Nathan", "Victoria",
  "Henry", "Ruth",
  "Zachary", "Virginia",
  "Douglas", "Lauren",
  "Peter", "Kelly",
  "Kyle", "Christina",
  "Noah", "Joan",
  "Ethan", "Evelyn",
  "Jeremy", "Judith",
  "Walter", "Andrea",
  "Christian", "Hannah",
  "Keith", "Megan",
  "Roger", "Cheryl",
  "Terry", "Jacqueline",
  "Austin", "Martha",
  "Sean", "Madison",
  "Gerald", "Teresa",
  "Carl", "Gloria",
  "Harold", "Sara",
  "Dylan", "Janice",
  "Arthur", "Ann",
  "Lawrence", "Kathryn",
  "Jordan", "Abigail",
  "Jesse", "Sophia",
  "Bryan", "Frances",
  "Billy", "Jean",
  "Bruce", "Alice",
  "Gabriel", "Judy",
  "Joe", "Isabella",
  "Logan", "Julia",
  "Alan", "Grace",
  "Juan", "Amber",
  "Albert", "Denise",
  "Willie", "Danielle",
  "Elijah", "Marilyn",
  "Wayne", "Beverly",
  "Randy", "Charlotte",
  "Vincent", "Natalie",
  "Mason", "Theresa",
  "Roy", "Diana",
  "Ralph", "Brittany",
  "Bobby", "Doris",
  "Russell", "Kayla",
  "Bradley", "Alexis",
  "Philip", "Lori",
  "Eugene", "Mildred"];

  let lastNames = [
      "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
      "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
      "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
      "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
      "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez",
      "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart",
      "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson",
      "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks",
      "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez",
      "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins",
      "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales",
      "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham",
      "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson",
      "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens",
      "Harrison", "Fernandez", "McDonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry",
      "Chen", "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter",
      "Hunter", "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks"
  ]



  function generateAlienName() {
    const syllables = ["xar", "blort", "zz", "pho", "grax", "nia", "qwrth", "zylor", "kryll", "Mhon", "HH", "Gon", "Xhan", "Zhan", "Khan", "Klon", "Zon", "Zar", "Zor", "Bloop", "Woo", "Jun", "Low", "Glorp", "Blee", "Thee", "Fxx", "Ruxya","Azor", "Blix", "Crenz", "Dwarp", "Elnix", "Froth", "Glimp", "Hragn", "Izth", "Juvex","Kroth", "Lern", "Mlorg", "Nixt", "Ogth","Plinx", "Qwazz", "Rypt", "Snarv", "Tlith","Urz", "Vroth", "Wump", "Xyloph", "Yrg", "Zorn","Azmik", "Bralg", "Crov", "Dwelm", "Epnix","Frelk", "Glopt", "Hragn", "Izth", "Juvex","Kroth", "Lern", "Mlorg", "Nixt", "Ogth","Plunx", "Qwazz", "Rypt", "Snarv", "Tlith","Urz", "Vroth", "Wump", "Xyloph", "Yrg","Zroth"];
    let randomInt = Math.floor(Math.random() * 2) + 1;
    let str = "";
    for (let i = 0; i < randomInt; i++){
      str += syllables[Math.floor(Math.random() * syllables.length)];
    }
    return str;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 10000; i++) {
      let newName1 = generateAlienName();
      let newName2 = generateAlienName();
      firstNames.push(newName1);
      lastNames.push(newName2);
    }
    console.log("Alien names generated");
    console.log(firstNames);
    console.log(lastNames);
  });
  // Generate alien names (10000 names)
  
  
