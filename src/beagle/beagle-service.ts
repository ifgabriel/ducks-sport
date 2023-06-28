import { createBeagleUIService } from '@zup-it/beagle-react'

import { Card, Container, ExceptionState, Grid, Input, Skeleton, Text } from '../components-ui'

export default createBeagleUIService({
  baseUrl: '/pages',
  components: {
    'custom:text': Text,
    'custom:card': Card,
    'custom:input': Input,
    'custom:container': Container,
    'custom:grid': Grid,
    'custom:skeleton': Skeleton,
    'custom:exceptionState': ExceptionState
  },
})
