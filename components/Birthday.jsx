import Image from "next/image";


export default function Birthday({props}){
    const {name,image,birthday}=props;
   return(<>
   <div className=" p-2 max-w-sm mx-auto my-5 bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="pl-2 shrink-0 shadow-lg rounded-3xl">
    {/* added a tons of attributes(pun intended) -> priority and style to fix DOM warnings */}
   <Image className="rounded-full"  style={{ width: "auto", height: "auto" }} width={100} height={100} src={image} alt={name} priority="high"/>
   </div>
    <div className="flex-col p-6">
        <h1>{getAge(birthday)}</h1>
        <p>{name}</p>
    </div>
   </div>
   </>)
}

const getAge=(dateString)=>{
    const today=new Date();
    const currentDay=Math.round(today.getUTCDay()+today.getTimezoneOffset()/60/24);
    const currentMonth=today.getUTCMonth();
    const currentYear=today.getUTCFullYear();

    const date=new Date(dateString);
    const day=Math.round(date.getUTCDate()+date.getTimezoneOffset()/60/24);
    const month=date.getUTCMonth();
    const year=date.getUTCFullYear();

    const age=currentYear-year;


   return age;

}