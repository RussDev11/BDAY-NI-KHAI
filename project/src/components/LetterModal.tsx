import { useState } from 'react';
import { X, Heart } from 'lucide-react';

interface LetterModalProps {
  onClose: () => void;
}

const LetterModal = ({ onClose }: LetterModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fadeIn">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative ${isClosing ? 'animate-fadeOut' : 'animate-scaleIn'}`}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-300 shadow-lg bg-gradient-to-br from-pink-200 to-pink-100">
              <div className="w-full h-full flex items-center justify-center">
                <Heart className="w-24 h-24 text-pink-400" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <Heart className="w-12 h-12 text-pink-500 mx-auto" fill="currentColor" />

            <h2 className="text-4xl font-bold text-pink-600">
              Happy 21st Birthday!
            </h2>

            <div className="text-gray-700 text-lg leading-relaxed space-y-4 text-left">
              <p className="font-semibold text-xl text-pink-500">Dear Birthday Girl,</p>

              <p>
                Happy 21st Birthday Kikay🥳 .. Hehe ang tanda muna chzz.. Hindi ako maalam magmessage huhu.. eto lang masasabi ko. Thank you dahil nakilala kita.. Nagpapasalamat me kay God dahil dumating ka sa life ko.. Sana hindi ka magbago. Maging masaya palagi. Enjoy mo lang ang buhay yan ang lagi ko sinasabe sayo. 
              </p>

              <p>
                May this year bring you endless happiness, exciting adventures, and all the dreams your heart desires. You deserve nothing but the best!
              </p>

                <p>
                Twenty-one years of spreading joy, love, and laughter to everyone around you. You've grown into an amazing person, and I'm so grateful to celebrate this special moment with you. (sabi ni chatgpt hahaha chz)
              </p>

              <p>
                Basta, ang birthday wish ko ay maging masaya ka palagi. Maging mabait at habaan ang pasensya. Spread love, not hate. Owss haha, tama ba? Chz! Always love yourself and stay centered in God, everything else will fall into place.
              </p>

              <p className="font-semibold text-pink-500 text-right">
                Love you always💕
                Asel
              </p>
            </div>

            <div className="flex justify-center gap-2 pt-6">
              <Heart className="w-6 h-6 text-pink-500 animate-pulse" fill="currentColor" />
              <Heart className="w-6 h-6 text-pink-400 animate-pulse delay-100" fill="currentColor" />
              <Heart className="w-6 h-6 text-pink-500 animate-pulse delay-200" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default LetterModal;
