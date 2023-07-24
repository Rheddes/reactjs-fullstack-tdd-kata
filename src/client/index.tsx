import React from 'react';
import { render } from 'react-dom';
import Roasters from './roasters/Roasters';
import fetchRoasters from './roasters/RoastersApi';

render(<Roasters fetchRoasters={fetchRoasters} />, document.getElementById('container'));
