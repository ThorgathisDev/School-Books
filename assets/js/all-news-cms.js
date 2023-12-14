var CrmLink = "https://strapi.thorgathis.online:32600/api/news-api/";

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

        total = data.meta.pagination.total;
        for (let i = total; i > 0; i--) {
            getJSON(CrmLink + i, function (err, data) {
                if (err !== null) {
                    alert("Something went wrong: " + err);
                } else {
                    if (data.data.attributes.Viewable == true) {
                        var Stp = data.data.attributes.createdAt;

                        var date =
                            Stp.slice(0, 4) +
                            "." +
                            Stp.slice(5, 7) +
                            "." +
                            Stp.slice(8, 10);
                        var time = Stp.slice(11, 13) + ":" + Stp.slice(14, 16);
                        var datetime = date + " " + time;

                        var Stp1 = data.data.attributes.updatedAt;

                        var date1 =
                            Stp1.slice(0, 4) +
                            "." +
                            Stp1.slice(5, 7) +
                            "." +
                            Stp1.slice(8, 10);
                        var time1 =
                            Stp1.slice(11, 13) + ":" + Stp1.slice(14, 16);
                        var datetime1 = date1 + " " + time1;

                        pastePoint = document.querySelector("div.displayall");

                        mainElement = document.createElement("div");
                        mainElement.classList.add(
                            "col-gray-white",
                            "mb-3",
                            "crd",
                            "maxer"
                        );

                        dataElement = document.createElement("div");
                        mainElement.innerHTML += `<div class="spacer" style="height: 15px;"></div>`;
                        mainElement.innerHTML +=
                            `<h5 class="crd-title">` +
                            data.data.attributes.Title +
                            "</h5>";
                        mainElement.innerHTML +=
                            '<p class="crd-text">' +
                            data.data.attributes.Text +
                            "</p>";

                        mainElement.innerHTML +=
                            '<h5 class="crd-datetime">Создано: ' +
                            datetime +
                            "<br>" +
                            "Измененно: " +
                            datetime1;
                        ("</h5>");

                        mainElement.innerHTML += `<div class="spacer" style="height: 10px;"></div>`;
                        mainElement.insertBefore(dataElement, null);
                        pastePoint.insertBefore(mainElement, null);
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
