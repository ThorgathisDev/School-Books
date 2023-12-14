var CrmLink = "https://strapi.thorgathis.online:32600/api/library-api/";

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
    xhr.DONE;
};

var total;

getJSON(CrmLink, function (err, data) {
    if (err !== null) {
    } else {
        // dc = document.getElementById("display");
        // dc.innerHTML =
        //     "total: " + data.meta.pagination.total;

        // <div class="col">
        //     <div class="card card-dark border-light">
        //         <img
        //             src="https://pdf.thorgathis.online/.images/algebra-prev.png"
        //             class="card-img-top"
        //         />

        total = data.meta.pagination.total;
        for (let i = 1; i <= total; i++) {
            getJSON(CrmLink + i, function (err, data) {
                if (err !== null) {
                    alert("Something went wrong: " + err);
                } else {
                    if (data.data.attributes.Viewable == true) {
                        pastePoint = document.querySelector("div.display");

                        colElement = document.createElement("div");
                        colElement.classList.add("col");

                        mainElement = document.createElement("div");
                        mainElement.classList.add(
                            "card",
                            "card-dark",
                            "border-light"
                        );
                        //         <div class="card-body">
                        //             <h5 class="card-title col-gray-white text">Алгебра</h5>
                        //             <p class="card-text col-gray-white text">Учебник (2019)</p>
                        //             <a
                        //                 target="_blank"
                        //                 href="https://pdf.thorgathis.online/Algebra-8-2019.pdf"
                        //                 class="btn btn-secondary"
                        //             >
                        //                 Открыть
                        //             </a>
                        //             <a
                        //                 style="
                        //                             padding-left: 10px;
                        //                             color: red;
                        //                             font-size: 24px;
                        //                         "
                        //             >
                        //                 !!! СТАРАЯ ВЕРСИЯ
                        //             </a>
                        //         </div>
                        //     </div>
                        // </div>;

                        dataElement = document.createElement("div");
                        dataElement.classList.add("card-body");

                        mainElement.innerHTML +=
                            `<img class="card-img-top" src="` +
                            data.data.attributes.ImageUrl +
                            `" />`;

                        dataElement.innerHTML +=
                            `<h5 class="card-title col-gray-white text">` +
                            data.data.attributes.Title +
                            "</h5>";
                        dataElement.innerHTML +=
                            '<p class="card-text col-gray-white text">' +
                            data.data.attributes.Description +
                            "</p>";

                        dataElement.innerHTML +=
                            '<a class="btn btn-secondary" target="_blank" href="' +
                            data.data.attributes.DownloadUrl +
                            '">Открыть </a>';

                        if (data.data.attributes.Attention == true) {
                            dataElement.innerHTML +=
                                '<a style="padding-left: 10px; color: red; font-size: 24px;">!!! СТАРАЯ ВЕРСИЯ</a>';
                        }

                        mainElement.insertBefore(dataElement, null);
                        colElement.insertBefore(mainElement, null);
                        pastePoint.insertBefore(colElement, null);
                    }
                }
            });
        }
    }
});
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

// sleep(2000);

// var countDownDate = new Date("11 20 2023").getTime();

// var now = new Date().getTime();
// var timeleft = countDownDate - now;

// var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
// document.getElementById("days").innerHTML = days + " Дней";

// if (timeleft < 0) {
//     document.getElementById("days").innerHTML = "";
//     document.getElementById("days").innerHTML = "< 1 Дня";
// }
