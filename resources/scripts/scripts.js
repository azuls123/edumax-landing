

function goToTrimestrales(option) {
  switch (option) {
    case 'alumnos':
      window.open ('https://alumnos.edumax.app/sys3/app_Login/','_blank');
      break;
    case 'profesores':
      window.open ('https://profesores.edumax.app/sys3/app_Login/','_blank');
      break;
    case 'secretaria':
      window.open ('https://secretaria.edumax.app/sys3/app_Login/','_blank');
      break;
    default:
      console.log('not a valid value');
      break;
  }
}