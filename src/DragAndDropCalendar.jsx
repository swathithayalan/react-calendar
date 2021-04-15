import React, {useState} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

const DragAndDropCalendarPage = (props) => {

    const [eventsList, setEventsList] = useState([
        {
          id: 0,
          title: "All Day Event very long title",
          allDay: true,
          start: new Date(2021, 3, 0),
          end: new Date(2021, 3, 1)
        },
        {
          id: 1,
          title: "Long Event",
          start: new Date(2021, 3, 7),
          end: new Date(2021, 3, 10)
        }]);

    const moveEvent = ({ event, start, end }) => {
        
            const idx = eventsList.indexOf(event);
            const updatedEvent = { ...event, start, end };
        
            const nextEvents = [...eventsList];
            nextEvents.splice(idx, 1, updatedEvent);
        
            setEventsList(nextEvents);
          }

    const resizeEvent = (resizeType, { event, start, end }) => {
            const nextEvents = eventsList.map(existingEvent => {
              return existingEvent.id === event.id
                ? { ...existingEvent, start, end }
                : existingEvent;
            });

            setEventsList(nextEvents);
          };

    return (
        <div style={{ height: 700 }}>
            <DragAndDropCalendar
            localizer={localizer}
            selectable
            events={eventsList}
            onEventDrop={moveEvent}
            resizable
            onEventResize={resizeEvent}
            defaultView={'month'}
            defaultDate={new Date()}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            />
        </div>
    );
}
export default DragAndDropCalendarPage;