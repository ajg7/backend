exports.seed = function (knex) {
  const articles = [
    {
      title: "Pokemon, Defining Moment of Millenials?",
      author: "Harry Rump",
      summary: "Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown. Sunt in culpa Drilbur Calcium Hoenn Shieldon Wynaut Charizard",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Culture",
      rank: 3
    },
    {
      title: "Zombies Allowed to Play Football",
      author: "Heather Little",
      summary: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Sports",
      rank: 4
    },
    {
      title: "Hurricane Terry Rises to Category 5",
      author: "Gail Weathers",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Weather",
      rank: 3
    },
    {
      title: "Dolphin Kingdom Discovered!",
      author: "Mike Aile",
      summary: "Monocle ipsum dolor sit amet alluring elegant Sunspel K-pop cosy the highest quality Airbus A380 charming craftsmanship Winkreative Ettinger artisanal classic. ",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Politics",
      rank: 1
    },
    {
      title: "Pirate Republic on the Rise",
      author: "R.R. Piratzi",
      summary: "Mizzenmast Arr mutiny reef schooner Privateer belaying pin hearties galleon flogging. Bowsprit barkadeer rum Jack Ketch Sail ho sutler driver grog interloper chantey",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Politics",
      rank: 5
    },
    {
      title: "450th Day of No Sun",
      author: "Dr. Sara Langstrom",
      summary: "Fall asleep upside-down get scared by doggo also cucumerro , for put butt in owner's face hunt by meowing loudly at 5am next to human slave food dispenser.",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Weather",
      rank: 2
    },
    {
      title: "Chemists Gather at VESPR Conference",
      author: "Priscilla Wayne",
      summary: "Globular star cluster sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Orion's sword as a patch of light hundreds of thousands invent the universe",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Culture",
      rank: 2
    },
    {
      title: "Jaguars win Super Bowl",
      author: "Fantasy Ismyname",
      summary: "I'm baby veniam consectetur incididunt quis brunch heirloom aliqua shabby chic chartreuse kale chips ad everyday carry vice",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Sports",
      rank: 3
    },
    {
      title: "Cupcakes are Falling from the Sky",
      author: "Cloe W. Cupcakes",
      summary: "Cupcake ipsum dolor sit amet danish biscuit candy wafer. Lemon drops chupa chups chupa chups pie. ",
      image: "https://picsum.photos/seed/picsum/200/300",
      category: "Weather",
      rank: 4
    },
    {
      title: "New Dating App for Fitness Enthusiasts",
      author: "Josh Harold",
      summary: "Fitness degree in philosophy exploring the city exploring the city. Joking around introvert I'm a good listener whatever topic is on NPR adventures, art school listening to music exploring the city seeing as many countries as possible open-minded.",
      image: null,
      category: "Culture",
      rank: 2
    },
  ]

  return knex("articles").insert(articles)
}