import { configure, addDecorator } from '@storybook/react';

const loadStories = () => {

    const components = require.context( '../components', true, /\.stories\.js$/ );

    components.keys().forEach( ( filename ) => components( filename ) );

};

configure( loadStories, module );