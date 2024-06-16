import React from 'react'
import { useTranslation } from 'react-i18next';
import IntroSection from './sections/IntroSection';
import Brief from './sections/Brief';
import HomeCarousel from './sections/HomeCarousel';
import AreasOfInterest from './sections/AreasOfInterest';
import ContactUs from './sections/ContactUs';

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

const emptySectionStyle ={
  minHeight: '300px' ,
  marginBottom : '20px'
}

function EmptySection(){
  return (
    <>
      <section className='bg-dark' style={emptySectionStyle}>

      </section>
    
    </>
  )
}


function Home() {
  return (
    <>

    <HomeCarousel />
    <EmptySection />
    <Brief />
    <AreasOfInterest />
    <ContactUs />
    </>
  );
}

export default Home;