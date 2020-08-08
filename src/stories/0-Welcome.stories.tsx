/*
 * Copyright (c) 2020. Aaron Osher.
 * Licensed under an MIT License
 */
import React from 'react';
import { Welcome } from '@storybook/react/demo';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
