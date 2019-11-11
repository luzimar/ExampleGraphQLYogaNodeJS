const users = [
  {
    id: "1",
    name: "teste",
    email: "teste@teste"
  },
  {
    id: "2",
    name: "teste2",
    email: "teste@teste2"
  }
];
export default {
  Query: {
    users: () => users,
    user: (_, { id }) => users.filter(user => user.id === id)[0]
  },
  Mutation: {
    createUser: (_, user) => {
      user.id = String(Math.random());
      users.push(user);
      return user;
    }
  }
};
