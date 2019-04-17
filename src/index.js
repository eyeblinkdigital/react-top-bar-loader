import React from 'react'
import PropTypes from 'prop-types'

let INTERNVAL_UID
let TIMER_UID

class TopBarLoader extends React.Component {
  static propTypes = {
    goToPercentage: PropTypes.number.isRequired,
    incrementInterval: PropTypes.number,
  }

  static defaultProps = {
    goToPercentage: -1,
    incrementInterval: 500,
  }

  state = {
    currentPercentage: this.props.percent || -1,
  }

  regularlyIncreaseBar = () => {
    let { currentPercentage } = this.state
    const nextPercentage =
      currentPercentage + 1 < 99 ? currentPercentage + 1 : 99
    this.setState({
      currentPercentage: nextPercentage,
    })
  }

  initializePageLoader = goToPercentage => {
    const isPercentageUnderLimit = goToPercentage >= 0 && goToPercentage < 99
    const isLoadingComplete = goToPercentage >= 100

    if (isPercentageUnderLimit) {
      INTERNVAL_UID = setInterval(
        this.regularlyIncreaseBar,
        this.props.incrementInterval
      )
    }

    if (isLoadingComplete) {
      this.setState(
        {
          currentPercentage: 99.9,
        },
        () => {
          TIMER_UID = setTimeout(() => {
            this.setState({
              currentPercentage: -1,
            })
          }, 400)
        }
      )
    } else {
      this.setState({
        currentPercentage: goToPercentage,
      })
    }
  }

  componentDidMount() {
    const { goToPercentage } = this.props
    this.initializePageLoader(goToPercentage)
  }

  componentDidUpdate(prevProps) {
    const { goToPercentage, incrementInterval } = this.props
    const {
      goToPercentage: prevGoToPercentage,
      incrementInterval: previncrementInterval,
    } = prevProps

    if (
      prevGoToPercentage !== goToPercentage ||
      previncrementInterval !== incrementInterval
    ) {
      if (INTERNVAL_UID) {
        clearInterval(INTERNVAL_UID)
      }
      if (TIMER_UID) {
        clearTimeout(TIMER_UID)
      }

      this.initializePageLoader(goToPercentage)
    }
  }

  componentWillUnmount() {
    if (INTERNVAL_UID) {
      clearInterval(INTERNVAL_UID)
    }
    if (TIMER_UID) {
      clearTimeout(TIMER_UID)
    }
  }

  render() {
    const { currentPercentage } = this.state
    const widthPercentage = {
      width: `${currentPercentage < 0 ? 0 : currentPercentage}%`,
    }
    const styleForHiding = {
      opacity: '0',
      visibility: 'hidden',
      zIndex: '-100000',
    }
    const shouldHideBar = currentPercentage < 0 || currentPercentage >= 100
    const applyHidingStylesIfApplicable = shouldHideBar ? styleForHiding : {}

    return (
      <div
        className="react-top-bar-loader-container"
        style={applyHidingStylesIfApplicable}
      >
        <div className="react-top-bar-loader-width" style={widthPercentage} />
      </div>
    )
  }
}

export default TopBarLoader
