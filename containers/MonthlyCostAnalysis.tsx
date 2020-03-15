import { connect } from 'react-redux'
import MonthlyCostAnalysis from '../components/MonthlyCostAnalysis';
import {getMonthlyAnalysis} from '../core';
import {RootState} from '../store'
import {TYPES} from '../types'

const mapStateToProps = (state: RootState) => {
  return {
    monthlyAnalysis: state.monthlyAnalysis,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {getMonthlyAnalysis: () => {
    return getMonthlyAnalysis(new Date()).then((analysis: any) => {
      console.log('+++++')
      console.log(analysis)
      dispatch({
        type: TYPES.MONTHLY_ANALYSIS_GOT,
        payload: analysis,
      })
    })
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyCostAnalysis)