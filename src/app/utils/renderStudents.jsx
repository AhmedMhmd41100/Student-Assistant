import StudentCard from "../Components/StudentCard"


export function RenderStudents(){
  const subarray=[]
  for(let i=0;i<5;i++){
    subarray.push(
    
      <StudentCard id={i} />
    
    )
  }
 return subarray
 }