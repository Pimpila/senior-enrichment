import { connect } from 'react-redux';
import AllCampuses from '../components/AllCampuses';
import { deleteCampusFromServer } from '../action-creators/actions';


const mapState = (state) => ({
  allCampuses: state.allCampuses
});

const mapDispatch = (dispatch) => ({
  deleteCampus: (campusId) => {
    dispatch(deleteCampusFromServer(campusId));
  }
});

export default connect(mapState, mapDispatch)(AllCampuses)
