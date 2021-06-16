import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello there <br />I am Jared Brown
			</SectionTitle>
			<SectionText>
				I am a Full Stack Web Developer with a passion for coding, problem
				solving, and overall have a strong ambition to impact the world in a
				postive way through tech.
			</SectionText>
			<Button
				onClick={() => (window.location = "mailto:Jared.fe.brown@gmail.com")}
			>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
