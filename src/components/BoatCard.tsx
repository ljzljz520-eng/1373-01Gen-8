import { Users, Check, Ship } from 'lucide-react';
import type { BoatType } from '@/data/boats';
import { categoryLabels } from '@/data/boats';

interface BoatCardProps {
  boat: BoatType;
  delay?: number;
}

export default function BoatCard({ boat, delay = 0 }: BoatCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md overflow-hidden card-hover opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`relative h-40 md:h-48 bg-gradient-to-br ${boat.gradientFrom} ${boat.gradientTo} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-1 bg-white rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${-10 + i * 5}%`,
                transform: `rotate(-3deg)`,
                opacity: 0.3 + i * 0.1,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-white text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 flex items-center justify-center">
            <Ship className="w-16 h-16 md:w-20 md:h-20 animate-float" style={{ animationDelay: `${delay * 2}ms` }} />
          </div>
          <span className="px-3 py-1 bg-white/25 backdrop-blur-sm rounded-full text-xs font-medium">
            {categoryLabels[boat.category]}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 rounded-full text-sm font-bold text-slate-700 shadow-md">
            <span className={boat.accentColor.replace('bg-', 'text-')}>¥{boat.price}</span>
            <span className="text-xs text-slate-400 font-normal">/ {boat.priceUnit.split('/')[1]}</span>
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
          {boat.name}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <Users className="w-4 h-4" />
          <span>限乘 {boat.capacity} 人</span>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {boat.description}
        </p>

        <div className="mb-4">
          <p className="text-xs text-slate-400 mb-2 font-medium">适用人群</p>
          <div className="flex flex-wrap gap-1.5">
            {boat.suitableFor.map((item, index) => (
              <span
                key={index}
                className={`px-2.5 py-1 text-xs rounded-md ${
                  boat.category === 'family'
                    ? 'bg-rose-50 text-rose-600'
                    : boat.category === 'electric'
                    ? 'bg-sky-50 text-sky-600'
                    : boat.category === 'paddle'
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-cyan-50 text-cyan-600'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-400 mb-2 font-medium">船只特色</p>
          <div className="grid grid-cols-2 gap-2">
            {boat.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-1.5 text-xs text-slate-600">
                <Check className={`w-3.5 h-3.5 ${boat.accentColor.replace('bg-', 'text-')}`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
