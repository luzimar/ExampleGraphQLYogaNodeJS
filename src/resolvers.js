import User from "./Models/User";

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id)
  },
  Mutation: {
    createUser: async (_, user) => {
      const userCreated = await User.create(user);
      return userCreated;
    }
  }
};
