import Birthday from "./Birthday";

// returns true if today is person's birthday
const isBirthday=(dateString)=>{
    const today=new Date();
    const currentDay=today.getDate();
    const currentMonth=today.getUTCMonth();
    const currentYear=today.getUTCFullYear();

    const date=new Date(dateString);
    const day=Math.round(date.getUTCDate()+date.getTimezoneOffset()/60/24);
    const month=date.getUTCMonth();
    const year=date.getUTCFullYear();

    // console.log("Current Day is " +currentDay)
    // console.log("Current month is "+currentMonth)
    // console.log("Day is "+month)
    // console.log("Day is "+day)
    return (month==currentMonth&&day==currentDay)

    
}

export default function Today({props})
{
    const {name,image,birthday}=props;
    console.log(isBirthday(birthday))
    if(isBirthday(birthday))
    {
       return(<Birthday props={props}/>)
    }
    
}