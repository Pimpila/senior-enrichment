import { connect } from 'react-redux';
import SingleStudent from '../components/SingleStudent';


const mapState = (state) => ({
  selectedStudent: state.selectedStudent
});



export default connect(mapState)(SingleStudent)
