import React from 'react'
import { 
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarLink,
    SideBarWrapper,
    SideBtnWrap,
    SidebarRoute,
    SideBarMenu
} from './SideBarElements'

const SideBar = ({ 
    isOpen, 
    toggle, 
    claimReward, 
    connectToMetaMask, 
    moth,
    countIsLive
}) => { return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='whitepaper' onClick={toggle}>Whitepaper</SideBarLink>
                    <SideBarLink to='discover' onClick={toggle}>Discover</SideBarLink>
                    
                </SideBarMenu>
                {countIsLive ? 
                    <></>:
                    <SideBtnWrap>
                        <SidebarRoute onClick={moth === undefined ? connectToMetaMask : claimReward} to=''>
                            {moth === undefined ? 'Connect' : 'Claim'}
                        </SidebarRoute>
                    </SideBtnWrap>
                }
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
