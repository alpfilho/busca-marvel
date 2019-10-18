import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonContainer } from './button.style';

export const Button = ({ children, type, to }) => {
	if (type === 'link') {
		return (
			<ButtonContainer as={Link} to={to}>
				{children}
			</ButtonContainer>
		);
	}
	return <ButtonContainer>{children}</ButtonContainer>;
};
