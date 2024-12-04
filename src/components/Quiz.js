import React, { useState} from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const questions = [
    {
      id: 'question-0',
      question: 'What is 0 * 4?',
      options: ['1', '20', '0', 'None Above'],
      correctAnswer: '0',
    },
    {
      id: 'question-1',
      question: 'How many sides does a square have?',
      options: ['7', '12', '4', 'All Above'],
      correctAnswer: '4',
    },
    {
    id:'question-2',
    question:'Select Kirchhoff Law in the following',
    options:[' It is conservation of linear momentum and kinetic energy',' It is conservation of linear momentum of kinetic energy',
      'The maximum energy of photoelectron do not depend on the intensity of incident light but relies on the frequency of light',
      'The sum of the current entering any junction in circuit equal to the sum of the current leaving that junction'],
      correctAnswer: 'The sum of the current entering any junction in circuit equal to the sum of the current leaving that junction',
    },
    {
      id:'question-3',
      question:'we know that how to calculate derivative of function.What is the derivative of F(x) = 3x -10?',
      options:['8','0','3','None of Above'],
      correctAnswer:'3',
    },
    {
      id:'question-4',
      question:'Simple Harmonic Motion(SHM) is......',
      options:[' Is type of motion where restoring force is directly proportional to the displacement and acts in the direction opposition to that displacement',
      'When an object capable of oscillating has a force applied to it with a frequency equal to its natural frequency to oscillation',
      'Line joining the sum and planet sweep out equal areas in equal time','Atom theory is a model developed to explain the properties and behaviour of atoms'],
      correctAnswer:'Is type of motion where restoring force is directly proportional to the displacement and acts in the direction opposition to that displacement'
    },
    {
      id:'question-5',
      question:'Rectification is.......',
      options:[' Is the maximum voltage diode that can withstand in reverse biased without breakdown',
        ' Is the process of converting alternating current(AC) to direct current(DC)',
        'Photocurrent is directly proportional to intensity of light and it independent of frequency',
        ' The angular momentum P electrons are whole number multiple of h/2pi'],
        correctAnswer:'Is the process of converting alternating current(AC) to direct current(DC)'
    },
    {
      id:'question-6',
      question:':A bag contains 5 red balls, 3 blue balls, and 2 green balls. If a ball is drawn at random from the bag, what is the probability that it is not blue?',
      options:['1/2','2/3','5/8','None of Above'],
      correctAnswer:'None of Above'
    },
    {
      id:'question-7',
      question:':What is the value of y in the equation 2y + 5 = 13?',
      options:['3','6','5','4'],
      correctAnswer:'4'
    },
    {
      id:'question-8',
      question:'What is the process by which water moves through a plant, from the roots to the leaves, and is then released into the air as water vapor?',
      options:['Respiration','Photosynthesis','Transpiration','Evaporation'],
      correctAnswer:'Transpiration'
    },
    {
      id:'question-9',
      question:'What is the process by which plants convert sunlight into energy?',
      options:['Respiration','Photosynthesis','Decomposition','Fermentation'],
      correctAnswer:'Photosynthesis'
    },
    {
      id:'question-10',
      question:'What is the scientific term for the "building blocks of life"?',
      options:['Cells',' Molecules','Tissues','Organisms'],
      correctAnswer:'Cells'
    },
    {
      id:'question-11',
      question:'What is the largest planet in our solar system?',
      options:['Earth','Uranus','Saturn','Jupiter'],
      correctAnswer:'Jupiter'
    },
    {
      id:'question-12',
      question:'What is the primary gas found in the Earth of atmosphere?',
      options:['Oxygen','Nitrogen','Carbon Dioxide','Hydrogen'],
      correctAnswer:'Nitrogen'
    },
    {
      id:'question-13',
      question:'Which correct formula to calculate Delta in Mathematics',
      options:['Delta = (b * b )- (4 * a * c)','Delta = s * c /4','Delta = Mass / Volume','None of Above'],
      correctAnswer:'Delta = (b * b )- (4 * a * c)'
    },
    {
      id:'question-14',
      question:'Who is the father of computer',
      options:['Charles Babbage',' Lionel Messi',' Paul Kagame',' Issac Newton'],
      correctAnswer:'Charles Babbage'
    },
    {
      id:'question-15',
      question:'Which the general formular to calculate power in terms of current?',
      options:['Volume/density','I*V','V/R','Mass * Accelation'],
      correctAnswer:'I*V'
    },
    {
      id:'question-16',
      question:'Select Ohm law in the following and we know that Law of Ohm can be expressed as:',
      options:['All of Above','None of Above','F=Mass * Acceleration','I=V/R'],
      correctAnswer:'I=V/R'
    },
    {
      id:'question-17',
      question:'Select special meaning of word "Insulator"',
      options:['is a material that does not conduct electrical current under normal conditions',' is a material that easily conducts electrical current',
        'is a process of introducing impurities into an extremely pure semiconductor','All of Above'],
        correctAnswer:'is a material that does not conduct electrical current under normal conditions'
    },
    {
      id:'question-18',
      question:'Which the planet that is so hot more than other?',
      options:['Earth','Mars','Jupiter','Mercury'],
      correctAnswer:'Mercury'
    },
    {
      id:'question-19',
      question:'What is the acceleration due to gravity on Earth?',
      options:['8.8 m/s²','9.8 m/s²','10.8 m/s²','7.8 m/s²'],
      correctAnswer:'9.8 m/s²'
    }
  ];

  const handleAnswerChange = (questionIndex,selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));

  };

  const nextQuestion = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };
  
  const submitQuiz = () => {
    let totalScore = 0;
    questions.forEach((q,index) =>{
      if(selectedAnswers[index] === q.correctAnswer){
        totalScore = totalScore + 5;
      }
    }); 
    setScore(totalScore);
  };

  return (
    <div id="mathematics"
      className="bg-white py-10 w-[90%] shadow-md md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto my-10 lg:ml-[12%] lg:mt-[5%] xl:mt-[5%] xl:ml-[12%]  
      rounded-xl border border-gray-400 border-2 dark:bg-gray-900 dark:border-gray-800"
    >
      <div className="ml-[12%]">
        <h1 className="text-4xl text-orange-600 mt-10">Mathematics & Science</h1>

        {score === null ? (
          <>
            {/* Render only the current question */}
            {questions.map((q, index) => (
              <div
                key={q.id}
                id={q.id}
                className={currentQuestion === index ? "block" : "hidden"}
              >
                <p className="text-xl mt-5 text-gray-600">
                  Question {index + 1}: {q.question}
                </p>
                {q.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className="flex items-center text-gray-600 xl:pr-5 lg:pr-5 md:pr-10 md:pt-5 lg:pt-5 pr-[10%] py-2"
                  >
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                      checked={selectedAnswers[index] === option}
                      className="mr-4"
                    />{" "}
                    {option}
                  </label>
                ))}
              </div>
            ))}

            {/* Navigation buttons */}
            <div className="flex space-x-4 justify-start mt-5">
              <button
                onClick={() => nextQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
                className={`bg-gray-600 border border-black w-[30%] lg:w-[18%] xl:w-[12%] h-[2.5rem] rounded text-gray-400 ${
                  currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={submitQuiz}
                  className="bg-green-600 border border-white w-[30%] lg:w-[18%] xl:w-[12%] h-[2.5rem] rounded text-white"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => nextQuestion(currentQuestion + 1)}
                  className={`bg-gray-500 border border-black w-[30%] xl:w-[12%] lg:w-[18%] h-[2.5rem] rounded text-gray-400`}
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-3xl text-green-600 xl:mr-[72%]">Quiz Completed!</h2>
            <p className="text-xl text-green-300 mt-5 xl:mr-[76%]">Your Score: {score} / {questions.length * 5}</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Quiz;