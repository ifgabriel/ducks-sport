import { createBeagleUIService } from '@zup-it/beagle-react'

import { Text, Card, Input, Grid } from '../components-ui'

export default createBeagleUIService({
  baseUrl: '/pages',
  components: {
    'custom:text': Text,
    'custom:card': Card,
    'custom:input': Input,
    'custom:grid': Grid,
  },
})
