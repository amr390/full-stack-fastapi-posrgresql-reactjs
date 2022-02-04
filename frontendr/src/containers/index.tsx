import React, { MouseEventHandler, useEffect, useRef } from 'react'

interface LayoutProps {
  children: any
  remove: MouseEventHandler<Element>
}

const Notification: React.FC<LayoutProps> = ({ children, remove }) => {
  const removeRef = useRef()
  removeRef.current = remove

  useEffect(() => {
    const duration = 5000
    const id = setTimeout(
      () => removeRef.current(),
      duration
    )

    return () => clearTimeout(id)
  }, [])

  return (
    <div className='toast'>
      <div className='toast__text'>{children}</div>
      <div>
        <button onClick={remove} className='toast__close-btn'>
          x
        </button>
      </div>
    </div>
  )
}

export default Notification
