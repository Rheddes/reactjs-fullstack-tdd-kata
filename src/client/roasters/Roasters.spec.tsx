import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Roasters, { RoasterList } from './Roasters';

describe('Roasters', () => {
  it('shows no roasters', async () => {
    const { container } = render(<RoasterList roasters={[]} />);
    expect(container).to.be.empty;
  });

  it('shows text the "Hello World" coffee roaster', async () => {
    const fetchRoasters = async () => ({
      roasters: [{ code: 'example-roaster', title: 'Hello World' }],
    });
    const { findByText } = render(<Roasters fetchRoasters={fetchRoasters} />);
    expect(await findByText('Hello World')).to.exist;
  });

  it('still shows the "Hello Coffee" roaster', async () => {
    const fetchRoasters = async () => ({
      roasters: [{ code: 'example-roaster', title: 'Hello Coffee' }],
    });
    const wrapper = render(<Roasters fetchRoasters={fetchRoasters} />);
    await waitFor(() => {
      expect(wrapper.container.children).to.have.length(1);
      expect(wrapper.container.innerHTML).to.equal('<span>Hello Coffee</span>');
    });
  });
});
