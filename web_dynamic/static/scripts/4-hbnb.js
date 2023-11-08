$(document).ready(function() {
    const selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).data("id");
        const amenityName = $(this).data("name");

        if (this.checked) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        const amenityList = Object.values(selectedAmenities).join(', ');

        $('div.Amenities h4').text(amenityList);
    });

    $('button').click(function() {
        const amenityIds = Object.keys(selectedAmenities);
        $.ajax({
            type: 'POST',
            url: 'places_search',
            data: JSON.stringify({ amenities: amenityIds }),
            contentType: 'application/json',
            success: function(data) {
                console.log(data);
            }
        });
    });
});
