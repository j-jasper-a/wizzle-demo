import { QuizType } from "@wizzle-demo/shared";

const quizzes: QuizType[] = [
  {
    id: "example-quiz-1",
    creatorId: "example-user-1",
    title: "The Enchanting Harry Potter Quiz for Beginners",
    category: "Entertainment",
    questions: [
      {
        id: "example-question-1",
        text: "What house does Harry Potter belong to?",
        options: [
          { id: "example-option-1", text: "Hufflepuff" },
          { id: "example-option-2", text: "Ravenclaw" },
          { id: "example-option-3", text: "Slytherin" },
          { id: "example-option-4", text: "Gryffindor" },
        ],
      },
      {
        id: "example-question-2",
        text: "What is the name of Harry's best friend with red hair?",
        options: [
          { id: "example-option-5", text: "Draco Malfoy" },
          { id: "example-option-6", text: "Neville Longbottom" },
          { id: "example-option-7", text: "Ron Weasley" },
          { id: "example-option-8", text: "Cedric Diggory" },
          { id: "example-option-9", text: "Seamus Finnigan" },
        ],
      },
      {
        id: "example-question-3",
        text: "What is the name of the school Harry attends?",
        options: [
          { id: "example-option-10", text: "Beauxbatons" },
          { id: "example-option-11", text: "Durmstrang" },
          { id: "example-option-12", text: "Ilvermorny" },
          { id: "example-option-13", text: "Hogwarts" },
        ],
      },
      {
        id: "example-question-4",
        text: "What sport does Harry play at Hogwarts?",
        options: [
          { id: "example-option-14", text: "Quidditch" },
          { id: "example-option-15", text: "Soccer" },
          { id: "example-option-16", text: "Basketball" },
          { id: "example-option-17", text: "Chess" },
          { id: "example-option-18", text: "Gobstones" },
        ],
      },
      {
        id: "example-question-5",
        text: "What animal is on the Gryffindor crest?",
        options: [
          { id: "example-option-19", text: "Snake" },
          { id: "example-option-20", text: "Badger" },
          { id: "example-option-21", text: "Eagle" },
          { id: "example-option-22", text: "Lion" },
        ],
      },
      {
        id: "example-question-6",
        text: "Who is the headmaster of Hogwarts for most of the series?",
        options: [
          { id: "example-option-23", text: "Severus Snape" },
          { id: "example-option-24", text: "Minerva McGonagall" },
          { id: "example-option-25", text: "Albus Dumbledore" },
          { id: "example-option-26", text: "Gilderoy Lockhart" },
          { id: "example-option-27", text: "Dolores Umbridge" },
          { id: "example-option-28", text: "Mad-Eye Moody" },
        ],
      },
      {
        id: "example-question-7",
        text: "What is the name of the dark wizard Harry must defeat?",
        options: [
          { id: "example-option-29", text: "Dobby" },
          { id: "example-option-30", text: "Hagrid" },
          { id: "example-option-31", text: "Lord Voldemort" },
          { id: "example-option-32", text: "Sirius Black" },
        ],
      },
      {
        id: "example-question-8",
        text: "What do wizards use to cast spells?",
        options: [
          { id: "example-option-33", text: "Wands" },
          { id: "example-option-34", text: "Swords" },
          { id: "example-option-35", text: "Brooms" },
          { id: "example-option-36", text: "Hats" },
          { id: "example-option-37", text: "Scrolls" },
        ],
      },
      {
        id: "example-question-9",
        text: "What is the name of Harry’s pet owl?",
        options: [
          { id: "example-option-38", text: "Crookshanks" },
          { id: "example-option-39", text: "Scabbers" },
          { id: "example-option-40", text: "Hedwig" },
          { id: "example-option-41", text: "Buckbeak" },
          { id: "example-option-42", text: "Fawkes" },
        ],
      },
      {
        id: "example-question-10",
        text: "What is the name of Harry’s two best friends?",
        options: [
          { id: "example-option-43", text: "Draco & Neville" },
          { id: "example-option-44", text: "Ron & Hermione" },
          { id: "example-option-45", text: "Fred & George" },
          { id: "example-option-46", text: "Luna & Ginny" },
          { id: "example-option-47", text: "Dean & Seamus" },
        ],
      },
    ],
    metadata: {
      createdAt: "2023-01-01T00:00:00.000Z",
    },
  },
  {
    id: "example-quiz-2",
    creatorId: "example-user-2",
    title: "The Ultimate Friends TV Show Trivia",
    category: "Entertainment",
    questions: [
      {
        id: "example-question-11",
        text: "Who plays Ross Geller in Friends?",
        options: [
          { id: "example-option-48", text: "David Schwimmer" },
          { id: "example-option-49", text: "Matthew Perry" },
          { id: "example-option-50", text: "Matt LeBlanc" },
          { id: "example-option-51", text: "James Michael Tyler" },
        ],
      },
      {
        id: "example-question-12",
        text: "What is the name of Central Perk's barista?",
        options: [
          { id: "example-option-52", text: "Gunther" },
          { id: "example-option-53", text: "Mike" },
          { id: "example-option-54", text: "Richard" },
          { id: "example-option-55", text: "Tag" },
          { id: "example-option-56", text: "Pete" },
        ],
      },
      {
        id: "example-question-13",
        text: "What is Joey's signature pickup line?",
        options: [
          { id: "example-option-57", text: "How you doin'?" },
          { id: "example-option-58", text: "Could I BE any more interested?" },
          { id: "example-option-59", text: "Welcome to the real world!" },
          { id: "example-option-60", text: "We were on a break!" },
        ],
      },
      {
        id: "example-question-14",
        text: "What does Rachel's father buy her when she tries to leave home?",
        options: [
          { id: "example-option-61", text: "A boat" },
          { id: "example-option-62", text: "A puppy" },
          { id: "example-option-63", text: "A Porsche" },
          { id: "example-option-64", text: "A diamond necklace" },
          { id: "example-option-65", text: "A plane ticket" },
        ],
      },
      {
        id: "example-question-15",
        text: "Which character says 'I'm not great at the advice. Can I interest you in a sarcastic comment?'",
        options: [
          { id: "example-option-66", text: "Chandler" },
          { id: "example-option-67", text: "Monica" },
          { id: "example-option-68", text: "Phoebe" },
          { id: "example-option-69", text: "Ross" },
        ],
      },
      {
        id: "example-question-16",
        text: "What is the name of Phoebe's most famous song?",
        options: [
          { id: "example-option-70", text: "Smelly Cat" },
          { id: "example-option-71", text: "Funky Duck" },
          { id: "example-option-72", text: "Grandma's Cookies" },
          { id: "example-option-73", text: "Central Perk Anthem" },
          { id: "example-option-74", text: "The Ballad of Ross & Rachel" },
        ],
      },
      {
        id: "example-question-17",
        text: "How many seasons of Friends were produced?",
        options: [
          { id: "example-option-75", text: "8" },
          { id: "example-option-76", text: "10" },
          { id: "example-option-77", text: "12" },
          { id: "example-option-78", text: "6" },
        ],
      },
    ],
    metadata: {
      createdAt: "2023-01-02T00:00:00.000Z",
    },
  },
  {
    id: "example-quiz-3",
    creatorId: "example-user-3",
    title: "International Cricket World Challenge",
    category: "Sports",
    questions: [
      {
        id: "example-question-18",
        text: "Which country won the first Cricket World Cup in 1975?",
        options: [
          { id: "example-option-79", text: "West Indies" },
          { id: "example-option-80", text: "Australia" },
          { id: "example-option-81", text: "England" },
          { id: "example-option-82", text: "India" },
        ],
      },
      {
        id: "example-question-19",
        text: "What is the highest individual score in Test cricket?",
        options: [
          { id: "example-option-83", text: "400*" },
          { id: "example-option-84", text: "375" },
          { id: "example-option-85", text: "380*" },
          { id: "example-option-86", text: "501*" },
          { id: "example-option-87", text: "329" },
        ],
      },
      {
        id: "example-question-20",
        text: "Which bowler has the best figures in an ODI match?",
        options: [
          { id: "example-option-88", text: "Glenn McGrath" },
          { id: "example-option-89", text: "Chaminda Vaas" },
          { id: "example-option-90", text: "Shahid Afridi" },
          { id: "example-option-91", text: "Lasith Malinga" },
          { id: "example-option-92", text: "Anil Kumble" },
        ],
      },
      {
        id: "example-question-21",
        text: "What is the nickname of the Australian cricket team?",
        options: [
          { id: "example-option-93", text: "Baggy Greens" },
          { id: "example-option-94", text: "Proteas" },
          { id: "example-option-95", text: "Black Caps" },
          { id: "example-option-96", text: "Lions" },
        ],
      },
      {
        id: "example-question-22",
        text: "Which country has won the most World Cups?",
        options: [
          { id: "example-option-97", text: "Australia" },
          { id: "example-option-98", text: "West Indies" },
          { id: "example-option-99", text: "India" },
          { id: "example-option-100", text: "England" },
          { id: "example-option-101", text: "Pakistan" },
        ],
      },
      {
        id: "example-question-23",
        text: "What is the maximum number of overs in a Test match day?",
        options: [
          { id: "example-option-102", text: "90" },
          { id: "example-option-103", text: "80" },
          { id: "example-option-104", text: "100" },
          { id: "example-option-105", text: "50" },
        ],
      },
      {
        id: "example-question-24",
        text: "Who holds the record for fastest Test century?",
        options: [
          { id: "example-option-106", text: "Brendon McCullum" },
          { id: "example-option-107", text: "Viv Richards" },
          { id: "example-option-108", text: "AB de Villiers" },
          { id: "example-option-109", text: "Misbah-ul-Haq" },
          { id: "example-option-110", text: "Adam Gilchrist" },
        ],
      },
    ],
    metadata: {
      createdAt: "2023-01-03T00:00:00.000Z",
    },
  },
  {
    id: "example-quiz-4",
    creatorId: "example-user-4",
    title: "Global Cuisine Knowledge Test",
    category: "Culture",
    questions: [
      {
        id: "example-question-25",
        text: "What is the primary ingredient in traditional hummus?",
        options: [
          { id: "example-option-111", text: "Chickpeas" },
          { id: "example-option-112", text: "Lentils" },
          { id: "example-option-113", text: "Eggplant" },
          { id: "example-option-114", text: "Yogurt" },
        ],
      },
      {
        id: "example-question-26",
        text: "Which country is known for inventing sushi?",
        options: [
          { id: "example-option-115", text: "Japan" },
          { id: "example-option-116", text: "China" },
          { id: "example-option-117", text: "Korea" },
          { id: "example-option-118", text: "Thailand" },
          { id: "example-option-119", text: "Vietnam" },
        ],
      },
      {
        id: "example-question-27",
        text: "What is the national dish of Spain?",
        options: [
          { id: "example-option-120", text: "Paella" },
          { id: "example-option-121", text: "Tapas" },
          { id: "example-option-122", text: "Gazpacho" },
          { id: "example-option-123", text: "Churros" },
        ],
      },
      {
        id: "example-question-28",
        text: "Which herb is predominant in pesto sauce?",
        options: [
          { id: "example-option-124", text: "Basil" },
          { id: "example-option-125", text: "Parsley" },
          { id: "example-option-126", text: "Cilantro" },
          { id: "example-option-127", text: "Oregano" },
          { id: "example-option-128", text: "Thyme" },
        ],
      },
      {
        id: "example-question-29",
        text: "What type of pastry is used for croissants?",
        options: [
          { id: "example-option-129", text: "Laminated" },
          { id: "example-option-130", text: "Shortcrust" },
          { id: "example-option-131", text: "Puff" },
          { id: "example-option-132", text: "Phyllo" },
        ],
      },
      {
        id: "example-question-30",
        text: "Which country produces authentic brie cheese?",
        options: [
          { id: "example-option-133", text: "France" },
          { id: "example-option-134", text: "Italy" },
          { id: "example-option-135", text: "Switzerland" },
          { id: "example-option-136", text: "Netherlands" },
          { id: "example-option-137", text: "Germany" },
        ],
      },
      {
        id: "example-question-31",
        text: "What is the main component of a traditional English breakfast?",
        options: [
          { id: "example-option-138", text: "Baked beans" },
          { id: "example-option-139", text: "Fried eggs" },
          { id: "example-option-140", text: "Sausages" },
          { id: "example-option-141", text: "All of the above" },
        ],
      },
      {
        id: "example-question-32",
        text: "Which grain is used to make traditional Italian risotto?",
        options: [
          { id: "example-option-142", text: "Arborio rice" },
          { id: "example-option-143", text: "Quinoa" },
          { id: "example-option-144", text: "Barley" },
          { id: "example-option-145", text: "Couscous" },
        ],
      },
      {
        id: "example-question-33",
        text: "What is kimchi traditionally made from?",
        options: [
          { id: "example-option-146", text: "Fermented cabbage" },
          { id: "example-option-147", text: "Pickled cucumbers" },
          { id: "example-option-148", text: "Salted radishes" },
          { id: "example-option-149", text: "Preserved plums" },
          { id: "example-option-150", text: "Dried seaweed" },
        ],
      },
    ],
    metadata: {
      createdAt: "2023-01-04T00:00:00.000Z",
    },
  },
];

export default quizzes;
