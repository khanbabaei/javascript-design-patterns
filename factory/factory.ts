import Designer from "./designer";
import Developer from "./developer";
import Doctor from "./doctor";
import Person from "./person";

function CreatePerson (role: string): Person {
    let pr: Person;

    if (role === 'developer') {
      pr = new Developer();
    } else if (role === 'designer') {
      pr = new Designer();
    } else if (role === 'doctor') {
      pr = new Doctor();
    }
    
    return pr;
}

export default CreatePerson;