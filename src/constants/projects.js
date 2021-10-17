import personalPortfolio from '../images/personalportfolio.png';
import unity from '../images/Unity.png';
import dvd from '../images/Arduino.png';
export const projects = [
    {
      title: 'Personal Portfolio',
      bulletOne: '  Utilized React Scroll, React Router, React PDF, and other libraries to enhance the overall design of the website to achieve superior consistency across multiple platforms',
      bulletTwo: '  Reused various UI components to ensure codebase is simpler and development is faster',
      bulletThree: '  Conducted A/B testing to identify bugs & UI improvements',
      image: personalPortfolio,
      tags: ['React', 'Javascript', 'NPM'],
      visit: 'https://github.com/amalho26/portfolio.git',
      id: 0,
    },
    {
      title: 'Unity Game',
      bulletOne: '  Created a list of design constraints & objectives with team and designed prototype to meet project requirements',
      bulletTwo: '  Created various functions for simulation components, movement systems and physX integration tasks',
      bulletThree: '  Used Unity Animator to design and implement custom animations for various character movements',
      image: unity,
      tags: ['C#', 'Unity Engine', 'PhysX'],
      visit: 'https://github.com/amalho26/unity_game.git',
      id: 1,
    },
    {
      title: 'TV+DVD Start & Stop',
      bulletOne: '  Ranked 1st in class for most strategic approach by testing extensively in lab demonstrations & improving design to be more efficient using counter strategies',
      bulletTwo: '  Programmed a remote buttons using Arduino (IDE) and various proprietary systems/tools to simplify controls',
      bulletThree: '  Met with clients to help make the design more efficient by taking personal client requirements into consideration',
      image: dvd,
      tags: ['Arduino', 'C', 'Quartus'],
      id: 2,
    },
  ];
