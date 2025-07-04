export const Practices =()=>{
    const students =[6,8];
    return (
        <>
            <p>{!students.length && "no students found"}</p>
            <p>{Boolean(students.length) && "no students found"}</p>
            <p>Numbers of Students :{students.length}</p>
         </>

    );
};