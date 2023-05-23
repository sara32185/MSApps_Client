import { useEffect } from 'react';
import actions from './redux/actions'
import { connect } from 'react-redux';
import ModalElement from './components/Elements/ModalElement';
import View from './components/View'

const App = (props) => {
  const {
    _getData,
    _currentData,
    _openModal,
    _setOpenModal,
    _category,
  } = props

  useEffect((() => {
    _getData('CATEGORY')
  }), [])


  useEffect((() => {
    _getData(_category)

  }), [_category])

  return (
    _currentData && <>
      <View />
      <ModalElement
        handleClose={() => {
          _setOpenModal({ open: false, data: null })
        }}
        openModal={_openModal}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    _data: state.DataReducer.data,
    _category: state.DataReducer.category,
    _currentData: state.DataReducer.currentData,
    _openModal: state.DataReducer.openModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _getData: (category) => dispatch(actions.getData(category)),
    _setOpenModal: (data) => {
      dispatch(actions.setOpenModal(data))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
