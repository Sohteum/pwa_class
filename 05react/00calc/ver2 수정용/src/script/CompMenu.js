export const fnGetTheme = () => {
  //themeStrage :  { 1: false, 2: false, 3: false } 이런 형태로 저장예정
  let themeStorage = window.localStorage.getItem('themeStorage')
  let theme
  let className

  //  console.log(themeStorage);
  if (themeStorage) {//두번째부터는 무조건 여기 걸리게된다.
    theme = JSON.parse(window.localStorage.getItem('themeStorage'))
    if (theme[1]) {
      className = 'gray'
    } else if (theme[2]) {
      className = 'purpleblue'
    } else {
      className = 'beige'
    }
    document.body.setAttribute('class', className)

  } else { //띰이 있는지 확인하고 없으면 이런상태로 만들어준다.
    theme = { 1: true, 2: false, 3: false }
    window.localStorage.setItem('themeStorage', JSON.stringify(theme))
  }
  return theme
}