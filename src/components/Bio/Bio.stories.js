import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
  <Bio 
    headshot="https://avatars.githubusercontent.com/u/34556282?s=400&u=143676d757968aeb5e5135326963bb0d8265bec6&v=4"
    name="Ali Koçman"
    tagline="Helping others to learn by doing!"
    role="Developer Advocate @ Applitools"
  />
);

export const Default = Template.bind({});
