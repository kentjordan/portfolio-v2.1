import styled from 'styled-components'

import BgHome from 'assets/bg-home.png'
import Page from 'components/containers/styled/Page.styled'

const _Home = styled(Page)`

  background-image: url(${BgHome});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;

  justify-content: center;
  align-items: center;
  
  
`
export default _Home;