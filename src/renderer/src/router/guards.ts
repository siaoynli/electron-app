export const beforeEach = (to, from) => {
  console.log('前置', to, from)
  return true
}

export const afterEach = (to, from) => {
  console.log('后置', to, from)
}
