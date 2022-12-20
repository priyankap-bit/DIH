import { useState } from 'react';
import DonutChart from '../../Charts/DonutChart';

import './SocialListeningTab.css';

const SocialListeningTab = (props) => {

  return (
    <div className="social-listening-tile">
      <div className='social-listening-1'>
        <div className="social-listening-title">
          <h4>Total Mentions</h4>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
        <div className="social-listening-title">
          <h4>Total Distinct Users</h4>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
        <div className="social-listening-title">
          <h4>Total Engagement</h4>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
      </div>

      <div className='row'>

        <div className='col-lg-3'>
          <div className='card mb-3 widget-chart'>
            <div className='widget-chart-content'>
              <div className="widget-subheading">Total Views</div>
              <div className="widget-numbers">45.8k</div>
              <div className="widget-description text-success">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
                </svg>
                <span className="pl-1">175.5%</span>
                <span className="pl-2">Prev. 9.37K</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='card mb-3 widget-chart'>
            <div className='widget-chart-content'>
              <div className="widget-subheading">Total Views</div>
              <div className="widget-numbers">45.8k</div>
              <div className="widget-description text-success">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" className="svg-inline--fa fa-angle-up fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
                </svg>
                <span className="pl-1">175.5%</span>
                <span className="pl-2">Prev. 9.37K</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card mb-3 widget-chart'>
            <div className='widget-chart-content'>
              <div className="widget-subheading">Total Views</div>
              <div className="widget-numbers">45.8k</div>
              <div className="widget-description text-danger">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>
                <span className="pl-1">54.1%</span>
                <span className="pl-2">Prev. 9.37K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
            <DonutChart/>
          </div>
           */}
    </div>

  )

}

export default SocialListeningTab;