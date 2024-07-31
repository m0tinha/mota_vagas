// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import * as bootstrap from "bootstrap"
import "@rails/actiontext"

document.addEventListener('DOMContentLoaded', function() {
    var summaryInput = document.getElementById('summary-input');
    var currentCount = document.getElementById('current');

    if (summaryInput && currentCount) {
        summaryInput.addEventListener('input', function() {
            var currentLength = summaryInput.value.length;
            currentCount.textContent = currentLength;
        });

        // Initialize the counter on page load
        var initialLength = summaryInput.value.length;
        currentCount.textContent = initialLength;
    }
});
