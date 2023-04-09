import { createBeagleUIService } from '@zup-it/beagle-react'

import { Text, Card } from '../components-ui'

export default createBeagleUIService({
  baseUrl: '/pages',
  components: {
    'custom:text': Text,
    'custom:card': Card,
  },
})
