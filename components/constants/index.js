import React from 'react';
import VotingBadge from '../../static/svgs/other/voting_badge.svg'
import BrandBadge from '../../static/svgs/other/iconic_badge.svg'

export const VOTING_BADGE_INFO = {
  title: 'Voting badge',

  description: <p><b>Description: </b>This asset will give you the ability to vote on various aspects of the MyBit project
  as we transition into a network of DAOs. The only way to obtain this is through contributing to
  the token distribution. If you plan to be a long term contributor to the MyBit project then this badge is a must have.</p>,

  specifics: (
    <React.Fragment>
      <p><b>Specifics: </b>The exact nature and functionality of this badge is TBD. We want the community to shape and decide on
        the role these badges will play because it does not make sense to have decentralised governance designed by a small
        centralised group. This badge could end up becoming a voting multiplier, the main and only way for users to vote, or
        anything in between. The one thing we do strongly believe is that these badges will be an intricate part to our governance model.
      </p>
      <p className="BadgeDisplayer__text--display-mobile">How to obtain? Anyone who contributes any amount during any period of the tokensale will receive 1 voting badge.</p>
      <p>Our goal is to have these badges functional for governance by Q2 2019.</p>
    </React.Fragment>
  ),

  howTo: <p className="BadgeDisplayer__text--hide-mobile"><b>How to obtain? </b>Anyone who contributes any amount during any period of the tokensale will receive 1 voting badge.</p>,
  img: <VotingBadge className="BadgeDisplayer__image-main"/>,
  limit: <p>Limit 1 per person.</p>,
};

export const BRAND_BADGE_INFO = {
  title: 'Brand Lottery badge',

  description: (
    <p><b>Description: </b>This badge is designed to decentralise the MyBit brand. One of the main aspects of open source
      projects which creates centralised risk is the owner(s) of the brand, including copyrights,
      trademarks, and so forth. If an individual or small group exclusively owns the brand, they could
      at any point sell it to a corporation and it would create havoc among the open source project -
      there is a high probability it even is shut down. We are massive advocates for decentralisation
      and therefore, we want to avoid the MyBit project from ever being in this situation.
    </p>
  ),

  specifics: (
    <React.Fragment>
      <p><b>Specifics: </b>We are holding a lottery where 10 unique members of our community will be selected at random to
        become co-owners (free of charge) of the MyBit brand, and we will require 100% consensus between all
        owners to permit a sale. This is designed to keep the MyBit brand decentralised, strong, alive, and
        always owned by the community in perpetuity.
      </p>
      <p className="BadgeDisplayer__text--display-mobile">How to obtain? Anyone who contributes any amount during any period of the tokensale will receive 1 brand lottery badge per period.</p>
      <p>The lottery drawing will occur in early 2020 after the token distribution concludes.</p>
    </React.Fragment>
  ),

  howTo: <p className="BadgeDisplayer__text--hide-mobile"><b>How to obtain? </b>Anyone who contributes any amount during any period of the tokensale will receive 1 brand lottery badge per period.</p>,
  img: <BrandBadge className="BadgeDisplayer__image-main"/>,
  limit: <p>Limit 1 per period, per person.</p>,
};
