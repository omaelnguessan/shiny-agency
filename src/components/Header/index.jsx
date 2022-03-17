import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    jusity-content: space-between;
    align-items: center;
`

function Header() {
    const { theme } = useTheme()
    return (
        <NavContainer>
            <Link to="/">
                    <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>
            <div>
                <StyledLink $theme={theme} to="/">Accueil</StyledLink>
                <StyledLink $theme={theme} to="/survey/1">Questionnaire</StyledLink>
                <StyledLink $theme={theme} to="/freelances">Profils</StyledLink>
            </div>
        </NavContainer>
        
    )
}

export default Header;