'use strict';

(function () {
  var LIST_OPEN_TAG = 'material__list--open';
  var BUTTON_TAG = 'material__list-button';
  var BUTTON_SELECTED_TAG = 'material__list-button--selected';
  var selectList = document.querySelector('.material__list');
  var selectButton = document.querySelector('.material__button');

  var onClickSelectButton = function (evt) {
    evt.preventDefault();
    selectList.classList.toggle(LIST_OPEN_TAG);
    if (selectList.classList.contains(LIST_OPEN_TAG)) {
      selectList.addEventListener('click', onClickCelectMaterialButton);
    }
  };
  var onClickCelectMaterialButton = function (evt) {
    evt.preventDefault();
    if (evt.target.className === BUTTON_TAG) {
      var selectedMaterial = document.querySelector('.' + BUTTON_SELECTED_TAG);
      selectedMaterial.classList.remove(BUTTON_SELECTED_TAG);
      evt.target.classList.add(BUTTON_SELECTED_TAG);
      selectButton.textContent = evt.target.textContent;
      selectList.classList.remove(LIST_OPEN_TAG);
    }
  };
  selectButton.addEventListener('click', onClickSelectButton);

})();
