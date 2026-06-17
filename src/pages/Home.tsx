import { useState, useEffect } from 'react';
import { Ship, Clock, MapPin, Shield, Anchor, Phone, Map, Heart } from 'lucide-react';
import WeatherBanner from '@/components/WeatherBanner';
import SectionHeader from '@/components/SectionHeader';
import BoatCard from '@/components/BoatCard';
import BusinessHours from '@/components/BusinessHours';
import DockMap from '@/components/DockMap';
import SafetyRules from '@/components/SafetyRules';
import { boats, categoryLabels } from '@/data/boats';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { key: 'all', label: '全部船型' },
    { key: 'family', label: categoryLabels.family },
    { key: 'electric', label: categoryLabels.electric },
    { key: 'paddle', label: categoryLabels.paddle },
    { key: 'bicycle', label: categoryLabels.bicycle },
  ];

  const filteredBoats =
    activeCategory === 'all' ? boats : boats.filter((boat) => boat.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50">
      <WeatherBanner isVisible={true} weatherType="thunderstorm" />

      <header className="pt-16 md:pt-20 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-lake-200/30 rounded-full blur-3xl" />
          <div className="absolute top-20 right-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-sky-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <Anchor className="w-4 h-4 text-lake-600" />
              <span className="text-sm text-slate-600">公园游船码头 · 游客指南</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-lake-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                畅游湖面
              </span>
              <br />
              <span className="text-slate-700">尽享美好时光</span>
            </h1>

            <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-8">
              多种船型任选，安全舒适有保障，与家人朋友一起享受湖上悠闲时光
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => scrollToSection('boats')}
                className="px-6 py-3 bg-gradient-to-r from-lake-500 to-sky-500 text-white font-medium rounded-xl shadow-lg shadow-lake-500/30 hover:shadow-xl hover:shadow-lake-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                查看船型价格
              </button>
              <button
                onClick={() => scrollToSection('map')}
                className="px-6 py-3 bg-white text-slate-700 font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Map className="w-4 h-4" />
                查看位置地图
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 text-slate-600">
                <Ship className="w-5 h-5 text-lake-500" />
                <span className="text-sm">6 种船型可选</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">全年开放</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-sm">专业安全保障</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </header>

      <section id="boats" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="船型与价格"
            subtitle="多种船型满足不同需求，亲子同乐或朋友欢聚，总有一款适合您"
            icon={<Ship className="w-7 h-7" />}
          />

          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-lake-500 text-white shadow-md shadow-lake-500/30'
                    : 'bg-white text-slate-600 hover:bg-lake-50 hover:text-lake-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredBoats.map((boat, index) => (
              <BoatCard key={boat.id} boat={boat} delay={index * 100} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              价格仅供参考，具体以现场实际收费为准 · 押金 200-500 元/船
            </p>
          </div>
        </div>
      </section>

      <section id="hours" className="py-14 md:py-20 bg-gradient-to-b from-white to-sky-50/50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="营业时间"
            subtitle="请合理安排您的游玩时间，旺季与淡季营业时间有所调整"
            icon={<Clock className="w-7 h-7" />}
          />

          <div className="max-w-2xl mx-auto">
            <BusinessHours />
          </div>
        </div>
      </section>

      <section id="map" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="码头位置地图"
            subtitle="清晰标注各个功能区域，帮您快速找到目的地"
            icon={<MapPin className="w-7 h-7" />}
          />

          <div className="max-w-3xl mx-auto">
            <DockMap />
          </div>
        </div>
      </section>

      <section id="safety" className="py-14 md:py-20 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="安全须知"
            subtitle="游玩安全第一，请您仔细阅读并遵守相关规定"
            icon={<Shield className="w-7 h-7" />}
          />

          <div className="max-w-3xl mx-auto">
            <SafetyRules />
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-6 h-6 text-lake-400" />
                <span className="font-bold text-lg">公园游船码头</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                致力于为游客提供安全、舒适、愉快的游船体验，让您在湖光山色中享受美好时光。
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">快速导航</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('boats')}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  船型价格
                </button>
                <button
                  onClick={() => scrollToSection('hours')}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  营业时间
                </button>
                <button
                  onClick={() => scrollToSection('map')}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  位置地图
                </button>
                <button
                  onClick={() => scrollToSection('safety')}
                  className="block text-slate-400 hover:text-white text-sm transition-colors"
                >
                  安全须知
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">联系我们</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>400-123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>公园内湖东岸游船码头</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>09:00 - 17:30</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              © 2024 公园游船码头 版权所有
            </p>
            <div className="flex items-center gap-1 text-slate-500 text-xs">
              <Heart className="w-3 h-3" />
              <span>用心服务每一位游客</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
