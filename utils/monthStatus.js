export function isMonthUnlocked(monthIndex) {

  const today = new Date()

  const currentMonth = today.getMonth() + 1
  const currentDay = today.getDate()

  if (monthIndex < currentMonth) {
    return true
  }

  if (monthIndex === currentMonth && currentDay >= 1) {
    return true
  }

  return false
}