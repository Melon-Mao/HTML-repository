// This is my first JS script

// * Check if the date is 3rd of August and displays a popup


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;


if (day === 3 && month === 8) {
    alert("Happy Watermelon Day!");
}

// If the date is 3rd of August, display in the div with class "time", the text "Happy Watermelon Day!"

if (day === 3 && month === 8) {
    const text_to_add = "It's Watermelon Day!";
    
    const element_to_add = document.createElement("parbitrary");

    // Make the style of the element text black, in a larger font and have padding
    element_to_add.style.color = "black";
    element_to_add.style.fontSize = "2rem";
    element_to_add.style.display = "inline-block";
    element_to_add.style.paddingTop = "1rem";
    element_to_add.innerHTML = text_to_add;
    
    document.querySelector(".time").appendChild(element_to_add);

}
else {
    // Get time until the 3rd of August
    const date_now = new Date();
    const date_watermelon = new Date(date_now.getFullYear(), 7, 3);
    const time_until = date_watermelon - date_now;
    
    // Convert time until to days
    const days_until = Math.ceil(time_until / (1000 * 60 * 60 * 24));
    
    // Display the time until in the div with class "time"

    const text_to_add = "There are " + days_until + " days until Watermelon Day!";
    
    const element_to_add = document.createElement("parbitrary");

    element_to_add.style.color = "black";
    element_to_add.style.display = "inline-block";
    element_to_add.style.paddingTop = "1rem";
    element_to_add.innerHTML = text_to_add;
    
    document.querySelector(".time").appendChild(element_to_add);
    
}

