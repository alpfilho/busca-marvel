import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

export const ScrollRestoration = ({ scrollBars }) => {
	const location = useLocation();

	useEffect(() => {
		if (scrollBars.current) {
			scrollBars.current.scrollToTop();
		}
	}, [scrollBars, location.key]);

	return null;
};
