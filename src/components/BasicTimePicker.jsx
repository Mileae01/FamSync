import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {Clock} from "react-bootstrap-icons";

export default function BasicDatePicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label={
                <>
                    <Clock/>
                    <span>Pick a time</span>
                </>
            }/>
        </LocalizationProvider>
    );
}