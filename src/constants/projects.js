import personalPortfolioModal from '../images/personalportfolioModal.png';
import personalPortfolio from '../images/personalportfolio.png';
import unityModal from '../images/UnityModal.png'
import unity from '../images/Unity.png';
import dvdModal from '../images/ArduinoModal.png'
import dvd from '../images/Arduino.png';
import police from '../images/police.png';
import policeModal from '../images/policeModal.png';
import connect4 from '../images/connect-four.png';
import connect4Modal from '../images/connect-fourModal.png';
import chat from '../images/chatbox.png';
import chatModal from '../images/chatboxModal.png';

export const projects = [
    {
      title: 'Police Database Management System',
      bulletOne: '  Within a group of 5, created an ER diagram for a chosen industry: Police Management System',
      bulletTwo: '  Transformed ER diagram to a relational schema, optimizing to the BCNF level',
      bulletThree: '  Designed a web interface using Node.JS showcasing various complex SQL functionalities including: triggers, transactions, views and procedures',
      imageModal: policeModal,
      image: police,
      tags: ['MySQL', 'Node.JS', 'React', 'Express', 'NPM'],
      visit: 'https://github.com/amalho26/3309.git',
      id: 0,
    },
    {
      title: 'Personal Portfolio',
      bulletOne: '  Utilized React Scroll, React Router, React PDF, and other libraries to enhance the overall design of the website to achieve superior consistency across multiple platforms',
      bulletTwo: '  Reused various UI components to ensure codebase is simpler and development is faster',
      bulletThree: '  Conducted A/B testing to identify bugs & UI improvements',
      imageModal: personalPortfolioModal,
      image: personalPortfolio,
      tags: ['React', 'Javascript', 'NPM', 'Netlify'],
      visit: 'https://github.com/amalho26/portfolio.git',
      id: 1,
    },
    {
      title: 'Unity Game',
      bulletOne: '  Created a list of design constraints & objectives with team and designed prototype to meet project requirements',
      bulletTwo: '  Created various functions for simulation components, movement systems and physX integration tasks',
      bulletThree: '  Used Unity Animator to design and implement custom animations for various character movements',
      imageModal: unityModal,
      image: unity,
      tags: ['C#', 'Unity Engine', 'PhysX'],
      visit: 'https://github.com/amalho26/unity_game.git',
      id: 2,
    },
    {
      title: 'Multi-User Multi-Transaction Chat-Box',
      bulletOne: '  Created a chat-box applying threads, thread synchronization and parallel processing within a UNIX/LINUX environment',
      bulletTwo: '  Hosted Server on AWS; client can access chat-box from any device',
      bulletThree: null,
      imageModal: chatModal,
      image: chat,
      tags: ['Java', 'AWS'],
      visit: 'https://github.com/amalho26/SE3313Project.git',
      id: 3,
    },
    {
      title: 'TV+DVD Start & Stop',
      bulletOne: '  Ranked 1st in class for most strategic approach by testing extensively in lab demonstrations & improving design to be more efficient using counter strategies',
      bulletTwo: '  Programmed a remote button using Arduino (IDE) and various proprietary systems/tools to simplify controls',
      bulletThree: '  Met with clients to help make the design more efficient by taking personal client requirements into consideration',
      imageModal: dvdModal,
      image: dvd,
      tags: ['Arduino', 'C', 'Quartus'],
      id: 4,
    },
    {
      title: 'Connect-Four',
      bulletOne: '  Designed and created a simple 2-person connect-four game using React',
      bulletTwo: '  Connected GitHub with Google Web Services to host game using NginX',
      bulletThree: null,
      imageModal: connect4Modal,
      image: connect4,
      tags: ['Javascript', 'React', 'NginX', 'Google Web Services'],
      visit: 'https://github.com/amalho26/connect-four.git',
      id: 5,
    },
  ];
