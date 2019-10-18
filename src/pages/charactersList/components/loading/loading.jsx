import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingContainer } from './loading.style';

export const Loading = ({ isLoading }) => {
	return (
		<AnimatePresence>
			{true ? (
				<LoadingContainer
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>

					<span>Carregando</span>
				</LoadingContainer>
			) : null}
		</AnimatePresence>
	);
};
