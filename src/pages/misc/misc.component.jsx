import React from 'react';

import PageSpeedInsights from '../../components/page-speed-insights/page-speed-insights.component';
import javaScript from '../../components/pjavascript/javascript.component';

import './misc.styles.scss';

const Misc = () => {
    return(
        <React.Fragment>
            <PageSpeedInsights />
            <javaScript />
        </React.Fragment>
    )
}

export default Misc;