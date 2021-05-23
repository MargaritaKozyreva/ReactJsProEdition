import React from 'react';

interface EmptyPageProps {
  [key: string]: any;
  children?: React.ReactNode;
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }): JSX.Element => {
  return (
    <div>
      <div>This is {title}</div>
    </div>
  );
};

export default EmptyPage;
