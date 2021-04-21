import React from 'react';
import Theme from './enum';


const DefaultTheme = React.lazy(() => import('./components/defaultTheme'));
const DarkTheme = React.lazy(() => import('./components/darkTheme'));

const ThemeSelector = ({ children }) => {
  const CurrentTheme = localStorage.getItem('Theme') || Theme.DEFAULT_THEME;
  return(
    <>
      <React.Suspense fallback={<></>}>
        {(CurrentTheme === Theme.DEFAULT_THEME) && <DefaultTheme/>}
        {(CurrentTheme === Theme.DARK_THEME) && <DarkTheme/>}
      </React.Suspense>
      {children}
    </>
  )
};

export default ThemeSelector;