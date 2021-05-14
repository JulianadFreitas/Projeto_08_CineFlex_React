import React from 'react';
export default function Footer({src, title, sectionTime, sectionDate }){
    return (
      <div class='selected'>
        <div class='Movie'>
          <img src={src} />
        </div>
        {title} <br/> {`${!sectionDate? "" : ` ${sectionDate} -`}  `}  {`${!sectionTime? "" : sectionTime}`}
      </div>
    );
}