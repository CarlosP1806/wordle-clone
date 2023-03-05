import React, { useEffect } from 'react'

export default function Message({
  message,
  visible
}) {

  return (
    <div className={`message ${visible ? 'active' : ''}`}>{message}</div>
  );
}
