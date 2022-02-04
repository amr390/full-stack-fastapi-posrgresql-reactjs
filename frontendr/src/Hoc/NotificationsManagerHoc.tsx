import React, { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'

import NotificationsContext from './context/NotificationsContext'
import Notification from './containers/Notification'

const generateUEID = () => {
  let first = (Math.random() * 46656) | 0
  let second = (Math.random() * 46656) | 0

  first = ('000' + first.toString(36)).slice(-3)
  second = ('000' + first.toString(36)).slice(-3)

  return first + second
}

const withNotificationsManagerProvider = (Component) => {
  WithNotificationsManagerProvider = (props) => {
    const [notifications, setNotifications] = useState([])
    const add = (content) => {
      const id = generateUEID()

      setNotifications([...notifications, { id, content }])
    }
    const remove = (id) =>
      setNotifications(notifications.filter((n) => n.id !== id))
    const providerValue = useMemo(() => {
      return { add, remove }
    }, [notifications])

    return (
      <NotificationsContext.Provider value={providerValue}>
        <Component {...props} />

        {createPortal(
          <div className='toasts-wrapper'>
            {notifications.map((n) => (
              <Notification key={n.id} remove={() => remove(n.id)}>
                {n.content}
              </Notification>
            ))}
          </div>,
          document.body
        )}
      </NotificationsContext.Provider>
    )
  }

  return withNotificationsManagerProvider
}

export default withNotificationsManagerProvider
