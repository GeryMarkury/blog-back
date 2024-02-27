import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const postSchema = new Schema(
	{
		header: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{ timestamps: true },
);

postSchema.pre("findOneAndUpdate", handleUpdateValidate);

postSchema.post("save", handleSaveError);

postSchema.post("findOneAndUpdate", handleSaveError);

const Post = model("post", postSchema);

export default Post;
