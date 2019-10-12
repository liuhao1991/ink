import React from 'react';
import Navigation from '../common/Navigation';

export default function withNav(Component) {
  return (
    <>
      <Navigation />
      <Component >
    </>
  ) 
}
