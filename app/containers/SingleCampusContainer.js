import { connect } from 'react-redux';
import SingleCampus from '../components/SingleCampus';


const mapState = (state) => ({
  selectedCampus: state.selectedCampus
});



export default connect(mapState)(SingleCampus)
