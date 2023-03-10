

export default function Birthday({props}){
    const {name,image,birthday}=props;
   return(<>
   <div className=" max-w-sm  overflow-hidden flex mx-auto justify-center my-5 bg-indigo-900 rounded-xl shadow-lg  space-x-4">
    <div className="pl-2 shadow-lg rounded-3xl">
    {/* added a tons of attributes(pun intended) -> priority and style to fix DOM warnings */}
   <img className="rounded-full pt-2 w-full"   src={image} alt={name} priority="high"/>
   </div>
    <div className="flex flex-col p-6 max-w-md gap-12">
        <h1 className="text-7xl font-bold font-serif text-yellow-500 text-center mt-2">{getAge(birthday)}</h1>

        <p className="text-3xl font-bold font-serif text-slate-50 text-center">{name}</p>
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