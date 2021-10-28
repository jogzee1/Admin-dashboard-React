import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward } from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,734</span>
                    <span className="featuredMoneyRate">
                        2.4 <ArrowDownward className="featuredIcon positive" />
                    </span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,565</span>
                    <span className="featuredMoneyRate">
                        -14.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,565</span>
                    <span className="featuredMoneyRate">
                        -14.4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
            </div>
            
        </div>
    )
}
