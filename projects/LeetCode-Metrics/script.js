document.addEventListener("DOMContentLoaded", function(){
    const searchBtn = document.getElementById("search-btn");
    const userInput = document.getElementById("user-input");
    const statContainer = document.querySelector(".stat-container");
    const easyProgress = document.querySelector(".easy-progress");
    const medProgress = document.querySelector(".med-progress");
    const hardProgress = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const medLabel = document.getElementById("med-label");
    const hardLabel = document.getElementById("hard-label");
    const statCardContainer = document.querySelector(".stats-card");

    const summaryContainer = document.querySelector(".summary-container");
    const totalSolvedText = document.getElementById("total-solved");
    const profileLink = document.getElementById("profile-link");
    const lastUpdatedText = document.getElementById("last-updated");


    function validUsername(username){
        if(username.trim() == ""){
            alert("Username should not be empty!");
            return false;
        } 
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatch = regex.test(username);
        if(!isMatch){
            alert("Invalid username!");
        }
        return isMatch;
    }

    async function fetchDetails(username){
        // ❌ Do NOT use this (LeetCode blocks direct requests & proxy CORS now gives 403)
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        // const targetUrl = 'https://leetcode.com/graphql/';
        // const myHeaders = new Headers();
        // myHeaders.append("content-type", "application/json");

        // const graphql = JSON.stringify({
        //     query: `
        //     query userSessionProgress($username: String!) {
        //         allQuestionsCount {
        //             difficulty
        //             count
        //         }
        //         matchedUser(username: $username) {
        //             submitStats {
        //                 acSubmissionNum {
        //                     difficulty
        //                     count
        //                     submissions
        //                 }
        //             }
        //         }
        //     }
        //     `,
        //     variables: { "username": `${username}` }
        // });

        // const requestOptions = {
        //     method: "POST",
        //     headers: myHeaders,
        //     body: graphql,
        //     redirect: "follow"
        // };

        // ✅ Use this working endpoint instead
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchBtn.textContent = "Searching...";
            searchBtn.disabled = true;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch the user details");
            }

            const data = await response.json();
            console.log("Logging data:", data);

            displayUserData(data, username);
        } catch (error) {
            statContainer.innerHTML = '<p>No data found!</p>';
        } finally {
            searchBtn.textContent = "Search";
            searchBtn.disabled = false;
        }
    }

    function displayUserData(data, username){

        document.querySelectorAll('.progress-item').forEach(item => {
            item.style.display = 'flex';
        });
        

        easyProgress.style.display = "flex";
        medProgress.style.display = "flex";
        hardProgress.style.display = "flex";

        easyLabel.textContent = `Easy: ${data.easySolved}/${data.totalEasy}`;
        medLabel.textContent = `Medium: ${data.mediumSolved}/${data.totalMedium}`;
        hardLabel.textContent = `Hard: ${data.hardSolved}/${data.totalHard}`;
    
        const easyPercent = data.totalEasy ? (data.easySolved / data.totalEasy) * 100 : 0;
        const medPercent = data.totalMedium ? (data.mediumSolved / data.totalMedium) * 100 : 0;
        const hardPercent = data.totalHard ? (data.hardSolved / data.totalHard) * 100 : 0;
    
        easyProgress.style.setProperty("--progress-degree", `${(easyPercent / 100) * 360}deg`);
        medProgress.style.setProperty("--progress-degree", `${(medPercent / 100) * 360}deg`);
        hardProgress.style.setProperty("--progress-degree", `${(hardPercent / 100) * 360}deg`);
    
        statContainer.style.display = "block";


        // Show summary text below
        const totalSolved = data.easySolved + data.mediumSolved + data.hardSolved;
        const totalQuestions = data.totalEasy + data.totalMedium + data.totalHard;
        totalSolvedText.textContent = `Solved ${totalSolved} out of ${totalQuestions} questions overall.`;

        // Profile link
        profileLink.href = `https://leetcode.com/${username}/`;
        profileLink.textContent = `View ${username}'s LeetCode Profile`;

        // Last updated time
        const now = new Date();
        lastUpdatedText.textContent = `Last updated: ${now.toLocaleString()}`;

        summaryContainer.style.display = 'block';



        // Highlight success with glow
        const container = document.querySelector('.container');
        container.classList.add('flash-success');
        setTimeout(() => {
            container.classList.remove('flash-success');
        }, 1000);

    }
    

    searchBtn.addEventListener('click', function(){
        const username = userInput.value;
        if(validUsername(username)){
            fetchDetails(username);
        }
    });
});
