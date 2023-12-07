import React from 'react';
import '../styles/MyComponent.css';

interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default MyComponent;
