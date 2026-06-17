import {
  LifeBuoy,
  Users,
  Baby,
  PersonStanding,
  CloudLightning,
  Smartphone,
  Waves,
  Phone,
  AlertTriangle,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { safetyRules } from '@/data/safetyRules';
import type { SafetyRule } from '@/data/safetyRules';

function getIcon(iconName: string) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'life-buoy': LifeBuoy,
    'users': Users,
    'baby': Baby,
    'person-standing': PersonStanding,
    'cloud-lightning': CloudLightning,
    'smartphone': Smartphone,
    'waves': Waves,
    'phone': Phone,
  };
  return iconMap[iconName] || ShieldCheck;
}

function getLevelConfig(level: SafetyRule['level']) {
  switch (level) {
    case 'required':
      return {
        bg: 'bg-red-50',
        border: 'border-red-200',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        badge: 'bg-red-500',
        badgeText: '必须',
        titleColor: 'text-red-800',
        textColor: 'text-red-600',
      };
    case 'warning':
      return {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        badge: 'bg-amber-500',
        badgeText: '警告',
        titleColor: 'text-amber-800',
        textColor: 'text-amber-700',
      };
    case 'info':
      return {
        bg: 'bg-sky-50',
        border: 'border-sky-200',
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-600',
        badge: 'bg-sky-500',
        badgeText: '提示',
        titleColor: 'text-sky-800',
        textColor: 'text-sky-600',
      };
  }
}

export default function SafetyRules() {
  const requiredRules = safetyRules.filter((r) => r.level === 'required');
  const warningRules = safetyRules.filter((r) => r.level === 'warning');
  const infoRules = safetyRules.filter((r) => r.level === 'info');

  const renderRule = (rule: SafetyRule, delay: number) => {
    const Icon = getIcon(rule.icon);
    const config = getLevelConfig(rule.level);

    return (
      <div
        key={rule.id}
        className={`p-4 rounded-xl border ${config.bg} ${config.border} card-hover opacity-0 animate-slide-up`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex items-start gap-3">
          <div className={`p-2.5 rounded-lg ${config.iconBg} flex-shrink-0`}>
            <Icon className={`w-5 h-5 ${config.iconColor}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className={`font-bold ${config.titleColor} text-sm md:text-base`}>
                {rule.title}
              </h4>
              <span
                className={`px-2 py-0.5 rounded-full text-xs text-white font-medium ${config.badge}`}
              >
                {config.badgeText}
              </span>
            </div>
            <p className={`text-xs md:text-sm ${config.textColor}`}>
              {rule.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-rose-500 to-red-500 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-xl">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold">安全须知</h3>
            <p className="text-white/80 text-sm">请仔细阅读，确保游玩安全</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {requiredRules.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <h4 className="font-bold text-slate-800">必须遵守</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {requiredRules.map((rule, index) => renderRule(rule, index * 100))}
            </div>
          </div>
        )}

        {warningRules.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h4 className="font-bold text-slate-800">安全警告</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {warningRules.map((rule, index) =>
                renderRule(rule, (requiredRules.length + index) * 100)
              )}
            </div>
          </div>
        )}

        {infoRules.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-sky-500" />
              <h4 className="font-bold text-slate-800">温馨提示</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {infoRules.map((rule, index) =>
                renderRule(rule, (requiredRules.length + warningRules.length + index) * 100)
              )}
            </div>
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
              <Phone className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-bold text-red-800 text-sm">紧急救援电话</p>
              <p className="text-2xl font-bold text-red-600 mt-1">400-123-4567</p>
              <p className="text-xs text-red-500 mt-1">24小时值班，遇紧急情况请立即拨打</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
