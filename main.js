// Make an object with personality traits
var traitsObject = [
    {trait: "effective customer service skills", other: [ 
        "customer",
        "shopper",
        "client",
        "people",
        "public",
        "energetic"
    ], enabled: false},
    {trait: "proficient oral and written communication skills", other: [
        "communicat",
        "talk",
        "sales",
    ], enabled: false},
    {trait: "excellent organizational skills", other: [
        "organiz",
        "manage",
        "detail",
        "inventory"
    ], enabled: false},
    {trait: "the ability to quickly adapt to change and transition smoothly", other: [
        "adapt",
        "fast-paced",
        "pace"
    ], enabled: false},
    {trait: "profound leadership skills", other: [
        "leader",
        "initiative",
        "drive",
        "focus",
        "proactive"
    ], enabled: false},
    {trait: "valuable teamwork skills", other: [
        "team",
        "cooperat",
        "collaborat"
    ], enabled: false}
]

var app = new Vue({
    el: "#paragraph",
    data: {
        str: "",
        company: "",
        position: "",
        trait: [],
        string: ""
    },
    methods: {
        generate: function() {
            var newStr, newPos; // Make a new string that copies lowercase paragraph input
            // ES6 support because my browser is up to date
            // Make sure to list this in readme.md ^
            if (this.trait.length < 3) {
                // Nested for to iterate through traitsObjects
                for (var i = 0; i < traitsObject.length; i++) {
                    
                    for (var j = 0; j < traitsObject[i].other.length; j++) {
                        newStr = this.str.toLowerCase();
                        // Condition that checks if trait is in paragraph
                        // Also checks if this trait is already enabled, if so it won't be
                        // appended again for redundancy reasons
                        if (newStr.includes(traitsObject[i].other[j]) && traitsObject[i].enabled === false) {

                            // Enable trait and push to trait array
                            traitsObject[i].enabled = true;
                            this.trait.push(traitsObject[i].trait);    
                        }
                    }
                }
            }

            // Make position all lowercase for grammatical purposes
            newPos = this.position.toLowerCase();
            this.string = "Hayden Hoffman\n190 Forum Drive\nMississauga, ON, L4Z 3Y2\n(289)981-3238\nhaydenhoffman@gmail.com\n\n" + this.company + "\n\nDear Hiring Manager, \n\nThank you for the opportunity to apply for the " + newPos + " role at your company. After reviewing your job description, it is clear that you are looking for a candidate that is extremely familiar with the responsibilities associated with the role, and can perform them confidently. Given these requirements, I am certain that I have the necessary skills to successfully do the job adeptly and perform above expectations.\n\nI am a proactive college student (BEsc in Engineering) currently attending The University of Western Ontario. During the course of my academic career, I also managed to accrue nearly two and a half years of work experience. I had the privilege of working for Buy N Sell City as a cashier and stock associate, where I learned valuable professional skills such as " + this.trait[0] + ", " + this.trait[1] + " and " + this.trait[2] + ". In both my academic and professional life, I have been consistently praised as hardworking and efficient by my professors and peers. Whether working on academic, extracurricular, or professional projects, I demonstrate a proven desire to ensure expectations are exceeded, a high degree of problem solving skills and a strong attention to detail, which I hope to leverage into the " + newPos + " role at " + this.company + ". \n\nAfter reviewing my resume, I hope you will agree that I am the type of competent and competitive candidate you are looking for. I look forward to elaborating on how my specific skills and abilities will benefit your organization. Please contact me at (289)981-3238 or via email at haydenhoffman@gmail.com to arrange for a convenient meeting time. \n\nThank you for your consideration, and I look forward to hearing from you soon.\n\nSincerely,\nHayden Hoffman.";
        }
    }
})

