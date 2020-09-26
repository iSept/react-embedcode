import { useMemo } from 'react'

import { useScript } from './useScript'

export default (script = '', onLoad = () => null) => {
  const status = useMemo(() => useScript(script))

  if (status === 'ready') {
    onLoad()
  }

  return [status]
}
