import Joi from "joi";

const postAddSchema = Joi.object({
	header: Joi.string().required(),
	content: Joi.string().required(),
});

export default {
	postAddSchema,
};
