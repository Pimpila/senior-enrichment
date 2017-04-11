import { connect } from 'react-redux';
import AllCampuses from '../components/AllCampuses';


const mapState = (state) => ({
  allCampuses: state.allCampuses
});


export default connect(mapState)(AllCampuses)
