import React from 'react';
import Header from '../../components/Header';

interface EmptyPageProps {
  [key: string]: any;
  children?: React.ReactNode;
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }): JSX.Element => {
  return (
    <div>
      <Header />
      <div>This is {title}</div>
    </div>
  );
};

export default EmptyPage;
