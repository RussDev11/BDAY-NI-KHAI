import { useState } from 'react';
import BirthdayCake from './components/BirthdayCake';
import LetterModal from './components/LetterModal';
import FloatingHearts from './components/FloatingHearts';
import { playHappyBirthday } from './utils/audioPlayer';

function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleCandlesBlown = () => {
    playHappyBirthday();
    setTimeout(() => {
      setShowLetter(true);
    }, 2000);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
    setShowHearts(true);
  };

  return (
    <>
      <BirthdayCake onCandlesBlown={handleCandlesBlown} />
      {showLetter && <LetterModal onClose={handleCloseLetter} />}
      {showHearts && <FloatingHearts />}
    </>
  );
}

export default App;
