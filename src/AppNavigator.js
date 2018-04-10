import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store'
import LoginContainer from './containers/LoginContainer'
import Home from './screens/Home'
import Enrollment from './screens/Enrollment'
import EnrollBeneficiaryWithoutIDPoor from './screens/EnrollBeneficiaryWithoutIDPoor'
import ClaimInitiated from './screens/ClaimInitiated'
import BeneficiaryReview from './screens/BeneficiaryReview'
import IDPoorResults from './screens/IDPoorResults'
import IssueCCTCard from './screens/IssueCCTCard'
import Settings from './screens/Settings'
import SearchBeneficiaryOptions from './screens/SearchBeneficiaryOptions'
import SearchBeneficiary from './screens/SearchBeneficiary'
import SearchBeneficiaryResult from './screens/SearchBeneficiaryResult'

const AuthNavigator = StackNavigator(
  {
    LoginContainer: { screen: LoginContainer },
    Home: { screen: Home },
    // To be removed
    Enrollment: { screen: Enrollment },
    EnrollBeneficiaryWithoutIDPoor: { screen: EnrollBeneficiaryWithoutIDPoor },
    ClaimInitiated: { screen: ClaimInitiated },
    BeneficiaryReview: { screen: BeneficiaryReview },
    IDPoorResults: { screen: IDPoorResults },
    IssueCCTCard: { screen: IssueCCTCard },
    Settings: { screen: Settings },
    SearchBeneficiaryOptions: { screen: SearchBeneficiaryOptions },
    SearchBeneficiary: { screen: SearchBeneficiary },
    SearchBeneficiaryResult: { screen: SearchBeneficiaryResult },
  },
  {
    headerMode: 'none',
  },
)

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Enrollment: { screen: Enrollment },
    EnrollBeneficiaryWithoutIDPoor: { screen: EnrollBeneficiaryWithoutIDPoor },
    ClaimInitiated: { screen: ClaimInitiated },
    BeneficiaryReview: { screen: BeneficiaryReview },
    IDPoorResults: { screen: IDPoorResults },
    IssueCCTCard: { screen: IssueCCTCard },
    Settings: { screen: Settings },
    SearchBeneficiaryOptions: { screen: SearchBeneficiaryOptions },
    SearchBeneficiary: { screen: SearchBeneficiary },
    SearchBeneficiaryResult: { screen: SearchBeneficiaryResult },
  },
  {
    headerMode: 'none',
  },
)

const AppNavigator = (props) => {
  if (!props.user) {
    return (
      <Provider store={store}>
        <AuthNavigator {...props} />
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <HomeNavigator {...props} />
    </Provider>
  )
}

export default AppNavigator
