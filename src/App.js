import { Fragment } from 'react';
import CalendarPage from './Calendar';
import DragAndDropCalendarPage from './DragAndDropCalendar';

//references:
//http://jquense.github.io/react-big-calendar/examples/index.html
//https://stackoverflow.com/questions/64295252/react-big-calendar-has-no-default-export
//exapmples: https://codesandbox.io/examples/package/react-big-calendar
function App() {
  return (
    <Fragment>
      <h4>Calendar with events</h4>
      <CalendarPage></CalendarPage>
      <h4>Calendar with Drag and Drop Options</h4>
      <DragAndDropCalendarPage></DragAndDropCalendarPage>
      </Fragment>
  );
}

export default App;
