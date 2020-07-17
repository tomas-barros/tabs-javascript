// variables
var zeroTabState = true,
    oneTabState = false,
    twoTabState = false;

// constants
const tabZeroContent = document.getElementById('tabZeroContent');
const tabOneContent = document.getElementById('tabOneContent');
const tabTwoContent = document.getElementById('tabTwoContent');

const
    tabOne = document.getElementById('tabOne'),
    tabTwo = document.getElementById('tabTwo');

// event listeners
tabOne.addEventListener('click', showTabOne);
tabTwo.addEventListener('click', showTabTwo);

// reset
tabOneContent.style.display = 'none';
tabTwoContent.style.display = 'none';

// functions
function hideUnusedTabs(used_tab) {
    if (used_tab === 1) {
        tabTwoContent.style.display = 'none';
        tabZeroContent.style.display = 'none';
        zeroTabState = false;
        twoTabState = false;
    }
    else if (used_tab === 2) {
        tabOneContent.style.display = 'none';
        tabZeroContent.style.display = 'none';
        zeroTabState = false;
        oneTabState = false;
    }
}

function showTabOne() {
    if (!oneTabState) {
        tabOneContent.style.display = 'block';
        oneTabState = true;
        hideUnusedTabs(1);
    }
}

function showTabTwo() {
    if (!twoTabState) {
        tabTwoContent.style.display = 'block';
        twoTabState = true;
        hideUnusedTabs(2);
    }
}