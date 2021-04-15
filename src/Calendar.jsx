import React from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
const localizer = momentLocalizer(moment)

const CalendarPage = () => {
    return (
        <div style={{ height: 700 }}>
    <Calendar
    localizer={localizer}
      events={[
        {
          'title': 'My event',
          'allDay': false,
          'start': new Date(2021, 3, 4, 10, 0), // 10.00 AM
          'end': new Date(2021, 3, 4, 14, 0), // 2.00 PM 
        }
      ]}
    />
  </div>
    );
}

export default CalendarPage;