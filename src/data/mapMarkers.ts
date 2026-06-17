export interface MapMarker {
  id: string;
  type: 'ticket' | 'queue' | 'boarding' | 'restroom' | 'storage' | 'info';
  label: string;
  x: number;
  y: number;
  description: string;
  color: string;
}

export const mapMarkers: MapMarker[] = [
  {
    id: 'info',
    type: 'info',
    label: '游客服务中心',
    x: 12,
    y: 25,
    description: '咨询、投诉、失物招领',
    color: '#3b82f6',
  },
  {
    id: 'ticket',
    type: 'ticket',
    label: '售票处',
    x: 22,
    y: 35,
    description: '购票、换票、退票',
    color: '#f59e0b',
  },
  {
    id: 'queue',
    type: 'queue',
    label: '排队等候区',
    x: 38,
    y: 45,
    description: '请在此区域有序排队',
    color: '#8b5cf6',
  },
  {
    id: 'boarding-1',
    type: 'boarding',
    label: '1号登船口',
    x: 55,
    y: 58,
    description: '亲子船、脚踏船登船',
    color: '#10b981',
  },
  {
    id: 'boarding-2',
    type: 'boarding',
    label: '2号登船口',
    x: 72,
    y: 65,
    description: '电动船、游艇登船',
    color: '#10b981',
  },
  {
    id: 'restroom',
    type: 'restroom',
    label: '卫生间',
    x: 18,
    y: 60,
    description: '公共卫生间，第三卫生间',
    color: '#6b7280',
  },
  {
    id: 'storage',
    type: 'storage',
    label: '寄存处',
    x: 30,
    y: 28,
    description: '行李、物品免费寄存',
    color: '#6b7280',
  },
];

export const mapLegend = [
  { type: 'info', label: '服务中心', color: '#3b82f6' },
  { type: 'ticket', label: '售票处', color: '#f59e0b' },
  { type: 'queue', label: '排队区', color: '#8b5cf6' },
  { type: 'boarding', label: '登船口', color: '#10b981' },
  { type: 'restroom', label: '卫生间', color: '#6b7280' },
  { type: 'storage', label: '寄存处', color: '#6b7280' },
];
