import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Roasters, { RoasterList } from './Roasters';

describe('Roasters', () => {
	it('shows no roasters', async () => {
		const { container } = render(<RoasterList roasters={[]} />);

		expect(container).to.be.empty;
	});

	it('shows text "Hello World"', async () => {
		const fetchRoasters = async () => ({ roasters: [{ title: 'Hello World' }] });

		const { findByText } = render(<Roasters fetchRoasters={fetchRoasters} />);

		expect(await findByText('Hello World')).to.exist;
	});
});
