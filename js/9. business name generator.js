//  Business name generator:
    // Adjectives: Crazy, Amazing, Fire
    // Shop Name: Engine, Foods, Garments
    // AnotherWord: Limited, Bros, Hub


// My Business Name Generator.

function decider(fate,w1,w2,w3){
    let part;
    if(fate<=0.33){
        part = w1;
    }
    else if(fate<=0.66 && fate>0.33){
        part = w2;
    }
    else{
        part = w3;
    }

    return part;
}

function generator(){
    let business_name;
    let ans1,ans2,ans3;
    for(let i=0;i<3;i++){
        if(i==0){
            let fate = Math.random();
            ans1 = decider(fate,"Crazy","Amazing","Fire");
        }
        else if(i==1){
            let fate = Math.random();
            ans2 = decider(fate,"Engine","Foods","Garments");
        }
        else{
            let fate = Math.random();
            ans3 = decider(fate,"Limited","Bros","Hub");
        }
    }
    business_name = ans1 + ans2 + ans3;
    return business_name;

}


let decision = confirm('do you want to generate name?');

if(decision){
    result = generator();
    alert(`Your Business name is: ${result}`);
}




