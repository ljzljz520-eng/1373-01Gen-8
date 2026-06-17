import { useState } from 'react';
import {
  MapPin,
  Ticket,
  Users,
  Ship,
  Home,
  Package,
  Info,
  Compass,
} from 'lucide-react';
import { mapMarkers, mapLegend } from '@/data/mapMarkers';

export default function DockMap() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const getIconComponent = (type: string): React.ComponentType<{ className?: string; style?: React.CSSProperties }> => {
    switch (type) {
      case 'ticket':
        return Ticket;
      case 'queue':
        return Users;
      case 'boarding':
        return Ship;
      case 'restroom':
        return Home;
      case 'storage':
        return Package;
      case 'info':
        return Info;
      default:
        return MapPin;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-xl">
            <MapPin className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold">码头位置地图</h3>
            <p className="text-white/80 text-sm">点击标注点查看详细信息</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="relative bg-gradient-to-br from-sky-50 via-lake-50 to-emerald-50 rounded-xl overflow-hidden border border-lake-100">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-auto block"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="50%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="400" height="300" fill="#f0fdf4" />

            <path
              d="M0,200 Q100,180 150,210 T300,190 T400,220 L400,300 L0,300 Z"
              fill="url(#waterGradient)"
              opacity="0.7"
            />

            <path
              d="M0,210 Q100,190 150,220 T300,200 T400,230"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeDasharray="8,4"
              opacity="0.3"
            />

            <ellipse cx="200" cy="250" rx="180" ry="30" fill="url(#waterGradient)" opacity="0.5" />

            <rect x="200" y="240" width="60" height="40" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <rect x="280" y="245" width="50" height="35" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />

            <rect x="80" y="160" width="100" height="35" rx="8" fill="url(#pathGradient)" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="130" y="182" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="500">
              排队通道
            </text>

            <rect x="30" y="130" width="45" height="40" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="52" y="155" textAnchor="middle" fontSize="9" fill="#475569">
              服务中心
            </text>

            <rect x="90" y="105" width="50" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="115" y="124" textAnchor="middle" fontSize="9" fill="#92400e">
              售票处
            </text>

            <rect x="170" y="110" width="55" height="25" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
            <text x="197" y="127" textAnchor="middle" fontSize="8" fill="#6b7280">
              寄存处
            </text>

            <rect x="60" y="200" width="30" height="25" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
            <text x="75" y="216" textAnchor="middle" fontSize="8" fill="#6b7280">
              卫生间
            </text>

            <g opacity="0.6">
              <circle cx="30" cy="60" r="15" fill="#86efac" />
              <circle cx="45" cy="55" r="12" fill="#86efac" />
              <circle cx="380" cy="70" r="18" fill="#86efac" />
              <circle cx="365" cy="60" r="14" fill="#86efac" />
              <circle cx="360" cy="100" r="10" fill="#86efac" />
            </g>

            <g transform="translate(360, 270)">
              <path d="M0,-15 L4,0 L0,4 L-4,0 Z" fill="#0369a1" />
              <text x="0" y="10" textAnchor="middle" fontSize="9" fill="#0369a1" fontWeight="bold">
                N
              </text>
            </g>
          </svg>

          {mapMarkers.map((marker) => {
            const Icon = getIconComponent(marker.type);
            const isActive = activeMarker === marker.id || hoveredMarker === marker.id;

            return (
              <div
                key={marker.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${marker.x}%`,
                  top: `${marker.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => setActiveMarker(activeMarker === marker.id ? null : marker.id)}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full animate-breathing"
                    style={{
                      backgroundColor: marker.color,
                      opacity: 0.2,
                      transform: isActive ? 'scale(1.4)' : 'scale(1.1)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div
                    className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    style={{ backgroundColor: marker.color }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>

                  {isActive && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap z-10">
                      <div className="relative bg-white rounded-lg shadow-lg px-3 py-2 border-2" style={{ borderColor: marker.color }}>
                        <p className="text-sm font-bold text-slate-800">{marker.label}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                          <div
                            className="w-3 h-3 bg-white border-r-2 border-b-2 rotate-45"
                            style={{ borderColor: marker.color }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-slate-500">
            点击标注点查看详情
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {mapLegend.map((item) => {
            const Icon = getIconComponent(item.type);
            return (
              <div
                key={item.type}
                className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm text-slate-700">{item.label}</span>
              </div>
            );
          })}
        </div>

        {activeMarker && (
          <div className="mt-4 p-4 bg-lake-50 rounded-xl border border-lake-200">
            {(() => {
              const marker = mapMarkers.find((m) => m.id === activeMarker);
              if (!marker) return null;
              const Icon = getIconComponent(marker.type);
              return (
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: marker.color + '20' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: marker.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{marker.label}</h4>
                    <p className="text-sm text-slate-600 mt-0.5">{marker.description}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
