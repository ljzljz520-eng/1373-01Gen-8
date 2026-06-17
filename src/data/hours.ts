export interface BusinessHoursData {
  weekday: string;
  weekend: string;
  holiday: string;
  lastBoarding: string;
  seasonNote: string;
  offSeasonNote: string;
  seasonPeriods: {
    name: string;
    period: string;
    hours: string;
  }[];
}

export const businessHours: BusinessHoursData = {
  weekday: '09:00 - 17:30',
  weekend: '08:30 - 18:00',
  holiday: '08:00 - 18:30',
  lastBoarding: '末班船 17:00 出发',
  seasonNote: '旺季（4月-10月）延长营业时间',
  offSeasonNote: '淡季（11月-3月）营业时间缩短，具体以当日公告为准',
  seasonPeriods: [
    {
      name: '旺季',
      period: '4月1日 - 10月31日',
      hours: '周一至周五 09:00-17:30 / 周末节假日 08:30-18:00',
    },
    {
      name: '淡季',
      period: '11月1日 - 3月31日',
      hours: '每日 09:30-16:30',
    },
  ],
};
