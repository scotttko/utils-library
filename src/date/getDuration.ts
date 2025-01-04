export function getDuration(startDate: Date, endDate: Date): number {
  return endDate.getTime() - startDate.getTime();
}
