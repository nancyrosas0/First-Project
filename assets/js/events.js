function isThisWorking() {
  console.log("working");
}
isThisWorking();

// add on click event for event button search

$("#submit-hp").on("click", function () {
  event.preventDefault();
  var city = $("#events1").val();
  var cityName = localStorage.setItem("cityName", city);
  var retrievedCityName = localStorage.getItem("cityName");

  console.log(city);
  console.log(cityName);
  window.location.href = "events.html";
  //   $("#submit").load("events.html");
  $.ajax({
    type: "GET",
    url:
      "https://app.ticketmaster.com/discovery/v2/events.json?city=" +
      retrievedCityName +
      "&size=10&apikey=hTQelPqAC1V3ziATGBzhiGUioXfc5fbi",
    async: true,
    dataType: "json",
    success: function (json) {
      console.log(json);

      // for loop through 5 events per time
      var events = json._embedded.events;
      for (var i = 0; i < events.length; i++) {
        // create cards dynamically
        var cards = $(`
        <div class="columns">
        <div class="column is-full">
          <div class="card">
          
            <section class="test1">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="${json._embedded.events[i].images[4].url}"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    ${json._embedded.events[i]._embedded.attractions[0].name}
                  </p>
                  <p class="subtitle-1 is-6">
                    <a
                      ><i
                        >${json._embedded.events[i]._embedded.attractions[0].externalLinks.homepage[0].url}</i
                      ></a
                    >
                  </p>
                </div>
              </div>
      
              <div class="content">
                ${json._embedded.events[i].name}.
                <br />
                <a
                  href="${json._embedded.events[i]._embedded.attractions[0].externalLinks.twitter[0].url}"
                  >Twitter
                </a>
                |
                <a
                  href="${json._embedded.events[i]._embedded.attractions[0].externalLinks.facebook[0].url}"
                  >Facebook</a
                >
      
                <br />
                <br />
                </section>

                <section class="test2">
                <p>
                  <strong>Date & Time</strong>
                  <br>
                  <br>
                  ${json._embedded.events[i].dates.start.localDate} at
                  ${json._embedded.events[i].dates.start.localTime}
                  <br />
                  <a href="${json._embedded.events[i].url}"
                    >Click Here to Buy Tickets</a
                  >
                </p>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
        `);
        // append cards to div
        $("#cards").append(cards);
      }
    },
    error: function (xhr, status, err) {
      // in case of error load message
      console.log("An error has ocurred");
    },
  });
});

{
  /* <div >
<figure class="image is-16by9">
  <img src=${json._embedded.events[i].images[0].url} alt="Placeholder image">
</figure>
</div> */
}
