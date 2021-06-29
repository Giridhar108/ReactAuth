import React from 'react';

import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;


const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isAuth: true,
};