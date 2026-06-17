export interface BoatType {
  id: string;
  name: string;
  category: 'family' | 'electric' | 'paddle' | 'bicycle';
  price: number;
  priceUnit: string;
  capacity: number;
  suitableFor: string[];
  description: string;
  features: string[];
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
}

export const boats: BoatType[] = [
  {
    id: 'family-1',
    name: '亲子脚踏船',
    category: 'family',
    price: 80,
    priceUnit: '元/小时',
    capacity: 4,
    suitableFor: ['家庭亲子', '儿童乘坐', '慢节奏游玩'],
    description: '宽敞舒适的四人脚踏船，带有安全护栏和儿童座椅，适合全家一起享受湖面风光。',
    features: ['安全护栏', '儿童座椅', '遮阳顶棚', '脚蹬驱动'],
    gradientFrom: 'from-rose-400',
    gradientTo: 'to-pink-500',
    accentColor: 'bg-rose-500',
  },
  {
    id: 'family-2',
    name: '天鹅亲子船',
    category: 'family',
    price: 100,
    priceUnit: '元/小时',
    capacity: 2,
    suitableFor: ['亲子双人', '情侣约会', '拍照打卡'],
    description: '造型可爱的天鹅船，孩子最爱的卡通造型，轻松脚踏即可畅游湖面。',
    features: ['天鹅造型', '双人座位', '轻松脚踏', '拍照神器'],
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-amber-500',
    accentColor: 'bg-orange-500',
  },
  {
    id: 'electric-1',
    name: '电动休闲船',
    category: 'electric',
    price: 150,
    priceUnit: '元/小时',
    capacity: 6,
    suitableFor: ['朋友聚会', '家庭出游', '老年游客', '不想费力'],
    description: '豪华电动船，无需脚踏，轻松操控即可畅游湖面，空间宽敞舒适。',
    features: ['电动驱动', '六人座位', '方向盘操控', '皮质座椅'],
    gradientFrom: 'from-sky-400',
    gradientTo: 'to-blue-500',
    accentColor: 'bg-sky-500',
  },
  {
    id: 'electric-2',
    name: '豪华电动游艇',
    category: 'electric',
    price: 260,
    priceUnit: '元/小时',
    capacity: 8,
    suitableFor: ['多人聚会', '家庭团聚', '商务接待', '高端体验'],
    description: '高端豪华游艇，宽敞的乘坐空间和舒适的内饰，尽享尊贵游船体验。',
    features: ['豪华内饰', '八人座位', '全封闭座舱', '音响系统'],
    gradientFrom: 'from-violet-400',
    gradientTo: 'to-purple-500',
    accentColor: 'bg-violet-500',
  },
  {
    id: 'paddle-1',
    name: '单人皮划艇',
    category: 'paddle',
    price: 60,
    priceUnit: '元/小时',
    capacity: 1,
    suitableFor: ['运动爱好者', '年轻人', '独自游玩'],
    description: '轻便灵活的单人皮划艇，享受自由划行的乐趣，锻炼身体同时欣赏美景。',
    features: ['轻便灵活', '单人座', '配船桨', '救生衣'],
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-green-500',
    accentColor: 'bg-emerald-500',
  },
  {
    id: 'bicycle-1',
    name: '水上自行车',
    category: 'bicycle',
    price: 70,
    priceUnit: '元/小时',
    capacity: 2,
    suitableFor: ['情侣出游', '朋友结伴', '运动休闲'],
    description: '独特的水上自行车体验，双人并坐，轻松骑行，感受不一样的乐趣。',
    features: ['双人并坐', '脚踏驱动', '稳定安全', '新奇体验'],
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-teal-500',
    accentColor: 'bg-cyan-500',
  },
];

export const categoryLabels: Record<string, string> = {
  family: '亲子船',
  electric: '电动船',
  paddle: '皮划艇',
  bicycle: '水上自行车',
};
