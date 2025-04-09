const restarant={
    name:"Doesn't have enough imagination to make some name up",
    'date of creation':" 9th April 2025",
    isOpen:false,
    owner:'Me',
    rating:'5 stars',
    'number of kitchens':10

}

// changing or adding elemenst
restarant.name="Still can't do that";
restarant['isOpen']=true;

let menu;
restarant['menu']=menu;

let partners=null;
restarant['partners']=partners;


//deleting elements
delete restarant['owner'];
delete restarant.rating;

console.log(restarant)