// Top heading
fetch('https://gnews.io/api/v4/top-headlines?&token=8463347e789cd1ef9b0580044a41bc56')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var array = data.articles;
        var htmls = array.map(function(param){
            return `<div class="rows">
                        <div class="col-5"><img src="${param.image}"></div>
                        <div class="col-7"><a href="${param.url}" target="_blank"><h2>${param.title}</h2></a>
                            <p><i>${param.publishedAt}</i></p>
                            <p>${param.content}</p>
                            <p>${param.description}</p>
                            </div>
                    </div>`
        });
            var html = htmls.join('');
            document.getElementById('tvmnews').innerHTML = html;     
    });

// Search
function fetchSearch(postSearch, langs, fromDate, toDate){
        fetch(`https://gnews.io/api/v4/search?q=${postSearch}&${langs}&${fromDate}&${toDate}&token=8463347e789cd1ef9b0580044a41bc56`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var arrays = data.articles;
                var tvmSearchs = arrays.map(function(params){
                    return `<div class="rows">
                                <div class="col-5"><img src="${params.image}"></div>
                                <div class="col-7"><a href="${params.url}" target="_blank"><h2>${params.title}</h2></a>
                                    <p><i>${params.publishedAt}</i></p>
                                    <p>${params.content}</p>
                                    <p>${params.description}</p>
                                    </div>
                            </div>`
                });
                var tvmSearch = tvmSearchs.join('');
                document.getElementById('tvmnews').innerHTML = tvmSearch;
                document.getElementById('post-search').value = "Điều ước tiếp theo là gì ?";
                document.getElementById('fromDate').value = "";
                document.getElementById('toDate').value = "";
            });
};
//func fetchSearch được gọi ra sau khi sự kiện click vào nút button xảy ra
// viết tường minh sự kiện click
var submitClick = document.getElementById('search');
var timkiem = function(){
    var postSearch = document.getElementById('post-search').value;
    var langs = document.getElementById('languages').value;
    var fromDate = document.getElementById('fromDate').value;
    var toDate = document.getElementById('toDate').value;
    fetchSearch(postSearch, langs, fromDate, toDate); 
};
submitClick.addEventListener('click', timkiem);


// viết gọn lại một chút
// var submitClick = document.getElementById('search');
// submitClick.addEventListener('click',function(){
//     var postSearch = document.getElementById('post-search').value;
//     var langs = document.getElementById('languages').value;
//     fetchSearch(postSearch, langs);
// });


