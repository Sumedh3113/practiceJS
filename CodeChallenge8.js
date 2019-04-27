// data of 3 parks and 4 streets
class Report {
    
    constructor(name, year){
        this.name = name;
        this.year = year;
        
    };
    
    
    ParksInfo(number, area){
        
        const density = (number/area);
        console.log(`${this.name} has density of ${density} per sq km`); 
        
    }
    
    maxTrees(number){
        if(number > 1000){
            console.log(`${this.name} has more than 1000 trees`)
            
        }
        
    }
    
    averagestore(){
        let avg = new Map();
       const date = new Date('April 27, 2019');
        //console.log("Todays date " + Date.now());
        
        avg.set(this.name, date.getFullYear() - this.year);
        sum += avg.get(this.name);
        count++; 
    if(count === 3){
        let result = sum/3;
        console.log(`Avg agr of 3 parks is ${result} years`);
                    }    
               }
    
    StreetInfo(size){
        console.log(`${this.name} built in ${this.year} and is ${size} street`);
        
    }
    
    StreetAvg(size){
        let avg = new Map();
       const date = new Date('April 27, 2019');
        //console.log("Todays date " + Date.now());
        
        avg.set(this.name, size);
        sum2 += avg.get(this.name);
        count2++; 
    if(count2 === 4){
        let result = sum2/4;
        console.log(`all the 4 streets have total length of ${sum2} with average of ${result} km`);
                    }    
               }
    
}



let count = 0;
let count2= 0;
let sum  = 0;
let sum2  = 0;
/*---------------------Park Objects-----------------------------------*/
// avg age ans = 77
const green = new Report("green", 1956);//63
const national = new Report('national', 1945);//74
const oak = new Report('oak', 1925);//94

console.log("-----Park----------");
// Average
green.averagestore();
national.averagestore();
oak.averagestore();

// density
green.ParksInfo(2000, 120);
national.ParksInfo(700, 110);
oak.ParksInfo(900, 80);
// max trees
green.maxTrees(2000);
national.maxTrees(700);
oak.maxTrees(900);

/*-----------------------------------Street Objects -------------------------------*/
const ocean = new Report("ocean", 1956);
const everGreen = new Report('Ever green', 1945);
const fourth = new Report('fourth', 1925);
const sunset = new Report('sunset', 1925);
console.log("----------Street--------------");
//avg
ocean.StreetAvg(100);
everGreen.StreetAvg(200);
fourth.StreetAvg(300);
sunset.StreetAvg(400);

//Size
ocean.StreetInfo('big');
everGreen.StreetInfo('tiny');
fourth.StreetInfo('huge');
sunset.StreetInfo('small');
