const rangeSlider = (value) => {
    document.getElementById('rangeValue').innerHTML = value;
    document.getElementById('fillRangeTopLeft').style.width = +value / 2 + '%';
    // document.getElementById('fillRangeTopLeft').style.height = +value / 2 + '%';
    document.getElementById('fillRangeTopRight').style.width = +value / 2 + '%';
    document.getElementById('fillRangeTopRight').style.height = +value / 2 + '%';
    // document.getElementById('fillRangeBottomLeft').style.width = +value / 2 + '%';
    document.getElementById('fillRangeBottomLeft').style.height = +value / 2 + '%';
    document.getElementById('fillRangeBottomRight').style.width = +value / 2 + '%';
    // document.getElementById('fillRangeBottomRight').style.height = +value / 2 + '%';

}