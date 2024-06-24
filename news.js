document.addEventListener("DOMContentLoaded", function() {
	const newsItems = document.querySelectorAll(".news-item");
	let visibleNewsCount = 3;
	const loadMoreButton = document.getElementById("loadMore");
	
        function showNews(count) {
            newsItems.forEach((item, index) => {
                if (index < count) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
            if (count >= newsItems.length) {
                loadMoreButton.style.display = "none";
            }
        }
		
        loadMoreButton.addEventListener("click", function() {
            visibleNewsCount += 3;
            showNews(visibleNewsCount);
        });

        showNews(visibleNewsCount);
    });