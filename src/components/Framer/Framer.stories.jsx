import React from "react";
import {Framer} from "./Framer";

export default {
	title: "Example/Framer",
	component: Framer,
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

const Template = (args) => <Framer {...args} />;

export const AnimatedDiv = Template.bind({});
AnimatedDiv.args = {};
