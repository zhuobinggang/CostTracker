import { connect } from 'react-redux'
import WeekCostAnalysis from '../components/WeekCostAnalysis';
import {getWeeklyAnalysis} from '../core';
import {RootState} from '../store'
import {TYPES} from '../types'

const mapStateToProps = (state: RootState) => {
  return {
    weeklyAnalysis: state.weekAnalysis,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {getWeeklyAnalysis: () => {
    return getWeeklyAnalysis(new Date()).then(analysis => {
      console.log('+++++')
      console.log(analysis)
      dispatch({
        type: TYPES.WEEKLY_ANALYSIS_GOT,
        payload: analysis,
      })
    })
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekCostAnalysis)