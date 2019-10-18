import React from 'react';

import { Container, Content } from './contentContainer.style';

export function ContentContainer({ children }) {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
}
