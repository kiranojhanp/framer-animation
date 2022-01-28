import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Framer = () => {
  return (
		<div className="framer-container">
			<motion.dev
				animate={{ rotate: 360 }}
				transition={{ duration: 2 }}
				className="animated-box"
			>
				123
			</motion.dev>
		</div>
	);
};


