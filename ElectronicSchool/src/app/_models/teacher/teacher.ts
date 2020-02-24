
import   Subject  from "./subject"
export class Teachers {

    constructor(
        public fullName :String,
        public userName :Number,
        public password :String,

        
        public Address :Number,
        public phoneNumber :String,
        public nationalId :String,
        public salary :Number,

    
        public subjects: Subject ,
        public DOH:Date,

    ){}
}
