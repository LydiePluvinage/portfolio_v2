import React from 'react';

const RightNow = () => {
  return (
    <div className="flex flex-col items-center justify-around min-w-full min-h-full p-10 text-xl bg-white/30 backdrop-filter backdrop-blur-lg font-playfair rounded-3xl">
      <h3 className="self-start text-2xl font-roboto">Right now</h3>
      <p className="text-lg font-playfair">
        Since august 2021, i'm an instructor in Javascript / React / Node at Wild Code
        School.
        <br />
        My job is to mentor adults in retraining, teaching them code basis, reviewing
        their code, supervising their projects but most important, giving them tech
        passion and making sure they know and use good practices (because what's worse
        than full stack junior developers with bad habits, right ?)
      </p>
      <div className="text-lg font-playfair">
        <h4> What do i like in my actual job ?</h4>

        <ul className="list-disc">
          <li>
            It's a really human position.
            <span className="text-base italic">
              {' '}
              I get to see them grow and become more independant and confident about their
              skills
            </span>
          </li>
          <li>
            Every day is different.
            <span className="text-base italic">
              {' '}
              Depending on their problems, their objectives, the evolution of the training
            </span>
          </li>
          <li>
            I get to learn new things too.
            <span className="text-base italic">
              {' '}
              I'm discovering new techs every day, so i get to teach them too
            </span>
          </li>
          <li>
            This job is remote friendly.
            <span className="text-base italic"> And i love it</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightNow;
