export default function MainCmp({children}){
    return(
        <>
            <ol>
                <li>display by project or time</li>
                <li>check box to complete task</li>
                <li> edit task btn</li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            <div>
                {children}
            </div>
        </>
    )
}