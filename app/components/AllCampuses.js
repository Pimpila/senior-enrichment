// import SingleCampusContainer from '../containers/SingleCampusContainer';
import React from 'react';
import {Link} from 'react-router';


export default function AllCampuses(props) {
  const campuses = props.allCampuses;
  console.log('props', props)
  console.log("campuses", campuses)
  return (
    <div className="col-lg-2">
    {
      campuses && campuses.map(campus => {
        return (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          </div>
        )
      })
    }
    </div>
  )
}
