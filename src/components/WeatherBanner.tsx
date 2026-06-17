import { useState } from 'react';
import { AlertTriangle, X, CloudLightning, Wind, Waves } from 'lucide-react';

interface WeatherBannerProps {
  isVisible?: boolean;
  message?: string;
  weatherType?: 'thunderstorm' | 'strong-wind' | 'heavy-rain' | 'fog';
}

export default function WeatherBanner({
  isVisible = true,
  message = '受雷雨大风天气影响，今日游船码头全线停航，请合理安排行程，注意安全。',
  weatherType = 'thunderstorm',
}: WeatherBannerProps) {
  const [isOpen, setIsOpen] = useState(isVisible);
  const [isDismissing, setIsDismissing] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsDismissing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsDismissing(false);
    }, 300);
  };

  const getWeatherIcon = () => {
    switch (weatherType) {
      case 'thunderstorm':
        return <CloudLightning className="w-6 h-6" />;
      case 'strong-wind':
        return <Wind className="w-6 h-6" />;
      case 'heavy-rain':
        return <Waves className="w-6 h-6" />;
      case 'fog':
        return <Waves className="w-6 h-6" />;
      default:
        return <AlertTriangle className="w-6 h-6" />;
    }
  };

  const getWeatherLabel = () => {
    switch (weatherType) {
      case 'thunderstorm':
        return '雷电天气';
      case 'strong-wind':
        return '大风天气';
      case 'heavy-rain':
        return '暴雨天气';
      case 'fog':
        return '大雾天气';
      default:
        return '恶劣天气';
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDismissing ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="relative overflow-hidden bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 text-white shadow-lg">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                style={{
                  left: `${i * 12 + 5}%`,
                  top: `${Math.random() * 60 + 20}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 animate-pulse">
              {getWeatherIcon()}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-bold text-sm md:text-base">
                  紧急通知 · {getWeatherLabel()}停航
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/90 line-clamp-2 md:line-clamp-1">
                {message}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="flex-shrink-0 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="关闭通知"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
          <div className="h-full bg-white/60 animate-pulse" style={{ width: '30%' }} />
        </div>
      </div>
    </div>
  );
}
