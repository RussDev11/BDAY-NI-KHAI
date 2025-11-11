export const playHappyBirthday = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

  const notes: { [key: string]: number } = {
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25,
  };

  const melody = [
    { note: 'G4', duration: 0.3 },
    { note: 'G4', duration: 0.2 },
    { note: 'A4', duration: 0.5 },
    { note: 'G4', duration: 0.5 },
    { note: 'C5', duration: 0.5 },
    { note: 'B4', duration: 1.0 },

    { note: 'G4', duration: 0.3 },
    { note: 'G4', duration: 0.2 },
    { note: 'A4', duration: 0.5 },
    { note: 'G4', duration: 0.5 },
    { note: 'D4', duration: 0.5 },
    { note: 'C5', duration: 1.0 },

    { note: 'G4', duration: 0.3 },
    { note: 'G4', duration: 0.2 },
    { note: 'G4', duration: 0.5 },
    { note: 'E4', duration: 0.5 },
    { note: 'C5', duration: 0.5 },
    { note: 'B4', duration: 0.5 },
    { note: 'A4', duration: 1.0 },

    { note: 'F4', duration: 0.3 },
    { note: 'F4', duration: 0.2 },
    { note: 'E4', duration: 0.5 },
    { note: 'C5', duration: 0.5 },
    { note: 'D4', duration: 0.5 },
    { note: 'C5', duration: 1.0 },
  ];

  let currentTime = audioContext.currentTime;

  melody.forEach(({ note, duration }) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = notes[note];
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + duration);

    oscillator.start(currentTime);
    oscillator.stop(currentTime + duration);

    currentTime += duration;
  });
};
