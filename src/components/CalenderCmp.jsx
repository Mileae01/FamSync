import {CaretUp, Calendar} from "react-bootstrap-icons";

const CalenderItems = ["Today", "Next-7-Days","All-Days"]
export default function CalenderCmp() {
    function toggleDisplay() {
        console.log("calender cmp display dropdown");
    }

    return (
        <div className="CalenderCmp">
            <div className="header">
                <div className="title">
                    <Calendar/>
                    <span><p>Calender</p></span>
                </div>
                <div className={"btns"}>
                    <CaretUp onClick={toggleDisplay}/>
                </div>
            </div>
            <div className="calenderItems">
                {CalenderItems.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}