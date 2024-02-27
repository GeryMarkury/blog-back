import { Post } from "../../models/index.js";
import { ctrlWrapper } from "../../decorators/index.js";

const getAll = async (req, res) => {
	const { _id: owner } = req.user;
	const posts = await Post.find({ owner });

	res.json(posts);
};

export default ctrlWrapper(getAll);
