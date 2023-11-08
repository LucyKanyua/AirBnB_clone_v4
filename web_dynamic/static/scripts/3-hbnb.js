$(document).ready(function() {
  // Function to create an article tag representing a Place
  function createPlaceTag(place) {
    return `
      <article>
        <div class="title">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guests</div>
          <div class="number_rooms">${place.number_rooms} Bedrooms</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>
    `;
  }

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: JSON.stringify({}),
    contentType: 'application/json',
    success: function(data) {
      const placesSection = $('section.places');

      data.forEach(function(place) {
        const placeTag = createPlaceTag(place);
        placesSection.append(placeTag);
      });
    }
  });
});
