import React from 'react'; // Import SignIn component

const Hero = () => {
 
  return (
    <section className="bg-white p-10 sm:p-20 md:p-32 lg:p-40 text-left pt-20 h-auto dark:bg-gray-900">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 ml-2 md:ml-4 lg:ml-10 pt-20">
        Welcome to QuizMaster!
      </h1>
      <p className="mt-2 md:mt-4 text-base md:text-lg lg:text-xl text-gray-600 ml-2 md:ml-4 lg:ml-10">
  Are you ready to challenge yourself and see how much you really know? 
  Dive into a world of exciting and thought-provoking quizzes designed to test your memory, sharpness, and critical thinking. Whether you're looking to test your general knowledge, dive deep into specific topics,
   or simply have fun, we have quizzes for every interest and skill level!
  <br />
  <br />
  Our quizzes aren't just about getting the right answers — they're about engaging your mind in new ways and learning something new along the way. 
  <br />
  <br />
  Join us and take the challenge today — it's time to put your knowledge to the test and see how you compare with others!
</p>
      <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 ml-2 md:ml-4 lg:ml-10 mt-6 md:mt-8 lg:mt-10">
        Get Started
      </button>
{/* Conditionally render the SignIn component */}

    </section>
  );
};

export default Hero;