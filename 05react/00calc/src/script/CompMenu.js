export const fnGetTheme = () => {
 //themeStrage :  { 1: false, 2: false, 3: false } 이런 형태로 저장예정
 let themeStorage = window.localStorage.getItem('themeStorage')
 let theme 
//  console.log(themeStorage);
if(themeStorage){
 theme = JSON.parse(window.localStorage.getItem('themeStorage'))
  
}else{
  theme={ 1: true, 2: false, 3: false }
  window.localStorage.setItem('themeStorage', JSON.stringify(theme) )
}
return theme
}