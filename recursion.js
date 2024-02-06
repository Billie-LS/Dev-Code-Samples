/*
Developer: Former LaunchCoder
Current Role:  Software Development Supervisor
Language: JavaScript
Topic Illustrated: Recursion
*/


// EXAMPLE

// Define function getAllResults
function getAllResults() {

    // Check if nextPage is not null and allowAPI flag is true
    if (this.nextPage != null && this.allowAPI == true) {

        // Make an HTTP GET request using axios
        axios.get(this.nextPage).then((res) => {

            // Concatenate current search results with results from response
            let results = this.searchResults.concat(res.data.results);

            // Update searchResults property with concatenated results
            this.searchResults = results;

            // Update nextPage property with value from response
            this.nextPage = res.data.next;

            // Check if nextPage is not null and allowAPI flag true recursively call getAllResults
            if (this.nextPage != null && this.allowAPI == true) {
                this.getAllResults();
            }
        });
    }
}