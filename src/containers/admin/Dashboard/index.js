import React from 'react';
import MovieManagerment from "./MovieManagerment";
import UserManagerment from './UserManagerment';

export default function Dashboard() {
  return (
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><MovieManagerment /></div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><UserManagerment /></div>
    </div>
  )
}
