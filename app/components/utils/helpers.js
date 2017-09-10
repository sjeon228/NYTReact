import axios from "axios";

const nytAPI = "e728dbcb492b40e8868eef1bc0211143";

const helpers = {
    runQuery: (topic, start, end) => {
        console.log(topic, start, end);

        const queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic 
                        + "&begin_date=" + start + "0209&end_date=" + end 
                        + "0204&api-key=" + nytAPI;
        
        return axios.get(queryURL).then((response) => {
            console.log(response);
            return response.data.response;
        });
    },

    getArticles: function() {
        return axios.get("/api");
    },

    postArticles: function(results) {
        console.log("results:", results);
        return axios.post("/api", { 
            title: results[0].headline.main,
            date: results[0].pub_date,
            url: results[0].web_url
        });
    }
};

export default helpers;