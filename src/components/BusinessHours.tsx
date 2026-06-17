import { Clock, Calendar, Sun, Snowflake, Info } from 'lucide-react';
import { businessHours } from '@/data/hours';

export default function BusinessHours() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-xl">
            <Clock className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold">营业时间</h3>
            <p className="text-white/80 text-sm">请合理安排您的游玩时间</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-lake-100 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-lake-600" />
            </div>
            <p className="text-sm text-slate-500 mb-1">工作日</p>
            <p className="text-lg font-bold text-slate-800">{businessHours.weekday}</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-forest-100 flex items-center justify-center">
              <Sun className="w-6 h-6 text-forest-600" />
            </div>
            <p className="text-sm text-slate-500 mb-1">周末</p>
            <p className="text-lg font-bold text-slate-800">{businessHours.weekend}</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sand-100 flex items-center justify-center">
              <Sun className="w-6 h-6 text-sand-600" />
            </div>
            <p className="text-sm text-slate-500 mb-1">节假日</p>
            <p className="text-lg font-bold text-slate-800">{businessHours.holiday}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-lake-50 to-sky-50 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-lake-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-lake-800 text-sm">末班船时间</p>
              <p className="text-lake-600 text-sm">{businessHours.lastBoarding}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            季节营业时间
          </p>
          {businessHours.seasonPeriods.map((period, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                index === 0 ? 'bg-forest-100' : 'bg-slate-200'
              }`}>
                {index === 0 ? (
                  <Sun className="w-5 h-5 text-forest-600" />
                ) : (
                  <Snowflake className="w-5 h-5 text-slate-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-800 text-sm">{period.name}</span>
                  <span className="text-xs text-slate-500">{period.period}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 truncate">{period.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-400 text-center">
          如遇特殊情况或恶劣天气，营业时间可能临时调整，请以现场公告为准
        </p>
      </div>
    </div>
  );
}
