/*
Instructions:
1. Update the parameter below with a comma-separated list of student @stanford.edu email address.
*/
var commaSeparatedListOfEmails = "apluslatex@stanford.edu,blurryphonephotos@stanford.edu,regraderequester@stanford.edu";
/*
2. Open up Chrome and navigate to the Gradescope webpage listing all the students' homework submission for the specific
question you would like to grade. For example, the URL for HW1 Question 1 is:
https://gradescope.com/courses/5731/questions/182511/submissions
3. Type "javascript:" (without the quotation marks) in the browser URL bar.
4. Copy this entire script, and paste it after the "javascript:" that you just typed in the URL bar.
5. Hit enter.
*/

var alertMode = true;
var emails = new Set(commaSeparatedListOfEmails.split(","));
var aTags = document.getElementsByTagName("a");
var numFound = 0;

/* Iterate over all anchor tags in the page. */
for (var i = 0; i < aTags.length; i++) {
	var aTagContent = aTags[i].textContent;

	/* Skip the current anchor tag if its innerHTML does not contain a Stanford email address, open parenthesis, and 
	closed parenthesis. */
 	if (aTagContent.indexOf("@stanford.edu") == -1 || aTagContent.indexOf("(") == -1 || aTagContent.indexOf(")") == -1) {
 		continue;
 	}

 	/* Extract the email address, which should be surrounded by parenthesis, from the anchor tag. */
 	var email = aTagContent.substring(aTagContent.indexOf("(") + 1, aTagContent.indexOf(")"));

 	/* Skip the current anchor tag if its email address is not in the set of desired email addresses. */
 	if (!emails.has(email)) {
 		continue;
 	}

 	/* Open the current anchor tag's link in a new tab. */
 	window.open(aTags[i].href, "_blank");
 	numFound++;
}

/* Log and (optionally) alert the results. */
var resultsStatement = "Found " + numFound.toString() + " of " + emails.size.toString() + " emails.";
console.log(resultsStatement);
if (alertMode) {
	alert(resultsStatement);
}