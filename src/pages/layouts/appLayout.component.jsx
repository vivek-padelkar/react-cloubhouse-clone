import React from 'react'

const AppLayout = ({ children }) => {
  return (
    <div className="app_layout" style={{ width: '100%', height: '100vh' }}>
      {children}
    </div>
  )
}

export default AppLayout
