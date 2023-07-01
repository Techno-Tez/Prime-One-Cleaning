import React, { useState } from 'react'
import PanelContext from "./PanelContext"

const PanelState = (props) => {
    const [drop, setDrop] = useState(false)
  return (
    <PanelContext.Provider value={{drop, setDrop}}>
        {props.children}
    </PanelContext.Provider>
  )
}

export default PanelState