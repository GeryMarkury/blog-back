import { Post } from "../../models/index.js";
import { ctrlWrapper } from "../../decorators/index.js";

const add = async (req, res) => {
	const { _id: owner, firstName, lastName } = req.user;
	const { header, content } = req.body;

	const newPost = new Post({
		header,
		content,
		firstName,
		lastName,
		owner,
	});
	await newPost.save();

	const post = await Post.find();
	res.status(201).json(post);
};

export default ctrlWrapper(add);
