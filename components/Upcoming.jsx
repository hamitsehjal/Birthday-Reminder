

export default function Upcoming({props}){
    const {name,image,birthday}=props;
   return(<>
   <div className=" max-w-xs  overflow-hidden flex mx-auto justify-center my-1 bg-teal-800 rounded-xl shadow-lg">
    <div className="pl-2 shadow-lg rounded-3xl">
    {/* added a tons of attributes(pun intended) -> priority and style to fix DOM warnings */}
   <img className="rounded-full p-2 w-2/3"   src={image} alt={name} priority="high"/>
   </div>
    <div className="flex flex-col p-6 max-w-md gap-12">
        <h1 className="text-4xl font-bold font-serif text-yellow-500 text-center mt-2">{getAge(birthday)}</h1>

        <p className="text-l font-bold font-serif text-slate-50 text-center">{name}</p>
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