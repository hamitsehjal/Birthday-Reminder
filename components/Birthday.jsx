import Image from "next/image";

export default function Birthday({props}){


    const {name,image,birthday}=props;
    console.log(image)
   return(<>
   <div className=" max-w-sm mx-auto my-5 bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="pl-2 shrink-0 shadow-lg">
   {/* <img className="h-12 w-32" src="../public/barun.jpg" alt="{name}"/> */}
   <Image width={100} height={100} src={image} alt={name}/>
   </div>
    <div className="flex-col p-6">
        <h1>{getAge(birthday)}</h1>
        <p>{name}</p>
        <p>{birthday}</p>
    </div>
   </div>
   </>)


}

const getAge=(dateString)=>{
    const today=new Date();
    const currentDay=Math.round(today.getUTCDay()+today.getTimezoneOffset()/60/24);
    const currentMonth=today.getUTCMonth();

    const date=new Date(dateString);
    const day=Math.round(date.getUTCDate()+date.getTimezoneOffset()/60/24);
    const month=date.getUTCMonth();

   return day;

}