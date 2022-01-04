import React from 'react';

type AboutMeProps = {
  title: string;
  content: string;
};

const AboutMe = ({ title, content }: AboutMeProps) => {
  return (
    <div className="w-full h-full bg-white opacity-50 rounded-3xl">
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  );
};

export default AboutMe;
