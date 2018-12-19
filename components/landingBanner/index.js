import stylesheet from './style.scss'
import VotingBadge from '../../static/svgs/other/voting_badge.svg'
import BrandBadge from '../../static/svgs/other/brand_badge.svg'

const LandingBanner = () => (
  <React.Fragment>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="LandingBanner">
      <div className="LandingBanner__container">
        <div>
          <p className="LandingBanner__title">Contribution Badges</p>
          <p className="LandingBanner__description">MyBit badges are used to increase engagment within our community and reward those who are active.
         We have massive plans for scaling decentralised communities erc-721 badges in 2019, this is just the beginning.</p>
        </div>
        <div className="LandingBanner__badges">
          <div>
            <VotingBadge />
            <p>Voting badge</p>
          </div>
          <div>
            <BrandBadge />
            <p>Brand lottery badge</p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default LandingBanner;

