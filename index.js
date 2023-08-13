const dropdown = $(".container_right_dropdown_each-faq");
const allTexts = $(".container_right_dropdown-text");

dropdown.click(function (e) {
  // saves the element clicked in a variable
  let clickedDropdown = e.currentTarget;

  //   Only activates one at a time
  if ($(clickedDropdown).hasClass("active-dropdown")) {
    $(clickedDropdown).removeClass("active-dropdown");
    $(clickedDropdown)
      .find(".container_right_dropdown_arrow")
      .removeClass("rotate-arrow");
    allTexts.each(function (i) {
      $(allTexts[i]).hide(300);
    });
    //
  } else {
    if ($(dropdown).hasClass("active-dropdown")) {
      $(dropdown).removeClass("active-dropdown");
      $(dropdown)
        .find(".container_right_dropdown_arrow")
        .removeClass("rotate-arrow");
      allTexts.each(function (i) {
        $(allTexts[i]).hide(300);
      });
    }
    //
    $(clickedDropdown).addClass("active-dropdown");
    $(clickedDropdown)
      .find(".container_right_dropdown_arrow")
      .addClass("rotate-arrow");
    allTexts.each(function (i) {
      if ($(allTexts[i].parentElement).hasClass("active-dropdown")) {
        $(allTexts[i]).show(300);
      }
    });
  }
});
