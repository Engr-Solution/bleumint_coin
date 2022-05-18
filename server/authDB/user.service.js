const addSocialUser = (User, authStrategy) => ({
  id,
  email,
  firstName,
  lastName,
  profilePhoto,
}) => {
  const user = new User({
    id,
    email,
    firstName,
    lastName,
    profilePhoto,
    source: authStrategy,
  });
  return user.save();
};

const getUsers = User => () => {
  return User.find({});
};

const getUserByEmail = User => async ({ email }) => {
  return await User.findOne({ email });
};

module.exports = (User, authStrategy) => {
  return {
    //   addSocialUser: addSocialUser(User, authStrategy),
    addGoogleUser: addSocialUser(User, authStrategy),
    addFacebookUser: addSocialUser(User, authStrategy),
    addTwitterUser: addSocialUser(User, authStrategy),
    getUsers: getUsers(User),
    getUserByEmail: getUserByEmail(User),
  };
};
