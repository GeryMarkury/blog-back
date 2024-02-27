import { Post } from "../../models/index.js";
import { ctrlWrapper } from "../../decorators/index.js";

const add = async (req, res) => {
	const { _id: owner, firstName, lastName } = req.user;

	const result = await Post.create({ ...req.body, owner, firstName, lastName });
	res.status(201).json(result);
};

export default ctrlWrapper(add);
