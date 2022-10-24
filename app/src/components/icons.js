import * as React from 'react'
import { css } from '@emotion/css'
import { Menu, MenuIcon } from 'components/lib'
import * as colors from 'styles/colors'

const Home = ({fill = `${colors.gray}`}) => {
  return (   
    <MenuIcon> 
      <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C15 0 5.721 8.01 0.5355 12.348C0.231 12.624 0 13.026 0 13.5C0 14.3295 0.6705 15 1.5 15H4.5V25.5C4.5 26.3295 5.1705 27 6 27H10.5C11.3295 27 12 26.328 12 25.5V19.5H18V25.5C18 26.328 18.6705 27 19.5 27H24C24.8295 27 25.5 26.3295 25.5 25.5V15H28.5C29.3295 15 30 14.3295 30 13.5C30 13.026 29.769 12.624 29.4255 12.348C24.276 8.01 15 0 15 0Z" fill={fill} />
      </svg>
    </MenuIcon>
  )
}

const Note = ({fill = `${colors.gray}`}) => {
  return (
    <MenuIcon>
      <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9797 5.98223C16.6846 3.64294 14.8512 1.38518 12.469 1.0445C11.2369 0.868335 10.2043 1.25415 9.64375 1.52168V20.9618C8.74509 20.4937 7.64188 20.2141 6.44475 20.2141C3.43793 20.2141 1 21.9569 1 24.1069C1 26.2565 3.43756 27.9996 6.44475 27.9996C9.45194 27.9996 11.8895 26.2569 11.8895 24.1069C11.8895 24.0188 11.8895 12.6987 11.8895 7.12913C12.2022 6.80773 12.4759 6.71674 12.6782 6.6989C13.6803 6.61082 14.8574 8.14608 15.546 10.5705C15.8576 10.196 17.2848 8.39977 16.9797 5.98223Z" fill={fill} />
        <path d="M11.9498 6.33531C11.7547 6.36625 11.6273 6.42157 11.5968 6.4365C11.4639 6.50165 11.3172 6.60465 11.1611 6.76553C11.1611 12.3351 11.1611 23.6552 11.1611 23.7433C11.1611 25.893 8.72352 27.636 5.71633 27.636C4.70666 27.636 3.76468 27.4362 2.9541 27.0937C3.89935 27.659 5.11577 28 6.44429 28C9.45111 28 11.889 26.2573 11.889 24.1073C11.889 24.0192 11.889 12.6991 11.889 7.12951C11.9928 7.0265 12.2581 6.79101 12.6778 6.69929C13.0461 6.61885 13.3479 6.69019 13.4884 6.73277C13.2747 6.59264 13.0829 6.51111 12.9482 6.4627C12.7495 6.39173 12.3873 6.26652 11.9498 6.33531Z" fill={fill} />
        <path d="M16.9797 5.98223C16.7293 3.99636 15.3683 2.07456 13.5066 1.32913C14.9887 2.23253 16.0351 3.90173 16.2517 5.61825C16.477 7.40538 15.7567 8.85111 15.2391 9.63584C15.349 9.9303 15.4521 10.2415 15.5456 10.5705C15.8575 10.196 17.2847 8.39977 16.9797 5.98223Z" fill={fill} />
        <path d="M16.9797 5.98223C16.6846 3.64294 14.8512 1.38518 12.469 1.0445C11.2369 0.868335 10.2043 1.25415 9.64375 1.52168V20.9618C8.74509 20.4937 7.64188 20.2141 6.44475 20.2141C3.43793 20.2141 1 21.9569 1 24.1069C1 26.2565 3.43756 27.9996 6.44475 27.9996C9.45194 27.9996 11.8895 26.2569 11.8895 24.1069C11.8895 24.0188 11.8895 12.6987 11.8895 7.12913C12.2022 6.80773 12.4759 6.71674 12.6782 6.6989C13.6803 6.61082 14.8574 8.14608 15.546 10.5705C15.8576 10.196 17.2848 8.39977 16.9797 5.98223Z" stroke={fill} strokeMiterlimit="10" />
      </svg>
    </MenuIcon>
  )
}

const Playlists = ({fill = `${colors.gray}`}) => {
  return (
    <MenuIcon>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9385 0H0V19.9385H19.9385V0ZM6.64615 14.1231V5.81538L13.7077 9.96923L6.64615 14.1231ZM23.6769 23.6769H4.15385V21.1846H21.1846V4.15385H23.6769V23.6769ZM27 7.47692V27H7.47692V24.5077H24.5077V7.47692H27Z" fill={fill} />
      </svg>
    </MenuIcon>
  )
}

const Play = ({fill = `${colors.gray}`}) => {
  return (
    <MenuIcon>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="25" fill="#F8A2D9" />
        <g clipPath="url(#clip0_4:215)">
          <path d="M20.6793 14.4851C18.6959 13.3474 17.0878 14.2794 17.0878 16.5652V33.4332C17.0878 35.7213 18.6959 36.6521 20.6793 35.5154L35.4228 27.0602C37.4069 25.922 37.4069 24.0781 35.4228 22.9402L20.6793 14.4851Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_4:215">
            <rect width="22" height="22" fill="white" transform="translate(16 14)" />
          </clipPath>
        </defs>
      </svg>
    </MenuIcon>
  )
}

const Albums = ({fill = `${colors.gray}`}) => {
  return (
    <MenuIcon>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g data-name="Layer 37" id="Layer_37">
          <path fill={fill} d="M24,27H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H24a1,1,0,0,1,1,1V26A1,1,0,0,1,24,27ZM3,25H23V3H3Z"/>
            <path fill={fill} d="M30,31H8a1,1,0,0,1,0-2H29V7H28a1,1,0,0,1,0-2h2a1,1,0,0,1,1,1V30A1,1,0,0,1,30,31Z"/>
            <path fill={fill} d="M2,21.86a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41L5.35,16a2.67,2.67,0,0,1,3.48-.29l3.59,2.6a.68.68,0,0,0,.88-.08L17,14.51a2.75,2.75,0,0,1,3.82,0l3.88,3.93a1,1,0,0,1-1.42,1.4l-3.88-3.93a.69.69,0,0,0-1,0l-3.71,3.75a2.68,2.68,0,0,1-3.48.3l-3.59-2.6a.67.67,0,0,0-.88.07L2.71,21.56A1,1,0,0,1,2,21.86Z"/>
            <path fill={fill} d="M13.85,12.86a4,4,0,1,1,4-4A4,4,0,0,1,13.85,12.86Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,13.85,6.86Z"/>
          </g>
      </svg>
    </MenuIcon>
  )
}

const SearchIcon = ({fill = `${colors.gray}`}) => {
  return (
    <MenuIcon>
      <svg enableBackground="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32">
        <path fill={fill} d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" />
      </svg>
    </MenuIcon>
  )
}

const LogoutIcon = ({fill = `${colors.gray}`}) => {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path fill={fill} clipRule="evenodd" d="M6 4C5.44772 4 5 4.44771 5 5L5 19C5 19.5523 5.44772 20 6 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H6C4.34315 22 3 20.6569 3 19L3 5C3 3.34314 4.34315 2 6 2L14 2C14.5523 2 15 2.44772 15 3C15 3.55229 14.5523 4 14 4L6 4ZM15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929L17.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H17.5858L15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289Z" fillRule="evenodd" />
    </svg>
  )
}

const LikeIcon = ({fill = `${colors.gray}`}) => {
  return (
    <svg height="100px" viewBox="0 0 512 512" width="100px">
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path 
            d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" 
            fill={fill}
          />
        </g>
      </g>
      <g id="Layer_1"/>
    </svg>
  )
}

export {
  Home,
  Note,
  Playlists,
  Play,
  Albums,
  SearchIcon,
  LogoutIcon,
  LikeIcon
}