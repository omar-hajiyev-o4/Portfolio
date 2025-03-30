import React from 'react';
import './Notification.css';
import { useNotification } from './NotificationContext';

const Notification = () => {
  const { notification, hideNotification } = useNotification();

  if (!notification.visible) return null;

  console.log(notification.type);

  return (
    <div className={`notification ${notification.type}`}>
      <div className="notification-content">
        <span>{notification.message}</span>
        <button onClick={hideNotification} className="close-btn">×</button>
      </div>
    </div>
  );
};

export default Notification;