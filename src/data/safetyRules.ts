export interface SafetyRule {
  id: string;
  icon: string;
  title: string;
  description: string;
  level: 'warning' | 'info' | 'required';
}

export const safetyRules: SafetyRule[] = [
  {
    id: 'life-vest',
    icon: 'life-buoy',
    title: '必须穿戴救生衣',
    description: '所有乘船人员必须全程穿戴救生衣，儿童需使用专用儿童救生衣。',
    level: 'required',
  },
  {
    id: 'capacity',
    icon: 'users',
    title: '严禁超载乘坐',
    description: '请严格按照船只核定载客人数乘坐，超载会严重影响船只稳定性。',
    level: 'required',
  },
  {
    id: 'children',
    icon: 'baby',
    title: '儿童需成人陪同',
    description: '1.2米以下儿童必须由成人陪同乘船，请勿让儿童单独乘坐。',
    level: 'warning',
  },
  {
    id: 'standing',
    icon: 'person-standing',
    title: '禁止站立走动',
    description: '乘船过程中请勿站立或随意走动，避免船只失衡发生危险。',
    level: 'warning',
  },
  {
    id: 'weather',
    icon: 'cloud-lightning',
    title: '恶劣天气停航',
    description: '遇雷雨、大风、大雾等恶劣天气，码头将立即停航，请配合工作人员安排。',
    level: 'warning',
  },
  {
    id: 'items',
    icon: 'smartphone',
    title: '贵重物品妥善保管',
    description: '请妥善保管随身物品，手机、相机等电子设备请做好防水措施。',
    level: 'info',
  },
  {
    id: 'swim',
    icon: 'waves',
    title: '禁止下水游泳',
    description: '湖区水深危险，严禁下水游泳或嬉水，以防发生意外。',
    level: 'warning',
  },
  {
    id: 'help',
    icon: 'phone',
    title: '紧急情况求助',
    description: '如遇紧急情况，请保持冷静，挥手呼救或拨打救援电话：400-123-4567。',
    level: 'info',
  },
];
