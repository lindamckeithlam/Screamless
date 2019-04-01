export const fetchLocation = address =>
  $.ajax({
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAw5H2gCo7s186bVoKLiOfWhKWMgC2BXxw`
  });
