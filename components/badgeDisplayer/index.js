import stylesheet from './style.scss'
import Logo from '../../static/svgs/other/logo.svg'

const BadgeDisplayer = ({
  title,
  description,
  specifics,
  howTo,
  img,
  limit,
  isRightAligned,
}) => (
  <React.Fragment>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className={isRightAligned ? 'BadgeDisplayer BadgeDisplayer--is-right-aligned' : 'BadgeDisplayer'}>
      <div className="BadgeDisplayer__wrapper">
        <div className="BadgeDisplayer__text-block">
          <p className="BadgeDisplayer__title BadgeDisplayer__title--hide-mobile">{title}</p>
          <React.Fragment>{description}</React.Fragment>
          <React.Fragment>{specifics}</React.Fragment>
        </div>
        <p className="BadgeDisplayer__title BadgeDisplayer__title--hide-desktop">{title}</p>
        <div className="BadgeDisplayer__image-block">
          <div className="BadgeDisplayer__image-container">
            {limit}
            {img}
            <Logo className="BadgeDisplayer__image-logo"/>
          </div>
          <div className="BadgeDisplayer__how-to">
            {howTo}
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default BadgeDisplayer;
