import React from 'react';
import { storiesOf } from '@storybook/react';

import Nav from './nav';

storiesOf( 'Nav', module )
.add( 'Default', () => (
    <Nav />
) );