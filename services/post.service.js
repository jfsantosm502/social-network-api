const db = require('_helpers/db');
const Post = db.Post;
const User = db.User;

module.exports = {
    create
};


async function create(postParam) {
    //validate if the user exists
    const user = await User.findById(postParam._userId).select('-hash');
    if (!user) {
        throw 'User does not exists';
    }

    const post = new Post(postParam);
    post._userId = user.id;
    //save post
    await post.save();

}