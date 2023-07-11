import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const style = {
  fontWeight: 600,
  background:'#F7A607',
}

export const ActiveLink = ({text, href}) => {

  const { asPath } = useRouter();
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if(typeof href == typeof []){setMyData(href);}
    console.log(myData)
  }, []);
  
  function Select () {
    return(
<li class="dropdown">
          <a href="#">
            {text}
            <svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"/></svg>
          </a>
          <ul class="dropdown-nav">
            {
              myData.map((a) => (
              <li key={`${a} + list`}>
                <a>{a}</a>
              </li>
              ))
            }
            
          </ul>
        </li>
    )
    
  }
  return (
    <Link key={href} href={href} style={asPath === href ? style : null}>
    {
      typeof href !== typeof []
      ? text
      : null
    }

    </Link>
  )
}




