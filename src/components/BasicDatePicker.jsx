import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {CalendarDay} from "react-bootstrap-icons"

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={
            <>
                <CalendarDay/>
                <span>Pick a day</span>
            </>
        } />
    </LocalizationProvider>
  );
}