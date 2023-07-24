import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Roasters, { RoasterList } from './Roasters';

describe('Roasters', () => {
	it('shows no roasters', async () => {
		// Arrange / Given
		const fetchRoasters = async () => null;
		const roasters = render(<RoasterList getRoasters={fetchRoasters} />);

		// Act / When
		let roasterList;
		await waitFor(() => {
			roasterList = roasters.queryByTestId('roasters');
		});

		// Assert / Then
		expect(roasterList).to.be.empty;
	});

	it('shows text "Hello World"', async () => {
		const fetchRoasters = async () => ({ roasters: 'Hello World' });

		const { findByText } = render(<Roasters fetchRoasters={fetchRoasters} />);

		expect(await findByText('Hello World!')).to.exist;
	});
});
