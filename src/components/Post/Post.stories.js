import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => (
  <Post
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    date="3/2/2021"
  />
);

export const Default = Template.bind({});
