import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      setNotifications(response.data);
    }
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p> Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias </time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p> Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias </time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p> Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias </time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p> Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias </time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
