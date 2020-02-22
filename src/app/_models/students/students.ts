export class Student {
    constructor(
        public _id: number,
        public FullName: string,
        public NationalID: number,
        public Password: number,
        public Adress: string,
        public PhoneNumber: number,
        public Class: string,
        public Degree: [
            // {subjectNasme:"",degree:""},{}... 
        ],

    ) { }
}
