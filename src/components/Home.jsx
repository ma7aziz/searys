import React from 'react'
import { useTranslation } from 'react-i18next';
import IntroSection from './sections/IntroSection';
import Brief from './sections/Brief';
// function Home() {
//   const { t, i18n } = useTranslation();
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <h1>{t('welcome')}</h1>
//       <h1>{t('description')}</h1>
//       <br />
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('ar')}>Arabic</button>
//     </div>
//   )
// }

// export default Home



function Home() {
  return (
    <>
    <IntroSection/>
    {/* <Brief /> */}
    </>
  );
}

export default Home;