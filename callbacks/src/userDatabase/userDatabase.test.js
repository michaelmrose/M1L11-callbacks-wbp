const UserDatabase = require("./userDatabase");

beforeEach(() => {
  UserDatabase.users = [];
});

test("loadFromFile should load all the users from the json file", () => {
  UserDatabase.loadFromFile();
  expect(UserDatabase.users).toEqual(usersFromFile);
});

test("addUser should add a new user into the database", () => {
  UserDatabase.addUser("John Doe", 1234, "+1 (111) 111-1111");
  expect(UserDatabase.users).toEqual([
    {
      id: 1234,
      name: "John Doe",
      phone: "+1 (111) 111-1111",
      hasCoupon: false,
      isEnrolledInRewards: false,
    },
  ]);
});

const usersFromFile = [
  {
    id: "63d73c8e164fdc315d046840",
    name: "Corina Wiley",
    phone: "+1 (958) 412-3091",
    hasCoupon: false,
    isEnrolledInRewards: false,
  },
  {
    id: "63d73c8eb9b3575ec24d3ae8",
    name: "Magdalena Weeks",
    phone: "+1 (873) 558-2239",
    hasCoupon: false,
    isEnrolledInRewards: false,
  },
  {
    id: "63d73c8e19275871d8602093",
    name: "Victoria Rodriguez",
    phone: "",
    hasCoupon: false,
    isEnrolledInRewards: true,
  },
  {
    id: "63d73c8eccd6472ffd2e6c5a",
    name: "Pratt Stokes",
    phone: "+1 (962) 432-3452",
    hasCoupon: false,
    isEnrolledInRewards: false,
  },
  {
    id: "63d73c8ef6870e8821becbe0",
    name: "Malinda Shields",
    phone: "+1 (856) 570-3529",
    hasCoupon: false,
    isEnrolledInRewards: false,
  },
  {
    id: "63d73c8ed75d9ca2eacd0a60",
    name: "Alexander Mullins",
    phone: "+1 (994) 544-3221",
    hasCoupon: false,
    isEnrolledInRewards: true,
  },
  {
    id: "63d73c8e683ab23cd90ee976",
    name: "Key Golden",
    phone: "+1 (968) 523-3272",
    hasCoupon: false,
    isEnrolledInRewards: true,
  },
  {
    id: "63d73c8e2a5c5127d2bbf1f0",
    name: "Horton Mcdonald",
    phone: "+1 (993) 554-3796",
    hasCoupon: false,
    isEnrolledInRewards: true,
  },
  {
    id: "63d73c8e12261c014c7cd6e5",
    name: "Bond Slater",
    phone: "+1 (995) 522-2127",
    hasCoupon: false,
    isEnrolledInRewards: true,
  },
];
