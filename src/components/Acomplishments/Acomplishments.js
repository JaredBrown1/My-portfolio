import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 122, text: "Github Repositories" },
	{ number: `540+`, text: "Git Commits" },
	{ number: 36, text: "Twitter Followers" },
	{ number: `300+`, text: "Linkedin Connections" },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
