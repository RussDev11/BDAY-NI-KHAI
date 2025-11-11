import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const heartElements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setHearts(heartElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            className="text-pink-400 drop-shadow-lg"
            fill="currentColor"
            size={20 + Math.random() * 20}
          />
        </div>
      ))}

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up 5s ease-in infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
