import React from 'react';
import InfoBox from '../../UI/InfoBox/InfoBox';
import  './InfoBoxStats.css';

export default function InfoBoxStats(props) {
    const details = {
        cases: { title: "Cases", cases: props.countryInfo.todayCases, total: props.countryInfo.cases },
        recovered: { title: "Recovered", cases: props.countryInfo.todayRecovered, total: props.countryInfo.recovered },
        deaths: { title: "Deaths", cases: props.countryInfo.todayDeaths, total: props.countryInfo.deaths }
    };
    const items = Object.keys(details).map(key =>
        <InfoBox key={key} title={details[key].title} cases={details[key].cases} total={details[key].total} />
    );
    return (
        <div className="app_stats">
            {items}
        </div>
    )
}
