import React from "react";
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:909-730-7776">909-730-7776</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:jared.fe.brown@gmail.com">
						Jared.fe.brown@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Impacting the world in a postive way</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/jaredbrown1">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/jared-brown1/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://twitter.com/JaredCodes">
						<AiFillTwitterCircle size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
