import React from 'react';
export default function Footer({src, title, sectionTime, sectionDate }){
    return (
      <div className='selected'>
        <div className='Movie'>
          <img src={src} alt={"banner of movie"}/>
        </div>
        {title} <br/> {`${!sectionDate? "" : ` ${sectionDate} -`}  `}  {`${!sectionTime? "" : sectionTime}`}
      </div>
    );
}