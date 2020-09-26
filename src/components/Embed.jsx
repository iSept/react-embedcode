import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { useScript } from '../hooks/useScript'

const Embed = ({
  script = null,
  mount = <span />,
  onLoad = () => null,
  loader = <span />
}) => {
  const status = useMemo(() => useScript(script))

  if (status === 'ready') {
    onLoad()
  }

  return status !== 'ready' ? loader : mount
}

Embed.PropTypes = {
  script: PropTypes.string.isRequired,
  mount: PropTypes.node.isRequired,
  onLoad: PropTypes.func,
  loader: PropTypes.node
}

export default Embed
