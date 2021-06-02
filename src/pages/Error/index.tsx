import React from 'react';
import { navigate } from 'hookrouter';
import style from './Error.module.scss';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

import { ReactComponent as TeamRocket } from './assets/teamRocket.svg';

interface Props {}

const ErrorPage: React.FC<Props> = (): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.wrapContent}>
        <div className={style.errorLabel}>404</div>
        <div className={style.wrapMainContent}>
          <TeamRocket className={style.teamRocket} />

          <Heading type="h3" className={style.wrapMainText} weight="bold">
            <div>
              <span style={{ color: 'white' }}>The rocket team</span> <span>has won this time.</span>
            </div>
          </Heading>
          <div className={style.wrapButton}>
            <Button design="primary" onClick={() => navigate('/')}>
              Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ErrorPage.defaultProps = {};

export default ErrorPage;
