### **Preprocessing**

* ###### **Converting categorical fields into filterable values**
* **Adding action\_level (1-10)**
* **Adding complexity (1-10)**
* **Cleaning text fields (Title, Description)**
* **Ensuring all movies have numeric year and rating values**



### **Algorithm Choice**

**I implemented two machine learning components:**

* **Clustering (unsupervised learning)**
* **Prediction (linear regression)**



### **Training**

**This is a simulated ML model, so no real training occurs.**

* **The clustering thresholds are manually defined.**
* **The prediction uses fixed values**
* **The system behaves like a trained model, but without training data.**



### **Results**

**i. The system filters each movie by genre.**

**ii. Each movie is assigned:**

* **A cluster**
* **A predicted score**

**iii. The filtered movies are displayed as styled cards.**

**iv. The user can see:**

* **Title**
* **Genre**
* **Year**
* **Rating**
* **Description**
* 

### **How The Model Works**

**The model in my system works by analyzing movie data to product recommendations. When the user selects a genre, the system loads the movie dataset from a JSON file and filters it to only include movies from that genre. Each movie goes through two AI processes:**

* **Clustering: Based on the score from action + complexity, each movie is assigned to a cluster.**
* **Prediction: Popularity prediction of a movie from this formula: rating \* 10 + complexity \* 0.5.**
* 

### **Why I chose this technique**

**Because the clustering and prediction formulas allow me to:**

* **Feature engineering**
* **Decision-making logic**
* **Unsupervised Learning**
* **Regression**
* 

### **How the database connects to AI**

**The database is a JSON file that contains all the movie data**

**i. loadMovies() fetches the JSON file and converts it into a JavaScript array.**

**ii. User selects a genre from the dropdown list.**

**iii. The system filters the dataset to only include the movies from that genre.**

**iv. The filtered movies are sent to the AI functions:**

* **clusterMovies()**
* **predictPopularity()**

**v. The movie objects are shown to the user.**

### **Accuracy**

**The accuracy is limited because the system uses a simple rule: score = action\_level + complexity.**

**The predicted popularity score: rating \* 10 + complexity \* 0.5.**



### **Limitations**

**Despite good performance, the system has a few limitations:**



**AI Limitations**

* **Clusters are based on fixed thresholds.**
* **Predictions are simple formulas.**



**Data Limitations**

* **The dataset is small and fictional.**
* **No real user ratings.**



**Functional Limitations**

* **Only one genre can be selected at a time.**
* **Only the first 5 movies are shown.**



### **AI Improvements**

* **Replace the formula with a real regression model.**
* **Use K-Means clustering instead of fixed thresholds.**



### **Data Improvements**

* **Expand the dataset with real movie data.**
* **Add more features (actors, keywords, popularity).**



### **UI/UX Improvements**

* **Add sorting options (highest rating, newest, most popular).**
* **Add more visual effects.**





### **AI Assistance**

**I used AI to support me during the development of this project. The AI helped me with:**



**clarifying the assignment requirements**



**explaining how to structure Task 4 and Task 5**



**helping me describe how my AI model works**



**suggesting wording for accuracy, performance, limitations, and improvements**



**helping me format code snippets clearly**



**giving guidance on UI adjustments (CSS, Bootstrap, layout)**



**helping me understand how to present example inputs and outputs**



**The AI did not write the entire project for me.**

**I wrote the code myself, built the system, and made the final decisions.**

**The AI was used only for explanations, feedback, and improving clarity.**