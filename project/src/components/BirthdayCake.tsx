import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';

interface BirthdayCakeProps {
  onCandlesBlown: () => void;
}

const BirthdayCake = ({ onCandlesBlown }: BirthdayCakeProps) => {
  const [candlesLit, setCandlesLit] = useState<boolean[]>(Array(1).fill(true));
  const [isBlowing, setIsBlowing] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);

  useEffect(() => {
    if (showInstruction) {
      const timer = setTimeout(() => setShowInstruction(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showInstruction]);

  const handleBlow = () => {
    if (isBlowing) return;

    setIsBlowing(true);

    const blowOutCandles = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 1) {
          setCandlesLit(prev => {
            const newState = [...prev];
            newState[count] = false;
            return newState;
          });
          count++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onCandlesBlown();
          }, 500);
        }
      }, 100);
    };

    blowOutCandles();
  };

  const allCandlesOut = candlesLit.every(lit => !lit);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-pink-600 mb-4 animate-pulse">
          Happy 21st Birthday!
        </h1>
        {showInstruction && !allCandlesOut && (
          <p className="text-2xl text-pink-500 animate-bounce">
            Click the cake to blow out the candles!
          </p>
        )}
      </div>

      <div
        className={`relative cursor-pointer transition-transform hover:scale-105 ${isBlowing ? 'animate-shake' : ''}`}
        onClick={handleBlow}
      >
        <div className="relative">
          <svg width="300" height="250" viewBox="0 0 300 250" className="drop-shadow-2xl relative z-10">
            <ellipse cx="150" cy="220" rx="140" ry="20" fill="#FFB6D9" opacity="0.3" />

            <rect x="30" y="120" width="240" height="100" rx="10" fill="#FF69B4" />
            <rect x="30" y="120" width="240" height="15" rx="10" fill="#FF85C1" />

            <rect x="50" y="80" width="200" height="50" rx="8" fill="#FFB6D9" />
            <rect x="50" y="80" width="200" height="10" rx="8" fill="#FFC9E3" />

            <rect x="70" y="50" width="160" height="40" rx="6" fill="#FF69B4" />
            <rect x="70" y="50" width="160" height="8" rx="6" fill="#FF85C1" />

            <circle cx="80" cy="150" r="8" fill="#FFE5F0" />
            <circle cx="120" cy="160" r="8" fill="#FFE5F0" />
            <circle cx="160" cy="155" r="8" fill="#FFE5F0" />
            <circle cx="200" cy="165" r="8" fill="#FFE5F0" />
            <circle cx="240" cy="150" r="8" fill="#FFE5F0" />

            <path d="M 60 100 Q 50 105 60 110" stroke="#FF69B4" strokeWidth="3" fill="none" />
            <path d="M 100 95 Q 90 100 100 105" stroke="#FF69B4" strokeWidth="3" fill="none" />
            <path d="M 140 92 Q 130 97 140 102" stroke="#FF69B4" strokeWidth="3" fill="none" />
            <path d="M 180 95 Q 170 100 180 105" stroke="#FF69B4" strokeWidth="3" fill="none" />
            <path d="M 220 100 Q 210 105 220 110" stroke="#FF69B4" strokeWidth="3" fill="none" />
          </svg>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
            {candlesLit.map((lit, index) => (
              <div key={index} className="flex flex-col items-center pt-6">
                <div className={`transition-opacity duration-300 ${lit ? 'opacity-100' : 'opacity-0'}`}>
                  <Flame className="w-6 h-6 text-orange-500 animate-flicker" />
                </div>
                <div className="w-2 h-16 bg-amber-100 border border-amber-200 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {allCandlesOut && (
        <div className="mt-8 text-2xl text-pink-600 font-semibold animate-bounce">
          Make a wish! 🎉
        </div>
      )}

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-2px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-flicker {
          animation: flicker 0.3s infinite;
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </div>
  );
};

export default BirthdayCake;
