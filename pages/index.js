import stylesheet from '../styles/main.scss'
import { Header } from '../components/header/header'
import LandingBanner from '../components/landingBanner'
import BadgeDisplayer from '../components/badgeDisplayer'
import { MyBitFooter } from '../components/footer/footer'

import { VOTING_BADGE_INFO, BRAND_BADGE_INFO } from '../components/constants'

const Index = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="headerWrapper">
      <div className="mainContainer">
        <Header isDark={false} />
        <LandingBanner />
      </div>
    </div>
    <BadgeDisplayer {...VOTING_BADGE_INFO} isRightAligned />
    <BadgeDisplayer {...BRAND_BADGE_INFO} />
    <MyBitFooter />
  </div>
)

export default Index
