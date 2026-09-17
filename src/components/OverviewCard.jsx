import facebookLogo from '../images/icon-facebook.svg'
import twitterLogo from '../images/icon-twitter.svg'
import instagramLogo from '../images/icon-instagram.svg'
import youtubeLogo from '../images/icon-youtube.svg'
import iconUp from '../images/icon-up.svg'
import iconDown from '../images/icon-down.svg'

const networkLogos = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

const networkColors = {
    Facebook: 'bg-facebook',
    Twitter: 'bg-twitter',
    Instagram: 'bg-[image:var(--gradient-instagram)]',
    YouTube: 'bg-youtube'
}

export const OverviewCard =({user,audienceType,audience,network,isUp,today}) =>{
    
    return (
        <article className="bg-light-grayish-blue w-full h-[216px] mb-4 rounded-[5px]  overflow-hidden text-center dark:bg-dark-desaturated-blue
        hover:brightness-95 cursor-pointer hover:dark:brightness-125">
            <div className={`${networkColors[network]} h-[4px] mb-8 `}></div>
            <div className='flex items-center place-content-center gap-2 '>
            <img src={networkLogos[network]} alt={`logo ${network}`} />
            <p className='text-x text-dark-grayish-blue font-bold'>{user}</p>
            </div>
            <p className='text-[56px] font-bold text-very-dark-blue  dark:text-white'>{audience}</p>
            <p className='uppercase tracking-[5px] text-dark-grayish-blue-grayish-blue text-xs mb-4'>{audienceType}</p>
            <div className='flex items-center place-content-center gap-1 '>
                <img src={isUp ? iconUp : iconDown} alt={isUp ? "Up arrow" : "Down arrow"} />
                <p className={`text-xs font-bold ${isUp ? 'text-lime-green' : 'text-bright-red'}`}>{today} today </p>
            </div>
        </article>
    )
}