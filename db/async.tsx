export function dateNow() : string {
  const now = new Date()
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
}