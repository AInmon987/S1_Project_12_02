"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Austin inmon
   Date:   3.1.19
   
   Filename: hg_report.js
	
*/
//Information about the game that is displayed on the page. The title, manufacturer, id, price, platform, esrb, condition have the corresponding varibles that are concatenated with the information. 
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2>" + "<img src='hg_" + itemID + ".png' alt=' " + itemID + "' id='gameImg'/>" + "<table><tr><th>Product ID</th>" + "<td>" + itemID + "</td></tr>" + "<tr><th> List Price </th>" + "<td>" + itemPrice + "</td></tr>" + "<tr><th> Platform </th>" + "<td>" + itemPlatform + "</td></tr>" + "<tr><th> ESRB Rating </th>" + "<td>" + itemESRB + "</td></tr>" + "<tr><th> Condition </th>" + "<td>" + itemCondition + "</td></tr>" + "<tr><th> Release </th>" + "<td>" + itemRelease + "</td></tr></table>" + itemSummary;
//Displays the information in the variable gamereport inside of the article in the innerHTML.
document.getElementsByTagName("article")[0].innerHTML = gameReport;
//The initial value is zero.
var ratingSum = 0;
//The ratingsCount is equal to the ratings array.
var ratingsCount = ratings.length;
//Each time through the loop, the value of the current ratings value is added to the value of the ratings sum var.
for (var i = 0; i < ratings.length; i++) {

    ratingSum += ratings[i];
}
//The rating Avg is equal to the rating sum divided by the ratingsCount values.
var ratingsAvg = ratingSum / ratingsCount;
//The initial text string is set to the html and here adverage is the var rating avg is concatenated to the innerhtml.
var ratingReport = "<h1> Customer Reviews</h1><h2>" + ratingsAvg + " average out of 5 stars (" + ratingsCount + " reviews) </h2>";
//The for loop is set to 0 to 2 and the loop will only show the first three reviews of the authors.
for (var i = 0; i <= 2; i++) {

    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1>" + "<table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>" + "<tr><th>Rating</th><td>";
    //Each time through the for loop, the author will be rated based on a star scale. 
    for (var j = 1; j <= ratings[i]; j++) {
        //putting the star image to the page html.
        ratingReport += "<img src='hg_star.png' />";
    }
    //Added the summaries of the author under the image and will be on the page. 
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
//Displays the information in the variable ratingReport inside of the aside in the innerHTML.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;