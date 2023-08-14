const dropdown = $(".container_right_dropdown_each-faq");
let activeDropdown = null;

dropdown.click(function (e) {
  // saves the element clicked in a variable
  let clickedDropdown = e.currentTarget;

  //   Only activates one DropDown(dd) at a time
  // Check if the clicked dd is the one already active.
  if ($(clickedDropdown).is(activeDropdown)) {
    // if it is, close it and do anything else
    closeDropDown(clickedDropdown);
    //
  } else {
    // If it is not the same dd, close the active one and then activate the clicked one
    closeDropDown(activeDropdown);
    openDropDown(clickedDropdown);
  }
});

// Open and Close DropDowns functions to avoid repetition
function closeDropDown(dd) {
  $(dd).removeClass("active-dropdown");
  $(dd).find(".container_right_dropdown_arrow").removeClass("rotate-arrow");
  $(dd).find(".container_right_dropdown-text").hide(300);
  activeDropdown = null;
}

function openDropDown(dd) {
  $(dd).addClass("active-dropdown");
  $(dd).find(".container_right_dropdown_arrow").addClass("rotate-arrow");
  $(dd).find(".container_right_dropdown-text:hidden").show(300);
  activeDropdown = dd;
}
